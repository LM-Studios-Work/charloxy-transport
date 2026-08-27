'use client';

import { useState } from 'react';
import { UploadCloud, CheckCircle2, Loader2, AlertCircle } from 'lucide-react';

export default function Quote() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const [files, setFiles] = useState<File[]>([]);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      setFiles(Array.from(e.target.files));
    }
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus('idle');

    const form = e.currentTarget;
    const formData = new FormData(form);
    
    // Append files correctly
    files.forEach((file) => {
      formData.append('images', file);
    });

    try {
      const response = await fetch('/api/quote', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Failed to submit quote request');
      }

      setSubmitStatus('success');
      form.reset();
      setFiles([]);
    } catch (error: any) {
      console.error('Submission error:', error);
      setSubmitStatus('error');
      setErrorMessage(error.message || 'An unexpected error occurred. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  if (submitStatus === 'success') {
    return (
      <div className="bg-white py-24 sm:py-32 min-h-[70vh] flex items-center justify-center">
        <div className="mx-auto max-w-md text-center px-6">
          <CheckCircle2 className="mx-auto h-16 w-16 text-green-500 mb-6" />
          <h2 className="text-3xl font-bold tracking-tight text-[#03152d]">Request Received!</h2>
          <p className="mt-4 text-lg leading-7 text-gray-600">
            Thank you for reaching out to Charloxy Transport. We have received your details and will get back to you with a quote shortly.
          </p>
          <button
            onClick={() => setSubmitStatus('idle')}
            className="mt-8 rounded-md bg-[#03152d] px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#0a274f]"
          >
            Submit Another Request
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white py-16 sm:py-24">
      <div className="mx-auto max-w-4xl px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-[#03152d] sm:text-4xl">
            Request a Free Quote
          </h2>
          <p className="mt-4 text-lg leading-8 text-gray-600">
            Fill in the details below to give us an idea of what you need moved. Upload photos of the items to help us provide an accurate estimate.
          </p>
        </div>

        {submitStatus === 'error' && (
          <div className="mb-8 rounded-md bg-red-50 p-4 border border-red-200 flex items-center gap-3">
            <AlertCircle className="h-5 w-5 text-red-500" />
            <p className="text-sm font-medium text-red-800">{errorMessage}</p>
          </div>
        )}

        <form onSubmit={handleSubmit} className="space-y-12">
          {/* Customer Details */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-[#03152d]">Personal Information</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              <div className="sm:col-span-3">
                <label htmlFor="name" className="block text-sm font-medium leading-6 text-gray-900">Full name</label>
                <div className="mt-2">
                  <input required type="text" name="name" id="name" className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#b7800c] sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900">Email address</label>
                <div className="mt-2">
                  <input required type="email" name="email" id="email" className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#b7800c] sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="phone" className="block text-sm font-medium leading-6 text-gray-900">Phone number</label>
                <div className="mt-2">
                  <input required type="tel" name="phone" id="phone" className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#b7800c] sm:text-sm sm:leading-6" />
                </div>
              </div>
            </div>
          </div>

          {/* Move Details */}
          <div className="border-b border-gray-900/10 pb-12">
            <h2 className="text-base font-semibold leading-7 text-[#03152d]">Move Details</h2>
            <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
              
              <div className="sm:col-span-3">
                <label htmlFor="pickup" className="block text-sm font-medium leading-6 text-gray-900">Pickup Address / Area</label>
                <div className="mt-2">
                  <input required type="text" name="pickup" id="pickup" className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#b7800c] sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="delivery" className="block text-sm font-medium leading-6 text-gray-900">Delivery Address / Area</label>
                <div className="mt-2">
                  <input required type="text" name="delivery" id="delivery" className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#b7800c] sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="sm:col-span-3">
                <label htmlFor="date" className="block text-sm font-medium leading-6 text-gray-900">Preferred Moving Date</label>
                <div className="mt-2">
                  <input required type="date" name="date" id="date" className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:ring-2 focus:ring-inset focus:ring-[#b7800c] sm:text-sm sm:leading-6" />
                </div>
              </div>

              <div className="col-span-full">
                <label htmlFor="description" className="block text-sm font-medium leading-6 text-gray-900">What needs to be transported?</label>
                <div className="mt-2">
                  <textarea required name="description" id="description" rows={4} className="block w-full rounded-md border-0 py-2.5 px-3 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-[#b7800c] sm:text-sm sm:leading-6" placeholder="E.g., 3-bedroom house furniture, or 1x large fridge and 2x couches..."></textarea>
                </div>
              </div>

              <div className="col-span-full">
                <label className="block text-sm font-medium leading-6 text-gray-900">Upload photos of items (Optional)</label>
                <div className="mt-2 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10 hover:bg-gray-50 transition-colors">
                  <div className="text-center">
                    <UploadCloud className="mx-auto h-12 w-12 text-gray-300" aria-hidden="true" />
                    <div className="mt-4 flex text-sm leading-6 text-gray-600 justify-center">
                      <label htmlFor="images" className="relative cursor-pointer rounded-md bg-white font-semibold text-[#b7800c] focus-within:outline-none focus-within:ring-2 focus-within:ring-[#b7800c] focus-within:ring-offset-2 hover:text-[#9a6a09]">
                        <span>Upload files</span>
                        <input id="images" name="images" type="file" multiple accept="image/*" className="sr-only" onChange={handleFileChange} />
                      </label>
                    </div>
                    <p className="text-xs leading-5 text-gray-600 mt-2">PNG, JPG up to 5MB each</p>
                    
                    {files.length > 0 && (
                      <div className="mt-4">
                        <p className="text-sm font-medium text-gray-900">{files.length} file(s) selected:</p>
                        <ul className="mt-1 text-xs text-gray-500 max-w-xs mx-auto text-left list-disc list-inside">
                          {files.map((f, i) => (
                            <li key={i} className="truncate">{f.name}</li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                </div>
              </div>

            </div>
          </div>

          <div className="mt-6 flex items-center justify-end gap-x-6">
            <button type="submit" disabled={isSubmitting} className="inline-flex justify-center items-center gap-2 rounded-md bg-[#b7800c] px-8 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#9a6a09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7800c] disabled:opacity-70 transition-colors">
              {isSubmitting && <Loader2 className="h-4 w-4 animate-spin" />}
              {isSubmitting ? 'Sending Request...' : 'Submit Quote Request'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
