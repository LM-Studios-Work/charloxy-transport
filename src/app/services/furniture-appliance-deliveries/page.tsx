import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, PackageOpen, ShieldCheck, Truck } from 'lucide-react';
import RelatedServices from '@/components/ui/RelatedServices';

const included = [
  'Store-to-door collection and delivery',
  'Heavy lifting and loading included',
  'Secure strapping (protective blankets available as add-ons)',
  'Flexible scheduling including weekends',
  'Direct communication with the driver'
];

const steps = [
  { icon: PackageOpen, title: 'Retail or Private', copy: 'Whether you bought a new couch from a store or a fridge off a private seller, we handle the pickup.' },
  { icon: ShieldCheck, title: 'Secure Handling', copy: 'Appliances and furniture are strapped for secure transport. Optional blanket-wrapping available.' },
  { icon: Truck, title: 'Prompt Delivery', copy: 'We transport your items directly to your home or office and place them exactly where you need them.' },
];

export const metadata = { title: 'Furniture & Appliance Deliveries | Charloxy Transport', description: 'Safe, reliable transport for single bulky items, furniture, and large appliances.' };

export default function FurnitureAppliancePage() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="container-wide pb-20 pt-8 md:pb-24 md:pt-14">
        <nav className="flex items-center gap-2 text-sm font-semibold text-ink-muted">
          <Link href="/services" className="hover:text-navy">Services</Link>
          <span className="text-navy/30">/</span>
          <span className="text-navy">Furniture &amp; Appliance Deliveries</span>
        </nav>
        <div className="mt-8 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <h1 className="display-tight mt-5 max-w-3xl text-6xl text-navy md:text-8xl">Furniture &amp; Appliance <span className="text-gold">Deliveries.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted">We provide fast, safe transport for bulky furniture, heavy appliances, and single large items across Gauteng. If you have purchased a large item and require a suitable vehicle for collection, we manage the loading and direct delivery.</p>
            <Link href="/quote" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">
              Book a delivery <ArrowRight size={18} />
            </Link>
          </div>
          <div className="photo-card relative min-h-[390px] bg-navy md:min-h-[520px]">
            <img src="/packing_furniture.jpg" alt="Movers wrapping a couch" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-3xl uppercase leading-none text-background">Safe. Fast. Undamaged.</p>
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
            <p className="max-w-md text-sm leading-6 text-background/70">Your new fridge or vintage couch is automatically covered against transit damage up to R150,000 at no extra cost.</p>
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy">Move with confidence <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Heavy item logistics</p>
            <h2 className="display-tight mt-3 text-5xl text-navy md:text-7xl">The right equipment <span className="text-gold">for the job.</span></h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-ink-muted">Moving heavy appliances or large furniture pieces requires physical capability and the correct protective equipment. We manage collections from retail stores or private sellers, providing the fleet vehicles and personnel needed to handle the transition safely.</p>
            <p className="mt-5 text-lg leading-8 text-ink-muted">Our teams arrive prepared with secure strapping to keep your items safe during transit, and offer specialized moving blankets as optional extras. We manage the heavy lifting at the collection point and ensure the item is placed exactly where you need it upon delivery, preventing damage to both the item and your property.</p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-wide">
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">How it works</p>
          <h2 className="display-tight mt-3 max-w-3xl text-5xl text-navy md:text-7xl">Store to door, <span className="text-gold">handled safely.</span></h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-2xl bg-background p-7 md:p-8">
                <div className="flex items-center justify-end">
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
            <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Included in the service</p>
            <h2 className="display-tight mt-3 text-5xl text-navy md:text-6xl">Heavy lifting, <span className="text-gold">properly covered.</span></h2>
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
            <p className="mt-3 max-w-lg text-sm leading-6 text-background/70">Let us know what you need moved and where it is going, and we will provide a quick estimate.</p>
          </div>
          <Link href="/quote" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Get an estimate <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
