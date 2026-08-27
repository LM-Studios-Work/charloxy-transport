import Link from 'next/link';
import { Truck, Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-[#03152d] text-white">
      <div className="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="space-y-8">
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-white p-2 rounded-lg">
                <Truck className="h-8 w-8 text-[#b7800c]" />
              </div>
              <div className="flex flex-col">
                <span className="text-xl font-bold text-white leading-none tracking-tight">CHARLOXY</span>
                <span className="text-sm font-semibold text-[#b7800c] leading-none tracking-widest">TRANSPORT</span>
              </div>
            </Link>
            <p className="text-sm leading-6 text-gray-300">
              Reliable. Safe. On Time. Your trusted partner for home, office, and business transport.
            </p>
            <p className="text-sm leading-6 text-gray-400">
              A division of Charloxy Investment (Pty) Ltd.
            </p>
          </div>
          <div className="mt-16 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h3 className="text-sm font-semibold leading-6 text-white">Services</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">Home & Office Moving</Link></li>
                  <li><Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">Furniture Delivery</Link></li>
                  <li><Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">Building Material</Link></li>
                  <li><Link href="/services" className="text-sm leading-6 text-gray-300 hover:text-white">General Goods</Link></li>
                </ul>
              </div>
              <div className="mt-10 md:mt-0">
                <h3 className="text-sm font-semibold leading-6 text-white">Company</h3>
                <ul role="list" className="mt-6 space-y-4">
                  <li><Link href="/about" className="text-sm leading-6 text-gray-300 hover:text-white">About Us</Link></li>
                  <li><Link href="/contact" className="text-sm leading-6 text-gray-300 hover:text-white">Contact</Link></li>
                  <li><Link href="/quote" className="text-sm leading-6 text-gray-300 hover:text-white">Request Quote</Link></li>
                </ul>
              </div>
            </div>
            <div>
              <h3 className="text-sm font-semibold leading-6 text-white">Contact Us</h3>
              <ul role="list" className="mt-6 space-y-4">
                <li className="flex gap-3">
                  <Phone className="h-5 w-5 text-[#b7800c] flex-shrink-0" />
                  <span className="text-sm leading-6 text-gray-300">+27 82 429 6737</span>
                </li>
                <li className="flex gap-3">
                  <Mail className="h-5 w-5 text-[#b7800c] flex-shrink-0" />
                  <span className="text-sm leading-6 text-gray-300">lm.studios.web@gmail.com</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="mt-16 border-t border-white/10 pt-8 sm:mt-20 lg:mt-24">
          <p className="text-xs leading-5 text-gray-400">
            &copy; {new Date().getFullYear()} Charloxy Transport. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
