import Link from 'next/link';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import EstimateForm from '@/components/quote/EstimateForm';
import ServicesSlider from '@/components/ui/ServicesSlider';

const faqs = ['Do you provide moving blankets to protect the furniture?', 'Do you give fixed rates or charge by the hour?', 'Are tolls all included in the rate?', 'Do you provide storage?'];
const reviews = [
  ['Adison M.', 'Charloxy Transport is a professional, honest company that has been in business for many years.'],
  ['Samantha Rey', 'The team was careful, friendly, and made our move feel simple from start to finish.'],
  ['Nelson Roy', 'Reliable service, clear communication, and everything arrived exactly as promised.'],
];

export default function Home() {
  return <div className="overflow-hidden bg-background">
    <section className="container-wide pt-5 pb-16 md:pt-7 md:pb-24">
      <div className="relative min-h-[620px] overflow-hidden rounded-[1.75rem] bg-navy lg:min-h-[700px]">
        <img src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=2200&q=85" alt="Charloxy Transport moving truck and team" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/45 to-navy/10" />
        
        <div className="relative flex min-h-[620px] flex-col justify-end gap-5 p-7 md:p-12 lg:min-h-[700px] lg:max-w-xl xl:max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[.15em] text-gold">Reliable. Safe. On time.</p>
          <h1 className="display-tight max-w-2xl text-6xl text-background md:text-7xl lg:text-8xl">Johannesburg&apos;s <span className="text-gold">Trusted Movers.</span></h1>
          <p className="max-w-xl text-sm leading-6 text-background/80 lg:text-base lg:leading-7">Charloxy Transport delivers affordable, reliable furniture removals, home and office relocations, and general transport across Johannesburg and Gauteng. Carefully packed and moved. Guaranteed.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Request a quote <ArrowRight size={18} /></Link>
            <Link href="/services" className="inline-flex items-center rounded-full border border-background/60 px-6 py-3 font-semibold text-background">Our services</Link>
          </div>
        </div>
        
        <div className="relative mx-5 mb-5 lg:absolute lg:right-8 lg:top-2 lg:mb-0 lg:w-[480px] xl:w-[560px]">
          <EstimateForm />
        </div>
      </div>
    </section>


    <section className="bg-gold py-5"><div className="container-wide flex flex-col items-center justify-between gap-2 text-center md:flex-row md:text-left"><div className="flex items-center gap-3"><span className="grid size-9 place-items-center rounded-full bg-navy text-background"><Check size={16} /></span><span className="font-display text-2xl uppercase text-navy">Fully Protected Moves</span></div><p className="font-mono text-xs font-semibold uppercase tracking-[.14em] text-navy">R150k Transit Insurance included</p><Link href="/quote" className="inline-flex items-center gap-2 text-sm font-bold text-navy underline underline-offset-4">Move with confidence <ArrowRight size={15} /></Link></div></section>

    <ServicesSlider />

    <section className="bg-paper py-20 md:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col lg:pr-6">
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Fully Protected Moves</p>
          <div className="mt-2 inline-flex flex-col">
            <h2 className="display-tight text-5xl text-navy md:text-6xl lg:text-7xl">
              R150k Transit
            </h2>
            <div className="mt-1 flex w-full items-center justify-between gap-4 sm:justify-start sm:gap-6 lg:mt-2">
              <h2 className="display-tight text-5xl text-gold md:text-6xl lg:text-7xl">
                Insurance.
              </h2>
              <img src="/insurance%20badge.png" alt="R150k Insurance Badge" className="h-14 w-auto shrink-0 object-contain drop-shadow-sm md:h-20 lg:h-24" />
            </div>
          </div>
          <p className="mt-6 max-w-lg text-base leading-7 text-ink-muted">We prioritize the safety of your belongings above everything else. For your complete peace of mind, every move with Charloxy Transport is automatically covered by up to R150,000 in Goods in Transit Insurance at no extra cost.</p>
          <ul className="mt-8 grid w-full max-w-lg gap-4 text-sm font-semibold text-navy sm:grid-cols-2">
            {['Comprehensive Coverage', 'Zero Deductibles', 'Safe & Secure Delivery', 'Guaranteed Moving Dates'].map(item => (
              <li key={item} className="flex items-center gap-3">
                <span className="grid size-7 shrink-0 place-items-center rounded-full bg-gold"><Check size={15} /></span>
                {item}
              </li>
            ))}
          </ul>
        </div>
        <div className="photo-card relative h-[360px] bg-navy md:h-[480px]">
          <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1100&q=85" alt="Professional movers carrying furniture" className="size-full object-cover" />
          <div className="absolute bottom-5 left-5 right-5 rounded-xl bg-gold p-5">
            <p className="font-display text-3xl uppercase text-navy">Ready to move?</p>
            <Link href="/quote" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-navy underline underline-offset-4">
              Get a fast quote <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </div>
    </section>

    <section className="container-wide py-20 md:py-28">
      <div className="rounded-[1.75rem] bg-[#EAF3F7] p-6 md:p-12">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="display-tight text-5xl text-navy md:text-6xl">What our <span className="text-gold">customers</span> say</p>
          </div>
          <div className="hidden gap-2 md:flex">
            <button type="button" aria-label="Previous reviews" className="grid size-11 place-items-center rounded-full border border-navy/30 text-navy">
              <ChevronLeft />
            </button>
            <button type="button" aria-label="Next reviews" className="grid size-11 place-items-center rounded-full bg-gold text-navy">
              <ChevronRight />
            </button>
          </div>
        </div>
        <div className="mt-8 grid gap-4 lg:grid-cols-3">
          {reviews.map(([name, text]) => (
            <article key={name} className="rounded-2xl bg-background p-6">
              <div className="flex items-center justify-between">
                <div className="grid size-12 place-items-center rounded-full bg-gold font-display text-xl text-navy">{name[0]}</div>
                <span className="rounded-full bg-gold px-3 py-1 text-xs font-bold text-navy">5★</span>
              </div>
              <p className="mt-8 text-base leading-7 text-navy">“{text}”</p>
              <p className="mt-8 text-sm font-bold text-navy">{name}</p>
              <p className="mt-1 text-xs text-ink-muted">Verified customer</p>
            </article>
          ))}
        </div>
      </div>
    </section>

    <section className="container-wide pb-20 md:pb-28"><div className="mx-auto max-w-3xl"><p className="text-center font-display text-sm uppercase tracking-[.14em] text-gold">Frequently asked</p><h2 className="display-tight mt-3 text-center text-5xl text-navy md:text-6xl">Moving <span className="text-gold">questions</span></h2><div className="mt-10">{faqs.map((faq, index) => <div key={faq} className="flex items-center justify-between border-b border-navy/15 py-5 text-sm text-navy"><span><b className="mr-5 font-mono text-xs text-ink-muted">0{index + 1}</b>{faq}</span><span className="grid size-6 place-items-center rounded-full bg-gold"><Plus size={14} /></span></div>)}</div></div></section>
    <section className="bg-gold py-5"><div className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-display text-2xl uppercase text-navy md:justify-between md:text-4xl"><span>Get an estimate</span><ArrowRight className="hidden md:block" /><span>Get an estimate</span><ArrowRight className="hidden md:block" /><span>Get an estimate</span></div></section>
  </div>;
}
