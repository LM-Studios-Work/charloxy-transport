'use client';

import { useState } from 'react';
import { AlertCircle, CheckCircle2, Loader2, UploadCloud } from 'lucide-react';

export default function EstimateForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setIsSubmitting(true);
    setStatus('idle');
    const form = event.currentTarget;
    try {
      const response = await fetch('/api/quote', { method: 'POST', body: new FormData(form) });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Failed to submit quote request');
      setStatus('success');
      form.reset();
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
        
        <div>
          <label htmlFor="hero-date" className="sr-only">Preferred move date</label>
          <input required id="hero-date" name="date" type="date" className="estimate-input" />
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

        <div className="md:col-span-2">
          <label htmlFor="hero-images" className="sr-only">Upload photos (optional)</label>
          <label htmlFor="hero-images" className="group flex flex-col items-center justify-center w-full h-24 border-2 border-dashed border-[color-mix(in_srgb,var(--navy)_20%,transparent)] rounded-xl cursor-pointer bg-paper hover:bg-white transition-colors">
            <div className="flex flex-col items-center justify-center mt-2">
              <UploadCloud className="w-5 h-5 mb-1 text-ink-muted group-hover:text-gold transition-colors" />
              <p className="text-sm text-ink-muted"><span className="font-semibold text-navy">Click to upload photos</span></p>
            </div>
            <input id="hero-images" name="images" type="file" multiple accept="image/*" className="hidden" />
          </label>
        </div>
      </div>

      <button type="submit" disabled={isSubmitting} className="mt-5 flex w-full items-center justify-center gap-2 rounded-xl bg-gold px-5 py-4 font-display text-xl uppercase text-navy transition-colors hover:bg-navy hover:text-background disabled:opacity-70">
        {isSubmitting && <Loader2 className="size-5 animate-spin" />}
        {isSubmitting ? 'Sending...' : 'Get a quote'}
      </button>
    </form>
  );
}
