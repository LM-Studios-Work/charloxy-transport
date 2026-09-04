import { Clock3, Mail, MapPin, Phone, ShieldCheck } from 'lucide-react';
import EstimateForm from '@/components/quote/EstimateForm';

const contactDetails = [
  { icon: Phone, label: 'Call or WhatsApp', value: '+27 82 429 6737', href: 'tel:+27824296737' },
  { icon: Mail, label: 'Email us', value: process.env.EMAIL || 'info@charloxytransport.co.za', href: `mailto:${process.env.EMAIL || 'info@charloxytransport.co.za'}` },
  { icon: Clock3, label: 'Business hours', value: 'Mon–Fri 8:00 AM–5:00 PM · Sat 8:00 AM–1:00 PM' },
];

export default function Contact() {
  return (
    <div className="bg-background">
      <section className="container-wide flex flex-col gap-10 py-12 md:py-20 lg:gap-16 lg:py-24">
        <div className="max-w-3xl">
          <p className="eyebrow text-gold">Get in touch</p>
          <h1 className="display-tight mt-3 text-5xl text-navy md:text-7xl">Let&apos;s plan your move.</h1>
          <p className="mt-5 max-w-2xl text-base leading-7 text-ink-muted md:text-lg">
            Have a question or need to discuss a specific transport requirement? Our team is ready to assist you.
          </p>
        </div>

        <div className="grid items-start gap-8 lg:grid-cols-[minmax(0,0.75fr)_minmax(0,1.25fr)] lg:gap-12">
          <aside className="flex flex-col gap-7 rounded-[1.5rem] bg-navy p-7 text-background md:p-10">
            <div>
              <p className="eyebrow text-gold">Charloxy Transport</p>
              <h2 className="display-tight mt-3 text-4xl text-background">We&apos;re here to help.</h2>
              <p className="mt-4 text-sm leading-6 text-background/70">
                Reach out by phone, email, or WhatsApp. For the fastest, most accurate pricing, complete the estimate form.
              </p>
            </div>
            <div className="flex flex-col gap-5 border-t border-background/15 pt-6">
              {contactDetails.map(({ icon: Icon, label, value, href }) => (
                <div key={label} className="flex gap-4">
                  <Icon className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
                  <div className="flex flex-col gap-1 text-sm">
                    <span className="font-semibold text-background">{label}</span>
                    {href ? <a className="text-background/70 transition-colors hover:text-gold" href={href}>{value}</a> : <span className="leading-6 text-background/70">{value}</span>}
                  </div>
                </div>
              ))}
            </div>
            <div className="mt-auto flex gap-3 rounded-xl bg-background/10 p-4 text-sm leading-6 text-background/75">
              <ShieldCheck className="mt-0.5 size-5 shrink-0 text-gold" aria-hidden="true" />
              <span>Goods in Transit insurance up to R150,000.</span>
            </div>
          </aside>

          <div className="rounded-[1.5rem] border border-navy/10 bg-cloud p-2 shadow-sm sm:p-3">
            <EstimateForm />
          </div>
        </div>
      </section>
    </div>
  );
}
