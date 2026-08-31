import Link from "next/link";
import { ArrowLeft, ArrowRight, Check, Clock3, ShieldCheck, Truck } from "lucide-react";

const included = ["Careful packing and unpacking", "Furniture wrapping and protection", "Loading and unloading", "Safe transport across the city", "Clear communication throughout"];
const steps = [
  { icon: Clock3, title: "Plan the move", copy: "Tell us what is moving, where it is going, and when you need a hand. We will shape the right plan around your day." },
  { icon: ShieldCheck, title: "Protect every item", copy: "Our team arrives prepared to wrap, secure, and handle your belongings with the care they deserve." },
  { icon: Truck, title: "Move in motion", copy: "We load, transport, and unload efficiently so you can settle into your next space with less disruption." },
];

export const metadata = { title: "Home & Office Moving | Charloxy Transport", description: "Careful, reliable home and office moving from Charloxy Transport." };

export default function HomeOfficeMovingPage() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="container-wide pb-20 pt-8 md:pb-28 md:pt-14">
        <Link href="/services" className="inline-flex items-center gap-2 text-sm font-semibold text-ink-muted transition-colors hover:text-navy"><ArrowLeft size={16} /> All services</Link>
        <div className="mt-8 grid items-end gap-10 lg:grid-cols-[.95fr_1.05fr] lg:gap-16">
          <div>
            <p className="font-mono text-sm font-semibold tracking-[.2em] text-gold">01 / HOME & OFFICE MOVING</p>
            <h1 className="display-tight mt-5 max-w-3xl text-6xl text-navy md:text-8xl">Move the big things. <span className="text-gold">Keep it simple.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted">Whether you are moving down the street or across the city, our team ensures your belongings are packed, transported, and unpacked with care.</p>
            <Link href="/quote" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Plan your move <ArrowRight size={18} /></Link>
          </div>
          <div className="photo-card relative min-h-[390px] bg-navy md:min-h-[520px]"><img src="https://images.unsplash.com/photo-1600518464441-9154a4dea21b?auto=format&fit=crop&w=1400&q=85" alt="Movers carrying furniture into a new home" className="absolute inset-0 size-full object-cover" /><div className="absolute inset-0 bg-gradient-to-t from-navy/85 via-transparent to-transparent" /><p className="absolute bottom-6 left-6 max-w-xs font-display text-3xl uppercase leading-none text-background">A smoother move starts here.</p></div>
        </div>
      </section>
      <section className="bg-paper py-20 md:py-28"><div className="container-wide"><div className="max-w-2xl"><p className="font-display text-sm uppercase tracking-[.14em] text-gold">Our approach</p><h2 className="display-tight mt-3 text-5xl text-navy md:text-7xl">Good moves are <span className="text-gold">well planned.</span></h2></div><div className="mt-12 grid gap-5 lg:grid-cols-3">{steps.map(({ icon: Icon, title, copy }, index) => <article key={title} className="rounded-2xl bg-background p-7 md:p-8"><div className="flex items-center justify-between"><span className="font-mono text-xs text-ink-muted">0{index + 1}</span><span className="grid size-11 place-items-center rounded-full bg-gold text-navy"><Icon size={20} /></span></div><h3 className="mt-16 font-display text-3xl uppercase text-navy">{title}</h3><p className="mt-3 text-sm leading-6 text-ink-muted">{copy}</p></article>)}</div></div></section>
      <section className="container-wide py-20 md:py-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24"><div><p className="font-display text-sm uppercase tracking-[.14em] text-gold">What is included</p><h2 className="display-tight mt-3 text-5xl text-navy md:text-6xl">From first box to <span className="text-gold">last room.</span></h2></div><ul className="grid gap-0">{included.map((item) => <li key={item} className="flex items-center gap-4 border-b border-navy/15 py-5 text-base font-semibold text-navy"><span className="grid size-8 shrink-0 place-items-center rounded-full bg-gold"><Check size={16} /></span>{item}</li>)}</ul></div></section>
      <section className="container-wide pb-20"><div className="flex flex-col gap-6 rounded-[1.5rem] bg-navy p-8 md:flex-row md:items-center md:justify-between md:p-12"><div><p className="font-display text-4xl uppercase text-background md:text-5xl">Ready to make a move?</p><p className="mt-3 max-w-lg text-sm leading-6 text-background/70">Share a few details and we will help you get your move on the road.</p></div><Link href="/quote" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Get an estimate <ArrowRight size={18} /></Link></div></section>
    </main>
  );
}
