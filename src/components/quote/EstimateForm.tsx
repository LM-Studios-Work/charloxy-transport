'use client';

import { useRef, useState } from 'react';
import { AlertCircle, CheckCircle2, ChevronDown, ChevronUp, Loader2, UploadCloud, X } from 'lucide-react';
import { movingExtras } from '@/data/movingExtras';

export default function EstimateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');
  const [showExtras, setShowExtras] = useState(false);
  
  const [files, setFiles] = useState<File[]>([]);
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const selectedFiles = e.target.files;
    if (selectedFiles && selectedFiles.length > 0) {
      const filesArray = Array.from(selectedFiles);
      setFiles((prev) => {
        const combined = [...prev, ...filesArray];
        if (combined.length > 6) {
          alert('You can only upload a maximum of 6 photos.');
          return combined.slice(0, 6);
        }
        return combined;
      });
    }
    
    // Clear the input value so the exact same file can be selected again if needed
    // Deferring this slightly ensures the files are fully processed first
    setTimeout(() => {
      if (fileInputRef.current) {
        fileInputRef.current.value = '';
      }
    }, 0);
  };

  const removeFile = (indexToRemove: number) => {
    setFiles((prev) => prev.filter((_, index) => index !== indexToRemove));
  };

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    const form = event.currentTarget;
    const formData = new FormData(form);
    
    // Override the images with our state since we can't easily mutate the input's FileList
    formData.delete('images');
    files.forEach((file) => formData.append('images', file));

    try {
      const response = await fetch('/api/quote', { method: 'POST', body: formData });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to submit quote request');
      setStatus('success');
      form.reset();
      setFiles([]);
    } catch (error) {
      setStatus('error');
      setErrorMessage(error instanceof Error ? error.message : 'Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }

  if (status === 'success') return <div className="flex min-h-[520px] flex-col items-center justify-center rounded-[1.5rem] bg-background p-8 text-center"><CheckCircle2 className="size-14 text-gold" /><h2 className="display-tight mt-5 text-4xl text-navy">Request received.</h2><p className="mt-3 max-w-sm text-sm leading-6 text-ink-muted">Thank you for reaching out to Charloxy Transport. We will get back to you with a quote shortly.</p><button type="button" onClick={() => setStatus('idle')} className="mt-6 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-background">Submit another request</button></div>;

  return (
    <form onSubmit={handleSubmit} className="rounded-[1.5rem] bg-background p-5 shadow-2xl md:p-7">
      <p className="display-tight text-3xl text-navy md:text-4xl">Request a free moving estimate</p>
      <p className="mt-2 text-sm leading-6 text-ink-muted">Tell us what you need moved and we&apos;ll prepare a clear estimate.</p>
      
      {status === 'error' && (
        <div role="alert" className="mt-4 flex gap-2 rounded-xl bg-paper p-3 text-sm text-navy">
          <AlertCircle className="size-5 shrink-0 text-gold" />
          {errorMessage}
        </div>
      )}

      <div className="mt-6 grid grid-cols-1 gap-3 md:grid-cols-2">
        <div>
          <label htmlFor="hero-name" className="sr-only">Full name</label>
          <input required id="hero-name" name="name" placeholder="Full name*" className="estimate-input" />
        </div>
        
        <div>
          <label htmlFor="hero-phone" className="sr-only">Phone number</label>
          <input required id="hero-phone" name="phone" type="tel" placeholder="Phone number*" className="estimate-input" />
        </div>
        
        <div>
          <label htmlFor="hero-email" className="sr-only">Email address</label>
          <input required id="hero-email" name="email" type="email" placeholder="Email address*" className="estimate-input" />
        </div>
        
        <div className="min-w-0 relative">
          <label htmlFor="hero-date" className="sr-only">Preferred move date</label>
          <input 
            required 
            id="hero-date" 
            name="date" 
            type="date" 
            placeholder="Preferred move date*"
            className="estimate-input min-w-0 max-w-full appearance-none" 
          />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="hero-pickup" className="sr-only">Origin full address</label>
          <input required id="hero-pickup" name="pickup" placeholder="Origin full address*" className="estimate-input" />
        </div>
        
        <div className="md:col-span-2">
          <label htmlFor="hero-delivery" className="sr-only">Destination full address</label>
          <input required id="hero-delivery" name="delivery" placeholder="Destination full address*" className="estimate-input" />
        </div>
        
        <label htmlFor="hero-description" className="sr-only">Write your comment</label>
        <textarea id="hero-description" name="description" rows={3} placeholder="Write your comment" className="estimate-input resize-none md:col-span-2" />

        <div className="md:col-span-2 relative">
          <button 
            type="button" 
            onClick={() => setShowExtras(!showExtras)} 
            className="flex w-full items-center justify-between rounded-xl border border-[color-mix(in_srgb,var(--navy)_20%,transparent)] bg-paper px-4 py-3 text-sm font-semibold text-navy transition-colors hover:bg-white"
          >
            <span>Add Optional Packing & Moving Extras</span>
            {showExtras ? <ChevronUp size={18} /> : <ChevronDown size={18} />}
          </button>
          
          {showExtras && (
            <div className="absolute top-full left-0 right-0 z-50 mt-2 max-h-64 overflow-y-auto grid grid-cols-1 gap-3 rounded-xl border border-[color-mix(in_srgb,var(--navy)_10%,transparent)] bg-paper p-4 shadow-xl sm:grid-cols-2">
              {movingExtras.map((extra) => (
                <label key={extra.id} className="group flex cursor-pointer items-start gap-3 rounded-lg border border-transparent p-2 transition-colors hover:bg-white">
                  <input 
                    type="checkbox" 
                    name="extras" 
                    value={extra.name} 
                    className="mt-1 size-4 shrink-0 rounded border-[color-mix(in_srgb,var(--navy)_30%,transparent)] text-navy focus:ring-navy" 
                  />
                  <div>
                    <p className="text-sm font-semibold text-navy">{extra.name}</p>
                    <p className="mt-0.5 text-xs leading-relaxed text-ink-muted">{extra.description}</p>
                  </div>
                </label>
              ))}
            </div>
          )}
        </div>

        <div className="md:col-span-2">
          <div className="sr-only">Upload photos (optional)</div>
          <label className={`group flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-[color-mix(in_srgb,var(--navy)_20%,transparent)] rounded-xl transition-colors ${files.length >= 6 ? 'bg-gray-100 opacity-50 cursor-not-allowed' : 'cursor-pointer bg-paper hover:bg-white'}`}>
            <div className="flex flex-col items-center justify-center mt-2">
              <UploadCloud className="w-5 h-5 mb-1 text-ink-muted group-hover:text-gold transition-colors" />
              <p className="text-sm text-ink-muted">
                <span className="font-semibold text-navy">
                  {files.length >= 6 ? 'Maximum photos reached' : 'Click to upload photos'}
                </span> (Max 6)
              </p>
            </div>
            <input 
              name="images_temp" 
              type="file" 
              multiple 
              accept="image/*" 
              className="hidden" 
              ref={fileInputRef}
              onChange={handleFileChange}
              disabled={files.length >= 6}
            />
          </label>

          {files.length > 0 && (
            <div className="mt-3 flex flex-wrap gap-2">
              {files.map((file, index) => (
                <div key={`${file.name}-${index}`} className="flex items-center gap-2 rounded-lg border border-[color-mix(in_srgb,var(--navy)_10%,transparent)] bg-white px-3 py-1.5 text-xs text-navy shadow-sm">
                  <span className="max-w-[150px] truncate">{file.name}</span>
                  <button 
                    type="button" 
                    onClick={() => removeFile(index)} 
                    className="text-ink-muted hover:text-red-500 transition-colors"
                    aria-label={`Remove ${file.name}`}
                  >
                    <X className="size-3.5" />
                  </button>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-4 font-display text-xl uppercase text-navy transition-colors hover:bg-navy hover:text-background disabled:opacity-70">
        {isSubmitting && <Loader2 className="size-5 animate-spin" />}
        {isSubmitting ? 'Sending...' : 'Get a quote'}
      </button>
    </form>
  );
}
