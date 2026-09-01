import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Clock, Map, Package } from 'lucide-react';
import RelatedServices from '@/components/ui/RelatedServices';

const included = [
  'Point-to-point courier and collection',
  'Gumtree, Facebook Marketplace, and online order pickups',
  'Real-time ETA updates on collection day',
  'Safe packing into the vehicle',
  'Goods in Transit insurance included'
];

const steps = [
  { icon: Clock, title: 'Schedule a time', copy: 'Let us know when the item is ready for collection and we will dispatch a vehicle to meet the timeline.' },
  { icon: Map, title: 'We collect', copy: 'Our team arrives at the seller, warehouse, or store, inspects the item, and carefully loads it.' },
  { icon: Package, title: 'Safe delivery', copy: 'The item is transported safely to your requested destination, avoiding the hassle of doing it yourself.' },
];

export const metadata = { title: 'Collections & Deliveries | Charloxy Transport', description: 'Reliable point-to-point collection and delivery services for private and commercial goods.' };

export default function CollectionsDeliveriesPage() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="container-wide pb-20 pt-8 md:pb-24 md:pt-14">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-navy">
          <ArrowLeft size={16} /> All services
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-display text-sm uppercase tracking-[.2em] text-gold">03 / Point-to-point courier</p>
            <h1 className="display-tight mt-5 max-w-3xl text-6xl text-navy md:text-8xl">You buy it. <span className="text-gold">We collect it.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted">Need something picked up but don't have the right vehicle? We handle collections from private sellers, online marketplaces, and retail stores across Johannesburg.</p>
            <Link href="/quote" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">
              Arrange a collection <ArrowRight size={18} />
            </Link>
          </div>
          <div className="photo-card relative min-h-[390px] bg-navy md:min-h-[520px]">
            <img src="/handing_over_package.jpg" alt="Courier handing over a package" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-3xl uppercase leading-none text-background">Fast. Reliable. Direct.</p>
          </div>
        </div>
      </section>
      
      <section className="border-y border-navy/10 bg-navy py-7 text-background">
        <div className="container-wide flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-5">
            <img src="/insurance%20badge.png" alt="Transit insurance badge" className="size-20 shrink-0 object-contain" />
            <div>
              <p className="font-display text-sm uppercase tracking-[.18em] text-gold">Fully protected</p>
              <p className="mt-1 font-display text-4xl uppercase leading-none text-background md:text-5xl">R150k <span className="text-gold">Insurance.</span></p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
            <p className="max-w-md text-sm leading-6 text-background/70">Whatever we are collecting for you, it is automatically covered against transit damage up to R150,000.</p>
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy">Move with confidence <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-wide">
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">How it works</p>
          <h2 className="display-tight mt-3 max-w-3xl text-5xl text-navy md:text-7xl">Seamless <span className="text-gold">logistics.</span></h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, copy }, index) => (
              <article key={title} className="rounded-2xl bg-background p-7 md:p-8">
                <div className="flex items-center justify-between">
                  <span className="font-mono text-xs text-ink-muted">0{index + 1}</span>
                  <span className="grid size-11 place-items-center rounded-full bg-gold text-navy"><Icon size={20} /></span>
                </div>
                <h3 className="mt-16 font-display text-3xl uppercase text-navy">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink-muted">{copy}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Included</p>
            <h2 className="display-tight mt-3 text-5xl text-navy md:text-6xl">We handle the <span className="text-gold">logistics.</span></h2>
          </div>
          <ul className="grid gap-0">
            {included.map(item => (
              <li key={item} className="flex items-center gap-4 border-b border-navy/15 py-5 text-base font-semibold text-navy">
                <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold"><Check size={16} /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <RelatedServices />
      
      <section className="container-wide pb-20">
        <div className="flex flex-col gap-6 rounded-[1.5rem] bg-navy p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="font-display text-4xl uppercase text-background md:text-5xl">Ready for collection?</p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-background/70">Send us the collection and delivery addresses for a quick quote.</p>
          </div>
          <Link href="/quote" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Get an estimate <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
