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
        <nav className="flex items-center gap-2 text-sm font-semibold text-ink-muted">
          <Link href="/services" className="hover:text-navy">Services</Link>
          <span className="text-navy/30">/</span>
          <span className="text-navy">Collections &amp; Deliveries</span>
        </nav>
        <div className="mt-8 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <h1 className="display-tight mt-5 max-w-3xl text-6xl text-navy md:text-8xl">Collections &amp; <span className="text-gold">Deliveries.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted">We provide dedicated point-to-point collection and delivery services for private and commercial goods. From retail pickups to online marketplace collections, we supply the required vehicle and personnel to transport your items across Johannesburg.</p>
            <Link href="/quote" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">
              Arrange a collection <ArrowRight size={18} />
            </Link>
          </div>
          <div className="photo-card relative min-h-[390px] bg-navy md:min-h-[520px]">
            <img src="/handing_over_package.jpg" alt="Courier handing over a package" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-3xl uppercase leading-none text-background">Point-to-point logistics. Handled properly.</p>
          </div>
        </div>
      </section>
      
      <section className="border-y border-navy/10 bg-navy py-7 text-background">
        <div className="container-wide flex flex-col items-center justify-between gap-6 md:flex-row">
          <div className="flex items-center gap-5">
            <img src="/insurance%20badge.png" alt="Transit insurance badge" className="size-20 shrink-0 object-contain" />
            <div>
              <p className="font-display text-sm uppercase tracking-[.18em] text-gold">Fully protected loads</p>
              <p className="mt-1 font-display text-4xl uppercase leading-none text-background md:text-5xl">R150k <span className="text-gold">Transit Insurance.</span></p>
            </div>
          </div>
          <div className="flex flex-col items-center gap-3 text-center md:items-end md:text-right">
            <p className="max-w-md text-sm leading-6 text-background/70">Whatever we are collecting for you, it is automatically covered against transit damage up to R150,000 at no extra cost.</p>
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy">Move with confidence <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Collection logistics</p>
            <h2 className="display-tight mt-3 text-5xl text-navy md:text-7xl">Point-to-point transport <span className="text-gold">for any load.</span></h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-ink-muted">Transporting items from private sellers, warehouses, or retail stores often requires logistics that go beyond a standard passenger vehicle. We manage the collection and delivery process directly, eliminating the need for you to coordinate multiple trips or hire separate loading assistance.</p>
            <p className="mt-5 text-lg leading-8 text-ink-muted">We assess the dimensions and weight of your item to dispatch the appropriate vehicle. Our team handles the inspection at the collection point, secures the load for transit, and delivers it directly to your specified address, maintaining clear communication throughout the process.</p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-wide">
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">How it works</p>
          <h2 className="display-tight mt-3 max-w-3xl text-5xl text-navy md:text-7xl">Direct from collection <span className="text-gold">to delivery.</span></h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            <article className="rounded-2xl bg-background p-7 md:p-8">
              <div className="flex items-center justify-end">
                <span className="grid size-11 place-items-center rounded-full bg-gold text-navy"><Clock size={20} /></span>
              </div>
              <h3 className="mt-16 font-display text-3xl uppercase text-navy">Schedule a Time</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">Let us know when the item is ready for collection and we will dispatch a vehicle to meet the timeline.</p>
            </article>
            <article className="rounded-2xl bg-background p-7 md:p-8">
              <div className="flex items-center justify-end">
                <span className="grid size-11 place-items-center rounded-full bg-gold text-navy"><Map size={20} /></span>
              </div>
              <h3 className="mt-16 font-display text-3xl uppercase text-navy">We Collect</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">Our team arrives at the seller, warehouse, or store, inspects the item, and carefully loads it.</p>
            </article>
            <article className="rounded-2xl bg-background p-7 md:p-8">
              <div className="flex items-center justify-end">
                <span className="grid size-11 place-items-center rounded-full bg-gold text-navy"><Package size={20} /></span>
              </div>
              <h3 className="mt-16 font-display text-3xl uppercase text-navy">Direct Delivery</h3>
              <p className="mt-3 text-sm leading-6 text-ink-muted">The item is transported safely to your requested destination, arriving exactly when you expect it.</p>
            </article>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Included in the service</p>
            <h2 className="display-tight mt-3 text-5xl text-navy md:text-6xl">Point-to-point, <span className="text-gold">properly covered.</span></h2>
          </div>
          <ul className="grid gap-0">
            <li className="flex items-center gap-4 border-b border-navy/15 py-5 text-base font-semibold text-navy">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold"><Check size={16} /></span>
              Point-to-point courier and collection
            </li>
            <li className="flex items-center gap-4 border-b border-navy/15 py-5 text-base font-semibold text-navy">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold"><Check size={16} /></span>
              Retail, warehouse, and private seller pickups
            </li>
            <li className="flex items-center gap-4 border-b border-navy/15 py-5 text-base font-semibold text-navy">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold"><Check size={16} /></span>
              Real-time ETA updates on collection day
            </li>
            <li className="flex items-center gap-4 border-b border-navy/15 py-5 text-base font-semibold text-navy">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold"><Check size={16} /></span>
              Safe packing and secure loading into the vehicle
            </li>
            <li className="flex items-center gap-4 border-b border-navy/15 py-5 text-base font-semibold text-navy">
              <span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold"><Check size={16} /></span>
              Goods in Transit insurance included
            </li>
          </ul>
        </div>
      </section>

      <RelatedServices />
      
      <section className="container-wide pb-20">
        <div className="flex flex-col gap-6 rounded-[1.5rem] bg-navy p-8 md:flex-row md:items-center md:justify-between md:p-12">
          <div>
            <p className="font-display text-4xl uppercase text-background md:text-5xl">Ready for collection?</p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-background/70">Send us the collection and delivery addresses, along with item dimensions, for a quick quote.</p>
          </div>
          <Link href="/quote" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Get an estimate <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
