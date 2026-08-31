import Link from 'next/link';
import { ArrowRight, ShieldCheck, Target, TrendingUp } from 'lucide-react';

const promises = [
  { icon: ShieldCheck, title: 'Safe', text: 'Every load is protected by comprehensive Goods in Transit insurance up to R150,000.' },
  { icon: Target, title: 'On time', text: 'We plan every route carefully so your goods arrive when you need them.' },
  { icon: TrendingUp, title: 'Growing', text: 'We are continuously growing our fleet to serve more customers across the region.' },
];

export default function About() {
  return <main className="overflow-hidden bg-background">
    <section className="container-wide pt-5 pb-16 md:pt-8 md:pb-24">
      <div className="relative min-h-[440px] overflow-hidden rounded-[1.75rem] bg-navy md:min-h-[540px]">
        <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?auto=format&fit=crop&w=2000&q=85" alt="Professional movers carrying furniture" className="absolute inset-0 size-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-navy/95 via-navy/65 to-navy/15" />
        <div className="relative flex min-h-[440px] max-w-3xl flex-col justify-end gap-5 p-7 md:min-h-[540px] md:p-12"><p className="font-display text-sm uppercase tracking-[.15em] text-gold">The Charloxy story</p><h1 className="display-tight text-6xl text-background md:text-8xl">Transport with <span className="text-gold">purpose.</span></h1><p className="max-w-xl text-base leading-7 text-background/80">Charloxy Transport is a division of Charloxy Investment (Pty) Ltd. We are a growing transport and logistics company dedicated to providing reliable, safe, and on-time delivery services.</p></div>
      </div>
    </section>

    <section className="container-wide pb-20 md:pb-28"><div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-20"><div><p className="font-display text-sm uppercase tracking-[.15em] text-gold">Who we are</p><h2 className="display-tight mt-3 text-5xl text-navy md:text-7xl">The team behind the <span className="text-gold">move.</span></h2></div><div className="grid gap-6 text-base leading-7 text-ink-muted md:grid-cols-2"><p>At Charloxy Transport, we understand that whether you are moving your home, delivering furniture to a customer, or transporting building materials to a site, timing and safety are critical.</p><p>Our mission is to take the stress out of transport. We handle every job with professionalism and care, ensuring that your goods reach their destination exactly as they left.</p><p>We are continuously growing our fleet to serve more customers across the region. As a division of Charloxy Investment (Pty) Ltd, we have the backing and the vision to become your preferred transport partner.</p><p>Every load we carry is protected by our comprehensive Goods in Transit insurance (up to R150,000), giving you total peace of mind.</p></div></div></section>

    <section className="bg-paper py-20 md:py-28"><div className="container-wide"><div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between"><div><p className="font-display text-sm uppercase tracking-[.15em] text-gold">Our promise</p><h2 className="display-tight mt-3 text-5xl text-navy md:text-7xl">Built around <span className="text-gold">trust.</span></h2></div><p className="max-w-md text-base leading-7 text-ink-muted">From the first conversation to the final delivery, our promise is simple: treat every job like it matters.</p></div><div className="mt-12 grid gap-px overflow-hidden rounded-2xl bg-navy/15 md:grid-cols-3">{promises.map(({ icon: Icon, title, text }) => <article key={title} className="bg-background p-8 md:p-10"><Icon className="text-gold" size={30} /><h3 className="font-display mt-12 text-4xl uppercase text-navy">{title}</h3><p className="mt-4 text-sm leading-6 text-ink-muted">{text}</p></article>)}</div></div></section>

    <section className="container-wide py-20 md:py-28"><div className="flex flex-col items-start justify-between gap-7 rounded-[1.5rem] bg-gold p-8 md:flex-row md:items-center md:p-12"><div><p className="font-display text-sm uppercase tracking-[.15em] text-navy/65">Ready when you are</p><h2 className="display-tight mt-2 text-5xl text-navy md:text-6xl">Let&apos;s get moving.</h2></div><div className="flex flex-wrap gap-3"><Link href="/quote" className="inline-flex items-center gap-3 rounded-full bg-navy px-6 py-3 font-semibold text-background">Request a quote <ArrowRight size={18} /></Link><Link href="/contact" className="inline-flex items-center rounded-full border border-navy/30 px-6 py-3 font-semibold text-navy">Contact us</Link></div></div></section>
  </main>;
}
