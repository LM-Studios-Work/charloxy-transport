import EstimateForm from '@/components/quote/EstimateForm';

export default function Quote() {
  return <main className="bg-paper py-8 md:py-14"><div className="container-wide grid items-start gap-10 lg:grid-cols-[1fr_520px]"><div className="pt-6 lg:pt-16"><p className="font-display text-sm uppercase tracking-[.16em] text-gold">Let&apos;s get you moving</p><h1 className="display-tight mt-4 max-w-3xl text-6xl text-navy md:text-8xl">Request a free moving <span className="text-gold">estimate.</span></h1><p className="mt-6 max-w-xl text-base leading-7 text-ink-muted">Fill in the details below to give us an idea of what you need moved. Upload photos of the items to help us provide an accurate estimate.</p><div className="mt-10 grid gap-3 text-sm font-semibold text-navy sm:grid-cols-2"><span>Residential moving</span><span>Office relocations</span><span>Professional packing</span><span>Safe transport</span></div></div><EstimateForm /></div></main>;
}
