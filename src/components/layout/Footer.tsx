import Link from "next/link";
import {
  ArrowUpRight,
  CheckCircle2,
  Clock3,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
} from "lucide-react";

const email = process.env.EMAIL || "info@charloxytransport.co.za";

const navigation = [
  { label: "About us", href: "/about" },
  { label: "Our services", href: "/services" },
  { label: "Contact", href: "/contact" },
  { label: "Request a quote", href: "/quote" },
];

export default function Footer() {
  return (
    <footer className="bg-navy text-background" aria-labelledby="footer-heading">
      <div className="container-wide">
        <div className="flex flex-col gap-8 border-b border-background/15 py-14 md:py-20 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-2xl">
            <p className="font-display text-sm uppercase tracking-[0.18em] text-gold">
              Charloxy Transport
            </p>
            <h2 id="footer-heading" className="display-tight mt-4 text-5xl md:text-7xl">
              Move with <span className="text-gold">confidence.</span>
            </h2>
            <p className="mt-6 max-w-lg text-sm leading-6 text-background/65 md:text-base">
              Professional transport for homes, offices, and businesses across South Africa. Planned carefully, handled safely, and delivered on time.
            </p>
          </div>

          <Link
            href="/quote"
            className="group inline-flex w-fit items-center gap-3 rounded-full bg-gold px-6 py-3.5 font-semibold text-navy transition-transform hover:-translate-y-0.5 focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-gold"
          >
            Request a quote
            <ArrowUpRight size={18} aria-hidden="true" className="transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </div>

        <div className="grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-[1.1fr_0.8fr_1.35fr_1fr] lg:gap-12 lg:py-16">
          <div>
            <div className="flex items-center gap-3">
              <span className="flex size-10 items-center justify-center rounded-full border border-gold/50 font-display text-lg text-gold" aria-hidden="true">
                C
              </span>
              <div>
                <p className="font-display text-lg uppercase tracking-[0.08em]">Charloxy</p>
                <p className="text-[10px] uppercase tracking-[0.2em] text-background/45">Transport</p>
              </div>
            </div>
            <p className="mt-6 max-w-xs text-sm leading-6 text-background/60">
              Reliable. Safe. On Time. A transport partner you can count on from collection to delivery.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <p className="font-display text-sm uppercase tracking-[0.16em] text-gold">Explore</p>
            <div className="mt-5 flex flex-col items-start gap-3 text-sm text-background/65">
              {navigation.map((item) => (
                <Link key={item.href} href={item.href} className="transition-colors hover:text-gold focus-visible:text-gold focus-visible:outline-none">
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>

          <div>
            <p className="font-display text-sm uppercase tracking-[0.16em] text-gold">Get in touch</p>
            <div className="mt-5 flex flex-col gap-4 text-sm text-background/65">
              <a href="tel:+27824296737" className="flex items-center gap-3 transition-colors hover:text-gold focus-visible:text-gold focus-visible:outline-none">
                <Phone size={17} className="shrink-0 text-gold" aria-hidden="true" />
                <span>+27 82 429 6737</span>
              </a>
              <a href={`mailto:${email}`} className="flex items-center gap-3 break-all transition-colors hover:text-gold focus-visible:text-gold focus-visible:outline-none">
                <Mail size={17} className="shrink-0 text-gold" aria-hidden="true" />
                <span>{email}</span>
              </a>
              <p className="flex items-start gap-3">
                <Clock3 size={17} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" />
                <span>Mon–Fri, 08:00–17:00<br />Saturday by appointment</span>
              </p>
            </div>
          </div>

          <div>
            <p className="font-display text-sm uppercase tracking-[0.16em] text-gold">Why choose us</p>
            <div className="mt-5 flex flex-col gap-4 text-sm text-background/65">
              <p className="flex items-start gap-3"><ShieldCheck size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" /><span>Goods in Transit insurance up to R150,000</span></p>
              <p className="flex items-start gap-3"><CheckCircle2 size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" /><span>Careful handling from start to finish</span></p>
              <p className="flex items-start gap-3"><MapPin size={18} className="mt-0.5 shrink-0 text-gold" aria-hidden="true" /><span>Serving homes and businesses across South Africa</span></p>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-3 border-t border-background/15 py-6 text-xs text-background/45 md:flex-row md:items-center md:justify-between">
          <p>© {new Date().getFullYear()} Charloxy Transport. All rights reserved.</p>
          <p>A division of Charloxy Investment (Pty) Ltd.</p>
        </div>
      </div>
    </footer>
  );
}
