import Link from 'next/link';
import { Target, TrendingUp, ShieldCheck } from 'lucide-react';

export default function About() {
  return (
    <div className="bg-white">
      <div className="relative isolate overflow-hidden bg-[#03152d] py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:mx-0">
            <h2 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">About Us</h2>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Charloxy Transport is a division of Charloxy Investment (Pty) Ltd. We are a growing transport and logistics company dedicated to providing reliable, safe, and on-time delivery services.
            </p>
          </div>
        </div>
      </div>

      <div className="mx-auto max-w-7xl px-6 py-24 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-8 text-base leading-7 text-gray-700 lg:max-w-none lg:grid-cols-2">
            <div>
              <p>
                At Charloxy Transport, we understand that whether you are moving your home, delivering furniture to a customer, or transporting building materials to a site, timing and safety are critical.
              </p>
              <p className="mt-8">
                Our mission is to take the stress out of transport. We handle every job with professionalism and care, ensuring that your goods reach their destination exactly as they left.
              </p>
            </div>
            <div>
              <p>
                We are continuously growing our fleet to serve more customers across the region. As a division of Charloxy Investment (Pty) Ltd, we have the backing and the vision to become your preferred transport partner.
              </p>
              <p className="mt-8">
                Every load we carry is protected by our comprehensive Goods in Transit insurance (up to R150,000), giving you total peace of mind.
              </p>
            </div>
          </div>
          
          <dl className="mt-16 grid grid-cols-1 gap-x-8 gap-y-12 sm:mt-20 sm:grid-cols-2 sm:gap-y-16 lg:mt-28 lg:grid-cols-3">
            <div className="flex flex-col-reverse gap-y-3 border-l border-[#b7800c] pl-6">
              <dt className="text-base leading-7 text-gray-600">Our promise to you</dt>
              <dd className="text-3xl font-semibold tracking-tight text-[#03152d] flex items-center gap-2">
                <ShieldCheck className="h-8 w-8 text-[#b7800c]" /> Safe
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 border-l border-[#b7800c] pl-6">
              <dt className="text-base leading-7 text-gray-600">Every single time</dt>
              <dd className="text-3xl font-semibold tracking-tight text-[#03152d] flex items-center gap-2">
                <Target className="h-8 w-8 text-[#b7800c]" /> On Time
              </dd>
            </div>
            <div className="flex flex-col-reverse gap-y-3 border-l border-[#b7800c] pl-6">
              <dt className="text-base leading-7 text-gray-600">Expanding our reach</dt>
              <dd className="text-3xl font-semibold tracking-tight text-[#03152d] flex items-center gap-2">
                <TrendingUp className="h-8 w-8 text-[#b7800c]" /> Growing
              </dd>
            </div>
          </dl>
        </div>
      </div>
      
      {/* CTA */}
      <div className="bg-[#b7800c] py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
            Ready to work with us?
          </h2>
          <div className="mt-8 flex items-center gap-x-6 lg:mt-0">
            <Link
              href="/quote"
              className="rounded-md bg-[#03152d] px-6 py-3 text-sm font-semibold text-white shadow-sm hover:bg-[#0a274f] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors"
            >
              Request a Quote
            </Link>
            <Link href="/contact" className="text-sm font-semibold leading-6 text-white group flex items-center gap-2">
              Contact Us <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
