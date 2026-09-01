import Link from 'next/link';
import { ArrowLeft, ArrowRight, BarChart, Briefcase, Building2, Check } from 'lucide-react';
import RelatedServices from '@/components/ui/RelatedServices';

const included = [
  'Dedicated business-to-business delivery runs',
  'Inter-branch stock transfers and logistics',
  'Commercial office relocation services',
  'Discreet and professional drivers and handlers',
  'Monthly retainer or ad-hoc service options'
];

const steps = [
  { icon: Briefcase, title: 'Corporate Relocations', copy: 'We move your office furniture, desks, and filing systems with minimal disruption to your daily operations.' },
  { icon: Building2, title: 'B2B Deliveries', copy: 'We act as an extension of your business, delivering your products to clients safely and professionally.' },
  { icon: BarChart, title: 'Stock Transfers', copy: 'Need to move inventory between branches or from a warehouse? We manage secure, bulk stock transfers.' },
];

export const metadata = { title: 'Transport Services for Businesses | Charloxy Transport', description: 'Commercial transport, B2B deliveries, stock transfers, and office relocations.' };

export default function BusinessTransportPage() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="container-wide pb-20 pt-8 md:pb-24 md:pt-14">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted hover:text-navy">
          <ArrowLeft size={16} /> All services
        </Link>
        <div className="mt-8 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <p className="font-display text-sm uppercase tracking-[.2em] text-gold">06 / Commercial transport</p>
            <h1 className="display-tight mt-5 max-w-3xl text-6xl text-navy md:text-8xl">Business <span className="text-gold">Logistics.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted">We provide dedicated transport services for businesses, including B2B deliveries, inter-branch stock transfers, and full-scale commercial office relocations.</p>
            <Link href="/quote" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">
              Partner with us <ArrowRight size={18} />
            </Link>
          </div>
          <div className="photo-card relative min-h-[390px] bg-navy md:min-h-[520px]">
            <img src="/loading_onto_van.jpg" alt="Modern office workspace" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-3xl uppercase leading-none text-background">Professional. Discreet. On time.</p>
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
            <p className="max-w-md text-sm leading-6 text-background/70">Protect your commercial assets. Every load is automatically covered against transit damage up to R150,000.</p>
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy">Move with confidence <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-wide">
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">How we support you</p>
          <h2 className="display-tight mt-3 max-w-3xl text-5xl text-navy md:text-7xl">An extension of <span className="text-gold">your team.</span></h2>
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
            <h2 className="display-tight mt-3 text-5xl text-navy md:text-6xl">Commercial <span className="text-gold">reliability.</span></h2>
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
            <p className="font-display text-4xl uppercase text-background md:text-5xl">Partner with us</p>
            <p className="mt-3 max-w-lg text-sm leading-6 text-background/70">Contact us to discuss your ongoing commercial transport requirements or a one-off office move.</p>
          </div>
          <Link href="/quote" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Get an estimate <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
