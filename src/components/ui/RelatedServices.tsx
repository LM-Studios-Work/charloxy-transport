import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';

export const serviceLinks = [
  { title: 'Home & Office Moving', slug: 'home-office-moving', copy: 'Residential & office moving handled with care.', image: '/moving_truck.jpg' },
  { title: 'Furniture & Appliance Deliveries', slug: 'furniture-appliance-deliveries', copy: 'Bulky items moved safely, from store to door.', image: '/packing_furniture.jpg' },
  { title: 'Collections & Deliveries', slug: 'collections-deliveries', copy: 'Time-sensitive goods handled with care.', image: '/handing_over_package.jpg' },
  { title: 'Building Material Transport', slug: 'building-material-transport', copy: 'Reliable site deliveries across Johannesburg.', image: '/construction_material.jpg' },
  { title: 'General Goods Transport', slug: 'general-goods-transport', copy: 'Flexible transport for everyday business needs.', image: '/packed_boxes.jpg' },
  { title: 'Transport Services for Businesses', slug: 'business-transport', copy: 'Organised logistics that keep your operation moving.', image: '/loading_onto_van.jpg' },
];

export default function RelatedServices({ currentSlug }: { currentSlug?: string }) {
  const filtered = currentSlug 
    ? serviceLinks.filter(s => s.slug !== currentSlug) 
    : serviceLinks;

  return (
    <section className="container-wide pb-20 md:pb-28">
      <div className="flex flex-col gap-4 border-b border-navy/15 pb-6 md:flex-row md:items-end md:justify-between">
        <div>
          <h2 className="display-tight mt-2 text-5xl text-navy md:text-6xl">More ways we can <span className="text-gold">help.</span></h2>
        </div>
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline-offset-4 hover:underline">View all services <ArrowUpRight size={16} /></Link>
      </div>
      <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {filtered.slice(0, 5).map((service) => (
          <Link
            key={service.slug}
            href={`/services/${service.slug}`}
            className="group relative flex min-h-[280px] flex-col justify-end overflow-hidden rounded-2xl bg-navy p-6 transition-transform hover:-translate-y-1"
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/95 via-navy/60 to-navy/15" />
            <div className="relative mb-auto flex items-start justify-end">
              <span className="grid size-9 place-items-center rounded-full border border-gold/30 text-gold transition-transform group-hover:rotate-45 group-hover:bg-gold group-hover:text-navy">
                <ArrowUpRight size={16} />
              </span>
            </div>
            <div className="relative">
              <h3 className="font-display text-2xl uppercase leading-none text-background">{service.title}</h3>
              <p className="mt-2 text-xs leading-relaxed text-background/75">{service.copy}</p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

export function MinimalServicePage({ title, description }: { title: string; description: string }) {
  return <main className="container-wide py-16 md:py-24"><p className="font-display text-sm uppercase tracking-[.14em] text-gold">Charloxy Transport / Service</p><h1 className="display-tight mt-5 max-w-4xl text-6xl text-navy md:text-8xl">{title}</h1><p className="mt-7 max-w-2xl text-lg leading-8 text-ink-muted">{description}</p><Link href="/quote" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Get an estimate <ArrowUpRight size={18} /></Link><div className="mt-20 border-t border-navy/15 pt-8"><Link href="/services" className="text-sm font-semibold text-navy underline underline-offset-4">Browse all services</Link></div></main>;
}

export const minimalServicePages = [
  ['furniture-appliance-deliveries', 'Furniture & Appliance Deliveries', 'Safe, careful transport for bulky furniture and appliances across Johannesburg.'],
  ['collections-deliveries', 'Collections & Deliveries', 'Reliable collections and deliveries for parcels, goods, and important items.'],
  ['building-material-transport', 'Building Material Transport', 'Practical transport for construction materials, tools, and site supplies.'],
  ['general-goods-transport', 'General Goods Transport', 'Flexible, secure transport for general goods throughout Gauteng.'],
  ['business-transport', 'Transport Services for Businesses', 'Organised business transport that supports relocations, deliveries, and regular logistics.'],
] as const;

export const serviceDescriptions = Object.fromEntries(minimalServicePages.map(([slug, title, description]) => [slug, { title, description }]));
