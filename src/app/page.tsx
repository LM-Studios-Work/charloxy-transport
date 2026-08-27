import Link from 'next/link';
import { Truck, ShieldCheck, Clock, Package } from 'lucide-react';

export default function Home() {
  return (
    <div className="bg-white">
      {/* Hero section */}
      <div className="relative isolate overflow-hidden bg-[#03152d]">
        <img
          src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&q=80"
          alt="Moving truck"
          className="absolute inset-0 -z-10 h-full w-full object-cover opacity-20"
        />
        <div className="mx-auto max-w-7xl px-6 pb-24 pt-10 sm:pb-32 lg:flex lg:px-8 lg:py-40">
          <div className="mx-auto max-w-2xl lg:mx-0 lg:max-w-xl lg:flex-shrink-0 lg:pt-8">
            <h1 className="mt-10 text-4xl font-bold tracking-tight text-white sm:text-6xl">
              Reliable. Safe. <span className="text-[#b7800c]">On Time.</span>
            </h1>
            <p className="mt-6 text-lg leading-8 text-gray-300">
              Your trusted partner for home moving, office relocations, and professional transport services across the region. We handle your goods with the utmost care.
            </p>
            <div className="mt-10 flex items-center gap-x-6">
              <Link
                href="/quote"
                className="rounded-md bg-[#b7800c] px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-[#9a6a09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7800c]"
              >
                Request a Quote
              </Link>
              <Link href="/services" className="text-sm font-semibold leading-6 text-white group flex items-center gap-2">
                Our Services <span aria-hidden="true" className="transition-transform group-hover:translate-x-1">→</span>
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Services overview section */}
      <div className="py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl lg:text-center">
            <h2 className="text-base font-semibold leading-7 text-[#b7800c]">Everything you need</h2>
            <p className="mt-2 text-3xl font-bold tracking-tight text-[#03152d] sm:text-4xl">
              Comprehensive Transport Solutions
            </p>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From residential moves to commercial logistics, we have the fleet and the expertise to deliver.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
            <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
              {[
                {
                  name: 'Home & Office Moving',
                  description: 'Stress-free relocations with professional packing, loading, and safe transport to your new destination.',
                  icon: Truck,
                },
                {
                  name: 'Furniture & Appliances',
                  description: 'Safe collection and delivery of your valuable items, ensuring they arrive without a scratch.',
                  icon: Package,
                },
                {
                  name: 'Commercial & Building',
                  description: 'Transport services for businesses, property jobs, and construction material deliveries.',
                  icon: Clock,
                },
              ].map((feature) => (
                <div key={feature.name} className="flex flex-col">
                  <dt className="flex items-center gap-x-3 text-base font-semibold leading-7 text-[#03152d]">
                    <div className="h-10 w-10 flex items-center justify-center rounded-lg bg-[#03152d]">
                      <feature.icon className="h-6 w-6 text-[#b7800c]" aria-hidden="true" />
                    </div>
                    {feature.name}
                  </dt>
                  <dd className="mt-4 flex flex-auto flex-col text-base leading-7 text-gray-600">
                    <p className="flex-auto">{feature.description}</p>
                    <p className="mt-6">
                      <Link href="/services" className="text-sm font-semibold leading-6 text-[#b7800c] hover:text-[#03152d]">
                        Learn more <span aria-hidden="true">→</span>
                      </Link>
                    </p>
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="text-3xl font-bold tracking-tight text-[#03152d] sm:text-4xl">Why Choose Charloxy Transport?</h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              We pride ourselves on providing a premium, dependable service. Your peace of mind is our top priority.
            </p>
          </div>
          <div className="mx-auto mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none shadow-sm bg-white">
            <div className="p-8 sm:p-10 lg:flex-auto">
              <h3 className="text-2xl font-bold tracking-tight text-[#03152d]">Fully Insured Operations</h3>
              <p className="mt-6 text-base leading-7 text-gray-600">
                We understand that your goods are valuable. That's why we carry comprehensive coverage for every trip we make.
              </p>
              <div className="mt-10 flex items-center gap-x-4">
                <h4 className="flex-none text-sm font-semibold leading-6 text-[#b7800c]">What's included</h4>
                <div className="h-px flex-auto bg-gray-100" />
              </div>
              <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
                <li className="flex gap-x-3">
                  <ShieldCheck className="h-6 w-5 flex-none text-[#b7800c]" aria-hidden="true" />
                  Goods in Transit Insurance
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheck className="h-6 w-5 flex-none text-[#b7800c]" aria-hidden="true" />
                  Coverage up to R150,000
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheck className="h-6 w-5 flex-none text-[#b7800c]" aria-hidden="true" />
                  Professional Handling
                </li>
                <li className="flex gap-x-3">
                  <ShieldCheck className="h-6 w-5 flex-none text-[#b7800c]" aria-hidden="true" />
                  Real-time Updates
                </li>
              </ul>
            </div>
            <div className="p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
              <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16 h-full">
                <div className="mx-auto max-w-xs px-8">
                  <p className="text-base font-semibold text-gray-600">Ready to move?</p>
                  <p className="mt-6 flex items-baseline justify-center gap-x-2">
                    <span className="text-5xl font-bold tracking-tight text-[#03152d]">Fast</span>
                    <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">Quotes</span>
                  </p>
                  <Link
                    href="/quote"
                    className="mt-10 block w-full rounded-md bg-[#b7800c] px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-[#9a6a09] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#b7800c]"
                  >
                    Get a Quote Now
                  </Link>
                  <p className="mt-6 text-xs leading-5 text-gray-600">
                    No hidden fees. Professional service.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
