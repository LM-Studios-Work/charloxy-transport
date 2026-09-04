import Link from 'next/link';
import { ArrowRight, Check, ChevronLeft, ChevronRight, Plus } from 'lucide-react';
import EstimateForm from '@/components/quote/EstimateForm';
import ServicesSlider from '@/components/ui/ServicesSlider';

const faqs = ['Do you provide moving blankets to protect the furniture?', 'Do you give fixed rates or charge by the hour?', 'Are tolls all included in the rate?', 'Do you provide storage?'];
const reviews = [
  ['Sipho M.', 'Charloxy Transport is a professional, honest company that has been in business for many years.'],
  ['Thandiwe Ndlovu', 'The team was careful, friendly, and made our move feel simple from start to finish.'],
  ['Kgomotso R.', 'Reliable service, clear communication, and everything arrived exactly as promised.'],
];

export default function Home() {
  return <div className="overflow-hidden bg-background">
    <section className="container-wide pt-5 pb-8 md:pt-7 md:pb-24">
      <div className="relative min-h-[540px] overflow-hidden rounded-[1.75rem] bg-navy lg:min-h-[700px] lg:flex lg:flex-row lg:justify-between">
        <img src="/loading_onto_truck_hero.jpg" alt="Charloxy Transport loading onto truck" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/90 via-navy/45 to-navy/10" />
        <div className="relative flex min-h-[540px] flex-col justify-end gap-5 p-7 md:min-h-0 md:p-12 lg:min-h-[700px] lg:max-w-xl lg:pb-12 xl:max-w-2xl">
          <p className="font-display text-sm uppercase tracking-[.15em] text-gold">Reliable. Safe. On time.</p>
          <h1 className="display-tight max-w-2xl break-words text-5xl text-background sm:text-6xl md:text-7xl lg:text-8xl">Johannesburg&apos;s <span className="text-gold">Trusted Movers.</span></h1>
          <p className="max-w-xl text-sm leading-6 text-background/80 lg:text-base lg:leading-7">Charloxy Transport delivers affordable, reliable furniture removals, home and office relocations, and general transport across Johannesburg and Gauteng. Handled with care from collection to delivery.</p>
          <div className="flex flex-wrap gap-3">
            <Link href="/quote" className="inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Request a quote <ArrowRight size={18} /></Link>
            <Link href="/services" className="inline-flex items-center rounded-full border border-background/60 px-6 py-3 font-semibold text-background">Our services</Link>
          </div>
        </div>
        <div className="relative mx-5 hidden lg:mr-8 lg:mt-10 lg:mb-10 lg:block lg:w-[480px] lg:self-start lg:shrink-0 xl:w-[560px]">
          <EstimateForm />
        </div>
      </div>
    </section>

    <section className="container-wide -mt-2 pb-10 lg:hidden md:pb-24">
      <div className="mx-auto max-w-2xl">
        <EstimateForm />
      </div>
    </section>

    <ServicesSlider />

    <section className="bg-paper py-20 md:py-28">
      <div className="container-wide grid items-center gap-12 lg:grid-cols-2">
        <div className="flex flex-col lg:pr-6">
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Fully Protected Moves</p>
          <div className="mt-2 flex items-center gap-10 sm:gap-14 md:gap-20 lg:gap-28">
            <div className="flex flex-col items-start">
              <h2 className="display-tight text-[2.5rem] leading-[1.1] text-navy sm:text-5xl md:text-6xl lg:text-7xl">R150k Transit</h2>
              <h2 className="display-tight text-[2.5rem] leading-[1.1] text-gold sm:text-5xl md:text-6xl lg:text-7xl">Insurance.</h2>
            </div>
            <img 
              src="/insurance%20badge.png" 
              alt="R150k Transit Insurance badge" 
              className="size-32 shrink-0 scale-110 object-contain drop-shadow-md sm:size-36 md:size-48 lg:size-56" 
            />
          </div>
          <p className="mt-6 max-w-lg text-base leading-7 text-ink-muted">We prioritize the safety of your belongings above everything else. For your complete peace of mind, every move with Charloxy Transport is automatically covered by up to R150,000 in Goods in Transit Insurance at no extra cost.</p>
        </div>
        <div className="photo-card relative h-[360px] bg-navy md:h-[480px]"><img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=1100&q=85" alt="Professional movers carrying furniture" className="size-full object-cover" /><div className="absolute bottom-5 left-5 right-5 rounded-xl bg-gold p-5"><p className="font-display text-3xl uppercase text-navy">Ready to move?</p><Link href="/quote" className="mt-3 inline-flex items-center gap-2 text-sm font-bold text-navy underline underline-offset-4">Get a fast quote <ArrowRight size={16} /></Link></div></div>
      </div>
    </section>

    <section className="container-wide py-20 md:py-28">
      <div className="rounded-[1.75rem] bg-[#EAF3F7] p-6 md:p-12 lg:p-16">
        <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
          <div className="max-w-xl">
            <h2 className="display-tight text-5xl text-navy md:text-6xl">What our <span className="text-gold">customers</span> say</h2>
            <p className="mt-4 text-base text-ink-muted md:text-lg">Don&apos;t just take our word for it. See what our customers have to say about their moving experience with us.</p>
          </div>
          <div className="hidden shrink-0 items-center gap-4 md:flex">
            <a href="https://g.page/r/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full bg-background py-2.5 pl-4 pr-5 shadow-sm transition-shadow hover:shadow-md">
              <img src="/google%20reviews.jpg" alt="Google Reviews" className="h-8 w-auto mix-blend-multiply" />
              <span className="text-sm font-bold text-navy">Find more reviews on Google</span>
            </a>
          </div>
        </div>
        <div className="mt-10 grid gap-6 lg:grid-cols-3">
          {reviews.map(([name, text]) => (
            <article key={name} className="flex flex-col justify-between rounded-2xl bg-background p-8 shadow-sm transition-transform hover:-translate-y-1">
              <div>
                <div className="flex items-center gap-1 text-gold">
                  {[...Array(5)].map((_, i) => (
                    <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="size-5">
                      <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                    </svg>
                  ))}
                </div>
                <p className="mt-6 text-lg leading-relaxed text-navy">“{text}”</p>
              </div>
              <div className="mt-8 flex items-center gap-4 border-t border-navy/10 pt-6">
                <div className="grid size-12 shrink-0 place-items-center rounded-full bg-[#EAF3F7] font-display text-xl text-navy">{name[0]}</div>
                <div>
                  <p className="font-bold text-navy">{name}</p>
                  <p className="text-sm text-ink-muted">Verified customer</p>
                </div>
              </div>
            </article>
          ))}
        </div>
        <div className="mt-8 flex justify-center md:hidden">
          <a href="https://g.page/r/" target="_blank" rel="noreferrer" className="flex items-center gap-3 rounded-full bg-background py-2.5 pl-4 pr-5 shadow-sm transition-shadow hover:shadow-md">
            <img src="/google%20reviews.jpg" alt="Google Reviews" className="h-8 w-auto mix-blend-multiply" />
            <span className="text-sm font-bold text-navy">Find more reviews on Google</span>
          </a>
        </div>
      </div>
    </section>

    <section className="container-wide pb-20 md:pb-28"><div className="mx-auto max-w-3xl"><p className="text-center font-display text-sm uppercase tracking-[.14em] text-gold">Frequently asked</p><h2 className="display-tight mt-3 text-center text-5xl text-navy md:text-6xl">Moving <span className="text-gold">questions</span></h2><div className="mt-10">{faqs.map((faq) => <details key={faq} className="group border-b border-navy/15 py-5 text-sm text-navy"><summary className="flex cursor-pointer list-none items-center justify-between gap-4 [&::-webkit-details-marker]:hidden"><span>{faq}</span><span className="grid size-6 shrink-0 place-items-center rounded-full bg-gold transition-transform group-open:rotate-45"><Plus size={14} /></span></summary><p className="max-w-2xl pt-4 leading-6 text-ink-muted">Our team can provide more detail when preparing your personalised moving estimate.</p></details>)}</div></div></section>
    <section className="bg-gold py-5"><div className="container-wide flex flex-wrap items-center justify-center gap-x-8 gap-y-2 font-display text-2xl uppercase text-navy md:justify-between md:text-4xl"><span>Get an estimate</span><ArrowRight className="hidden md:block" /><span className="hidden md:block">Get an estimate</span><ArrowRight className="hidden md:block" /><span className="hidden md:block">Get an estimate</span></div></section>
  </div>;
}
