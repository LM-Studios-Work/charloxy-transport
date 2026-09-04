'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ChevronDown, Menu, Phone, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const services = [
  { name: 'Home & Office Moving', href: '/services/home-office-moving' },
  { name: 'Furniture & Appliance Deliveries', href: '/services/furniture-appliance-deliveries' },
  { name: 'Collections & Deliveries', href: '/services/collections-deliveries' },
  { name: 'Building Material Transport', href: '/services/building-material-transport' },
  { name: 'General Goods Transport', href: '/services/general-goods-transport' },
  { name: 'Transport Services for Businesses', href: '/services/business-transport' },
];

const navigation = [
  { name: 'Home', href: '/' },
  { name: 'About Us', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Contact', href: '/contact' },
];

const phoneNumber = '+27 82 429 6737';
const phoneHref = 'tel:+27824296737';

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [desktopServicesOpen, setDesktopServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);

  const isActive = (href: string) => pathname === href || (href !== '/' && pathname.startsWith(href));

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }

    if (!open) return;
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') setOpen(false);
    };
    document.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = '';
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [open]);

  const closeMobile = () => {
    setOpen(false);
    setMobileServicesOpen(false);
  };

  return (
    <>
      <header className="glass fixed inset-x-0 top-0 z-50 border-b border-navy/10">
      <nav className="container-wide flex h-[72px] items-center justify-between" aria-label="Global">
        <Link href="/" className="flex items-center gap-2" onClick={closeMobile}>
          <img src="/logo-extracted.png" alt="Charloxy Transport Logo" className="h-9 w-auto object-contain" />
          <span className="font-display text-xl uppercase tracking-tight text-navy">
            Charloxy <span className="text-gold">Transport</span>
          </span>
        </Link>

        <div className="hidden flex-1 items-center justify-center gap-8 lg:flex">
          {navigation.map((item) => item.name === 'Services' ? (
            <div key={item.href} className="relative flex items-center gap-1">
              <Link
                href={item.href}
                className={`text-sm font-semibold transition-colors ${isActive(item.href) ? 'text-gold' : 'text-navy hover:text-gold'}`}
              >
                {item.name}
              </Link>
              <button
                type="button"
                aria-expanded={desktopServicesOpen}
                aria-controls="desktop-services-menu"
                aria-label="Show all services"
                onClick={() => setDesktopServicesOpen((value) => !value)}
                className="rounded p-1 text-navy transition-colors hover:text-gold"
              >
                <ChevronDown className={`transition-transform ${desktopServicesOpen ? 'rotate-180' : ''}`} size={15} />
              </button>
              <AnimatePresence>
                {desktopServicesOpen && (
                  <motion.div
                    id="desktop-services-menu"
                    initial={{ opacity: 0, y: -6 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -6 }}
                    className="absolute left-1/2 top-full mt-4 w-72 -translate-x-1/2 overflow-hidden rounded-lg border border-navy/10 bg-background shadow-xl"
                  >
                    {services.map((service, index) => (
                      <Link
                        key={service.href}
                        href={service.href}
                        onClick={() => setDesktopServicesOpen(false)}
                        className={`block px-4 py-3 text-sm font-medium transition-colors hover:bg-paper hover:text-gold ${index > 0 ? 'border-t border-navy/10' : ''} ${pathname === service.href ? 'text-gold' : 'text-navy'}`}
                      >
                        {service.name}
                      </Link>
                    ))}
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ) : (
            <Link
              key={item.href}
              href={item.href}
              className={`text-sm font-semibold transition-colors ${pathname === item.href ? 'text-gold' : 'text-navy hover:text-gold'}`}
            >
              {item.name}
            </Link>
          ))}
        </div>

        <div className="hidden items-center justify-end gap-5 lg:flex">
          <a href={phoneHref} className="flex items-center gap-2 text-navy transition-colors hover:text-gold">
            <span className="flex items-center justify-center rounded-full border-2 border-current p-1.5"><Phone size={14} className="fill-current" /></span>
            <span className="whitespace-nowrap text-lg font-bold">{phoneNumber}</span>
          </a>
          <Link href="/quote" className="whitespace-nowrap rounded-md bg-gold px-6 py-2.5 text-sm font-bold text-navy hover:bg-gold/90">Get A Estimate</Link>
        </div>

        <button type="button" className="rounded-full p-2 text-navy lg:hidden" onClick={() => setOpen(true)} aria-label="Open main menu">
          <Menu />
        </button>
      </nav>
    </header>

      <AnimatePresence>
        {open && (
          <>
            <motion.button
              type="button"
              aria-label="Close main menu"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={closeMobile}
              className="fixed inset-0 z-[60] cursor-default bg-navy/30 lg:hidden"
            />
            <motion.aside
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', ease: [0.22, 1, 0.36, 1], duration: 0.35 }}
              className="fixed inset-y-0 right-0 z-[70] flex w-[min(88vw,390px)] flex-col overflow-y-auto bg-background p-6 shadow-2xl lg:hidden"
              aria-label="Mobile navigation"
            >
              <div className="flex items-center justify-between">
                <Link href="/" onClick={closeMobile} className="flex items-center gap-2 font-display text-xl uppercase text-navy"><img src="/logo-extracted.png" alt="Charloxy Transport logo" className="h-8 w-auto object-contain" />Charloxy <span className="text-gold">Transport</span></Link>
                <button type="button" onClick={closeMobile} aria-label="Close main menu" className="rounded-full p-2 text-navy hover:bg-paper"><X /></button>
              </div>

              <div className="mt-10 flex flex-col">
                {navigation.map((item) => item.name === 'Services' ? (
                  <div key={item.href} className="border-t border-navy/15">
                    <div className="flex items-center justify-between">
                      <Link href={item.href} onClick={closeMobile} className={`py-5 font-display text-3xl uppercase ${isActive(item.href) ? 'text-gold' : 'text-navy'}`}>{item.name}</Link>
                      <button type="button" aria-label="Expand services" aria-expanded={mobileServicesOpen} onClick={() => setMobileServicesOpen((value) => !value)} className="p-3 text-navy"><ChevronDown className={`transition-transform ${mobileServicesOpen ? 'rotate-180' : ''}`} /></button>
                    </div>
                    <AnimatePresence>
                      {mobileServicesOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden border-t border-navy/10">
                        {services.map((service) => <Link key={service.href} href={service.href} onClick={closeMobile} className={`block border-b border-navy/10 py-3 pl-3 text-sm font-semibold hover:text-gold ${pathname === service.href ? 'text-gold' : 'text-ink-muted'}`}>{service.name}</Link>)}
                      </motion.div>}
                    </AnimatePresence>
                  </div>
                ) : <Link key={item.href} href={item.href} onClick={closeMobile} className={`border-t border-navy/15 py-5 font-display text-3xl uppercase ${isActive(item.href) ? 'text-gold' : 'text-navy'}`}>{item.name}</Link>)}
              </div>

              <div className="mt-auto flex flex-col gap-4 border-t border-navy/15 pt-6">
                <a href={phoneHref} className="flex items-center justify-center gap-3 text-center font-display text-2xl text-navy"><Phone size={25} /> {phoneNumber}</a>
                <Link href="/quote" onClick={closeMobile} className="rounded-md bg-gold px-5 py-4 text-center font-bold text-navy">Get A Estimate</Link>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
