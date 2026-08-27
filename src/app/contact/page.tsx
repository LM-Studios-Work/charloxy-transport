import { Phone, Mail, MapPin, Clock } from 'lucide-react';

export default function Contact() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#b7800c]">Get in Touch</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#03152d] sm:text-4xl">
            Contact Charloxy Transport
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Have a question or need to discuss a specific transport requirement? Our team is ready to assist you.
          </p>
        </div>

        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-2">

            {/* Contact Info */}
            <div className="bg-gray-50 rounded-2xl p-8 sm:p-10 lg:col-span-1">
              <h3 className="text-2xl font-bold tracking-tight text-[#03152d]">Contact Information</h3>
              <p className="mt-4 text-base leading-7 text-gray-600">
                Reach out to us via phone, email, or WhatsApp. We respond promptly to all inquiries.
              </p>

              <dl className="mt-8 space-y-6">
                <div className="flex gap-x-4">
                  <dt>
                    <span className="sr-only">Phone number</span>
                    <Phone className="h-7 w-6 text-[#b7800c]" aria-hidden="true" />
                  </dt>
                  <dd className="text-base leading-7 text-gray-600">
                    <p className="font-semibold text-[#03152d]">Call or WhatsApp</p>
                    <a className="hover:text-[#b7800c]" href="tel:+27824296737">
                      +27 82 429 6737
                    </a>
                  </dd>
                </div>

                <div className="flex gap-x-4">
                  <dt>
                    <span className="sr-only">Email</span>
                    <Mail className="h-7 w-6 text-[#b7800c]" aria-hidden="true" />
                  </dt>
                  <dd className="text-base leading-7 text-gray-600">
                    <p className="font-semibold text-[#03152d]">Email us</p>
                    <a className="hover:text-[#b7800c]" href="mailto:lm.studios.web@gmail.com">
                      lm.studios.web@gmail.com
                    </a>
                  </dd>
                </div>

                <div className="flex gap-x-4">
                  <dt>
                    <span className="sr-only">Operating Hours</span>
                    <Clock className="h-7 w-6 text-[#b7800c]" aria-hidden="true" />
                  </dt>
                  <dd className="text-base leading-7 text-gray-600">
                    <p className="font-semibold text-[#03152d]">Business Hours</p>
                    <p>Monday - Friday: 8:00 AM - 5:00 PM</p>
                    <p>Saturday: 8:00 AM - 1:00 PM</p>
                  </dd>
                </div>
              </dl>
            </div>

            {/* Simple Map / Extra Info */}
            <div className="bg-[#03152d] rounded-2xl p-8 sm:p-10 lg:col-span-1 shadow-xl flex flex-col justify-center">
              <h3 className="text-2xl font-bold tracking-tight text-white mb-6">Need a detailed quote?</h3>
              <p className="text-gray-300 mb-8 leading-relaxed">
                If you are looking for pricing on a specific move or delivery, please use our dedicated Quote Request form. It allows you to specify locations, dates, and even upload photos of the items to be transported so we can give you the most accurate price possible.
              </p>
              <a
                href="/quote"
                className="inline-flex justify-center rounded-md bg-[#b7800c] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#9a6a09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7800c] w-fit transition-transform hover:-translate-y-1"
              >
                Go to Quote Request →
              </a>
            </div>

          </div>
        </div>
      </div>
    </div>
  );
}
