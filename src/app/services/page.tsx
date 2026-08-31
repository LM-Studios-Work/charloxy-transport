import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const services = [
  ['Home & Office Moving', 'Whether you are moving down the street or across the city, our team ensures your belongings are packed, transported, and unpacked with care.'],
  ['Furniture & Appliance Deliveries', 'Bought new furniture or need to move a fridge? We provide safe and fast delivery services for bulky items directly to your door.'],
  ['Collections & Deliveries', 'General collection and delivery services for parcels, packages, and important goods that need to arrive on time.'],
  ['Building Material Transport', 'Reliable transport for construction materials. We help contractors and DIY enthusiasts get their supplies to the site efficiently.'],
  ['General Goods Transport', 'Flexible transport solutions for a wide variety of goods. If it fits in our vehicles, we can move it safely.'],
  ['Transport Services for Businesses', 'B2B logistics, property-related jobs, and regular transport contracts to keep your business operations running smoothly.'],
];

export default function Services() { return <div className="bg-background"><section className="container-wide py-20 md:py-28"><p className="font-display text-sm uppercase tracking-[.15em] text-gold">Our capabilities</p><h1 className="display-tight mt-4 max-w-3xl text-6xl text-navy md:text-8xl">What we <span className="text-gold">do.</span></h1><p className="mt-6 max-w-xl text-lg leading-8 text-ink-muted">From single item deliveries to complete office relocations, Charloxy Transport offers a diverse range of services tailored to your needs.</p><div className="mt-14 grid gap-px overflow-hidden rounded-2xl bg-navy/15 md:grid-cols-2 lg:grid-cols-3">{services.map(([title, description], index) => <article key={title} className="flex min-h-64 flex-col bg-paper p-7 transition-colors hover:bg-gold"><p className="font-mono text-xs text-gold">0{index + 1}</p><h2 className="font-display mt-auto text-3xl uppercase text-navy">{title}</h2><p className="mt-3 text-sm leading-6 text-ink-muted">{description}</p></article>)}</div><div className="mt-16 flex flex-col items-start justify-between gap-5 rounded-2xl bg-navy p-8 md:flex-row md:items-center md:p-10"><p className="font-display text-3xl uppercase text-background">Need a service not listed here?</p><Link href="/contact" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-3 text-sm font-semibold text-navy">Contact us <ArrowRight size={16} /></Link></div></section></div>; }
