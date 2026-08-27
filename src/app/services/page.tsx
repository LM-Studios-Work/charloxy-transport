import Link from 'next/link';
import { HomeIcon, Sofa, PackageCheck, HardHat, Box, Briefcase } from 'lucide-react';

const services = [
  {
    title: 'Home & Office Moving',
    description: 'Whether you are moving down the street or across the city, our team ensures your belongings are packed, transported, and unpacked with care.',
    icon: HomeIcon,
  },
  {
    title: 'Furniture & Appliance Deliveries',
    description: 'Bought new furniture or need to move a fridge? We provide safe and fast delivery services for bulky items directly to your door.',
    icon: Sofa,
  },
  {
    title: 'Collections & Deliveries',
    description: 'General collection and delivery services for parcels, packages, and important goods that need to arrive on time.',
    icon: PackageCheck,
  },
  {
    title: 'Building Material Transport',
    description: 'Reliable transport for construction materials. We help contractors and DIY enthusiasts get their supplies to the site efficiently.',
    icon: HardHat,
  },
  {
    title: 'General Goods Transport',
    description: 'Flexible transport solutions for a wide variety of goods. If it fits in our vehicles, we can move it safely.',
    icon: Box,
  },
  {
    title: 'Transport Services for Businesses',
    description: 'B2B logistics, property-related jobs, and regular transport contracts to keep your business operations running smoothly.',
    icon: Briefcase,
  },
];

export default function Services() {
  return (
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-2xl lg:text-center">
          <h2 className="text-base font-semibold leading-7 text-[#b7800c]">Our Capabilities</h2>
          <p className="mt-2 text-3xl font-bold tracking-tight text-[#03152d] sm:text-4xl">
            What We Do
          </p>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            From single item deliveries to complete office relocations, Charloxy Transport offers a diverse range of services tailored to your needs.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-none">
          <div className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-16 lg:max-w-none lg:grid-cols-3">
            {services.map((service) => (
              <div key={service.title} className="flex flex-col bg-gray-50 rounded-2xl p-8 ring-1 ring-inset ring-gray-200 hover:shadow-lg transition-shadow">
                <dt className="flex items-center gap-x-3 text-xl font-semibold leading-7 text-[#03152d]">
                  <div className="h-12 w-12 flex items-center justify-center rounded-lg bg-[#03152d] shadow-sm">
                    <service.icon className="h-6 w-6 text-[#b7800c]" aria-hidden="true" />
                  </div>
                  {service.title}
                </dt>
                <dd className="mt-6 flex flex-auto flex-col text-base leading-7 text-gray-600">
                  <p className="flex-auto">{service.description}</p>
                </dd>
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-24 text-center">
          <p className="text-lg font-semibold text-[#03152d] mb-6">Need a service not listed here?</p>
          <Link
            href="/contact"
            className="rounded-md bg-white px-6 py-3 text-sm font-semibold text-[#03152d] shadow-sm ring-1 ring-inset ring-[#03152d] hover:bg-gray-50 transition-colors"
          >
            Contact us to discuss your requirements
          </Link>
        </div>
      </div>
    </div>
  );
}
