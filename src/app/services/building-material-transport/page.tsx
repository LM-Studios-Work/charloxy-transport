import Link from 'next/link';
import { ArrowLeft, ArrowRight, Check, Hammer, HardHat, Truck } from 'lucide-react';
import RelatedServices from '@/components/ui/RelatedServices';

const included = [
  'Collection from any hardware store or supplier',
  'Direct delivery to construction sites or homes',
  'Vehicles capable of handling heavy weight',
  'Careful handling of fragile materials (tiles, glass)',
  'Flexible scheduling for contractors and DIYers'
];

const steps = [
  { icon: Hammer, title: 'Purchase Materials', copy: 'Buy your cement, wood, tiles, or fixtures from your preferred hardware store or building supplier.' },
  { icon: Truck, title: 'We Load & Transport', copy: 'Our vehicles arrive at the supplier to safely load your heavy or bulky building materials.' },
  { icon: HardHat, title: 'Site Delivery', copy: 'We deliver directly to your construction site, renovation project, or home, ready for the builders.' },
];

export const metadata = { title: 'Building Material Transport | Charloxy Transport', heavy: 'Transport for construction materials, hardware, and renovation supplies.' };

export default function BuildingMaterialPage() {
  return (
    <main className="overflow-hidden bg-background">
      <section className="container-wide pb-20 pt-8 md:pb-24 md:pt-14">
        <nav className="flex items-center gap-2 text-sm font-semibold text-ink-muted">
          <Link href="/services" className="hover:text-navy">Services</Link>
          <span className="text-navy/30">/</span>
          <span className="text-navy">Building Material Transport</span>
        </nav>
        <div className="mt-8 grid gap-10 lg:grid-cols-[.9fr_1.1fr] lg:items-end lg:gap-16">
          <div>
            <h1 className="display-tight mt-5 max-w-3xl text-6xl text-navy md:text-8xl">Building Material <span className="text-gold">Transport.</span></h1>
            <p className="mt-7 max-w-xl text-lg leading-8 text-ink-muted">We provide dedicated transport for construction materials, hardware, and renovation supplies. Our fleet handles weight requirements that standard delivery vehicles cannot, ensuring contractors and DIY renovators receive materials on schedule.</p>
            <Link href="/quote" className="mt-8 inline-flex items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">
              Book a truck <ArrowRight size={18} />
            </Link>
          </div>
          <div className="photo-card relative min-h-[390px] bg-navy md:min-h-[520px]">
            <img src="/construction_material.jpg" alt="Construction worker and building materials" className="absolute inset-0 size-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-t from-navy/90 via-navy/15 to-transparent" />
            <p className="absolute bottom-6 left-6 max-w-xs font-display text-3xl uppercase leading-none text-background">Construction logistics. Managed properly.</p>
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
            <p className="max-w-md text-sm leading-6 text-background/70">Expensive tiles, glass, or fittings are automatically covered against transit damage up to R150,000 at no extra cost.</p>
            <Link href="/quote" className="inline-flex items-center gap-2 rounded-full bg-gold px-5 py-2.5 text-sm font-bold text-navy">Move with confidence <ArrowRight size={15} /></Link>
          </div>
        </div>
      </section>

      <section className="container-wide py-20 md:py-28">
        <div className="grid gap-12 lg:grid-cols-[.8fr_1.2fr] lg:gap-24">
          <div>
            <p className="font-display text-sm uppercase tracking-[.14em] text-gold">Site delivery logistics</p>
            <h2 className="display-tight mt-3 text-5xl text-navy md:text-7xl">Transport built for <span className="text-gold">construction timelines.</span></h2>
          </div>
          <div>
            <p className="text-lg leading-8 text-ink-muted">Moving bags of cement, timber, fragile tiles, and heavy fixtures requires vehicles rated for the payload and handling expertise to prevent breakage. We manage collections from hardware suppliers and deliver directly to residential renovations or commercial construction sites across Gauteng.</p>
            <p className="mt-5 text-lg leading-8 text-ink-muted">Whether you are managing a large scale build or completing a weekend DIY project, our team ensures your materials arrive intact. We handle the loading at the supplier and the unloading at your site, keeping your project moving without unnecessary delays.</p>
          </div>
        </div>
      </section>

      <section className="bg-paper py-20 md:py-28">
        <div className="container-wide">
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">How it works</p>
          <h2 className="display-tight mt-3 max-w-3xl text-5xl text-navy md:text-7xl">Direct from supplier <span className="text-gold">to site.</span></h2>
          <div className="mt-12 grid gap-5 lg:grid-cols-3">
            {steps.map(({ icon: Icon, title, copy }) => (
              <article key={title} className="rounded-2xl bg-background p-7 md:p-8">
                <div className="flex items-center justify-end">
                  <span className="grid size-11 place-items-center rounded-full bg-gold text-navy">
                    <Icon size={20} />
                  </span>
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
            <h2 className="display-tight mt-3 text-5xl text-navy md:text-6xl">Heavy requirements, <span className="text-gold">properly covered.</span></h2>
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
            <p className="mt-3 max-w-lg text-sm leading-6 text-background/70">Let us know what materials you need moved and where they are going for a quick quote.</p>
          </div>
          <Link href="/quote" className="inline-flex shrink-0 items-center gap-3 rounded-full bg-gold px-6 py-3 font-semibold text-navy">Get an estimate <ArrowRight size={18} /></Link>
        </div>
      </section>
    </main>
  );
}
