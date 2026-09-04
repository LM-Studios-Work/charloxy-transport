import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import MovingExtrasList from '@/components/ui/MovingExtrasList';

export const metadata = { title: 'Packing & Moving Extras | Charloxy Transport', description: 'Everything you need for a safer, easier move. Select the items you require when requesting your quotation.' };

export default function MovingExtrasPage() {
  return (
    <main className="overflow-hidden bg-paper">
      <section className="container-wide pb-20 pt-8 md:pb-24 md:pt-14">
        <div className="max-w-3xl">
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Optional Add-ons</p>
          <h1 className="display-tight mt-3 text-5xl text-navy md:text-7xl">Packing &amp; <span className="text-gold">Moving Extras.</span></h1>
          <p className="mt-6 text-lg leading-8 text-ink-muted">Everything you need for a safer, easier move. We provide specialized packing materials and protective covers as optional add-ons. Simply select the items you require when requesting your quotation.</p>
          <Link href="/quote" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy transition-colors hover:bg-navy hover:text-background">
            Get an estimate <ArrowRight size={18} />
          </Link>
        </div>
      </section>

      <section className="container-wide pb-24 md:pb-32">
        <MovingExtrasList />
      </section>
      
      <section className="bg-navy py-20 text-background">
        <div className="container-wide flex flex-col items-center justify-between gap-8 md:flex-row">
          <div className="max-w-xl">
            <h2 className="display-tight text-4xl uppercase md:text-5xl">Need help <span className="text-gold">packing?</span></h2>
            <p className="mt-4 text-sm leading-7 text-background/70 md:text-base">Alongside supplying materials, our experienced teams can manage the entire packing process for you. From securely wrapping fragile electronics to boxing up the kitchen, let us handle the tedious work.</p>
          </div>
          <Link href="/quote" className="inline-flex shrink-0 items-center gap-2 rounded-full border border-gold bg-transparent px-6 py-3 font-semibold text-gold transition-colors hover:bg-gold hover:text-navy">
            Request packing service
          </Link>
        </div>
      </section>
    </main>
  );
}
