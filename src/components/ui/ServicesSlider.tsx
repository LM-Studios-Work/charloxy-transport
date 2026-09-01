'use client';

import Link from 'next/link';
import { ChevronLeft, ChevronRight, ArrowRight } from 'lucide-react';
import { useRef, useState, useEffect, useCallback } from 'react';

const services = [
  {
    index: 1,
    title: 'Home & Office Moving',
    description: 'Whether you are moving within Johannesburg or relocating your office, our experienced moving teams ensure that every item is handled with care from collection to delivery.',
    image: '/moving_truck.jpg',
    slug: 'home-office-moving',
  },
  {
    index: 2,
    title: 'Furniture & Appliance Deliveries',
    description: 'Bought new furniture or moving a fridge? We specialise in transporting bulky single items quickly and safely. Ideal for clients who only need a few items transported.',
    image: '/packing_furniture.jpg',
    slug: 'furniture-appliance-deliveries',
  },
  {
    index: 3,
    title: 'Collections & Deliveries',
    description: 'Time-sensitive collection and delivery services for parcels and important goods. We plan every route to ensure safe and timely delivery.',
    image: '/handing_over_package.jpg',
    slug: 'collections-deliveries',
  },
  {
    index: 4,
    title: 'Building Material Transport',
    description: 'Reliable transport for construction materials. We help Johannesburg contractors and DIY enthusiasts get their supplies to the site efficiently.',
    image: '/construction_material.jpg',
    slug: 'building-material-transport',
  },
  {
    index: 5,
    title: 'General Goods Transport',
    description: 'Flexible transport solutions. If it fits in our vehicles, we can move it securely, keeping every item safe along the way.',
    image: '/packed_boxes.jpg',
    slug: 'general-goods-transport',
  },
  {
    index: 6,
    title: 'Transport Services for Businesses',
    description: 'Business relocations and regular transport contracts require careful planning. We work with companies across Gauteng to ensure organized, efficient logistics.',
    image: '/loading_onto_van.jpg',
    slug: 'business-transport',
  },
];

export default function ServicesSlider() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [canPrev, setCanPrev] = useState(false);
  const [canNext, setCanNext] = useState(true);
  const [scrollProgress, setScrollProgress] = useState(0);

  const updateButtons = useCallback(() => {
    const el = trackRef.current;
    if (!el) return;
    setCanPrev(el.scrollLeft > 4);
    setCanNext(el.scrollLeft < el.scrollWidth - el.clientWidth - 4);
    const maxScroll = el.scrollWidth - el.clientWidth;
    setScrollProgress(maxScroll > 0 ? el.scrollLeft / maxScroll : 0);
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;
    updateButtons();
    el.addEventListener('scroll', updateButtons, { passive: true });
    const ro = new ResizeObserver(updateButtons);
    ro.observe(el);
    return () => {
      el.removeEventListener('scroll', updateButtons);
      ro.disconnect();
    };
  }, [updateButtons]);

  const scroll = (dir: 'prev' | 'next') => {
    const el = trackRef.current;
    if (!el) return;
    // Scroll by the width of one card (roughly 360px) + gap (20px)
    const amount = 380;
    el.scrollBy({ left: dir === 'next' ? amount : -amount, behavior: 'smooth' });
  };

  return (
    <section className="container-wide pb-20 md:pb-28">
      {/* Header */}
      <div className="flex flex-col gap-5 md:flex-row md:items-end md:justify-between">
        <div>
          <p className="font-display text-sm uppercase tracking-[.14em] text-gold">What we do</p>
          <h2 className="display-tight mt-3 max-w-2xl text-5xl text-navy md:text-7xl">
            Everything you need, <span className="text-gold">moved.</span>
          </h2>
        </div>
        <p className="max-w-sm text-base leading-7 text-ink-muted">
          From a trusted local mover in Johannesburg to a preferred logistics partner. We provide
          professional residential and commercial moving services.
        </p>
      </div>

      {/* Controls row */}
      <div className="mt-8 flex items-center justify-between">
        <Link
          href="/services"
          className="inline-flex items-center gap-2 text-sm font-semibold text-navy underline-offset-4 hover:underline"
        >
          View all services <ArrowRight size={16} />
        </Link>
        {/* Slider buttons — desktop only */}
        <div className="hidden gap-2 md:flex">
          <button
            type="button"
            aria-label="Previous services"
            onClick={() => scroll('prev')}
            disabled={!canPrev}
            className="grid size-11 place-items-center rounded-full border border-navy/30 text-navy transition-opacity disabled:opacity-30"
          >
            <ChevronLeft size={20} />
          </button>
          <button
            type="button"
            aria-label="Next services"
            onClick={() => scroll('next')}
            disabled={!canNext}
            className="grid size-11 place-items-center rounded-full bg-gold text-navy transition-opacity disabled:opacity-30"
          >
            <ChevronRight size={20} />
          </button>
        </div>
      </div>

      {/* Slider track */}
      <div
        ref={trackRef}
        className="mt-5 flex gap-5 overflow-x-auto pb-2 md:overflow-x-auto [&::-webkit-scrollbar]:hidden"
        style={{ scrollSnapType: 'x mandatory', scrollbarWidth: 'none', msOverflowStyle: 'none' }}
      >
        {services.map((service) => (
          <article
            key={service.title}
            className="group photo-card relative shrink-0 bg-navy"
            style={{
              minHeight: 360,
              width: 'calc(100vw - 2rem)',
              maxWidth: '360px',
              scrollSnapAlign: 'start',
            }}
          >
            <img
              src={service.image}
              alt={service.title}
              className="absolute inset-0 size-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/20 to-transparent" />
            <div className="relative flex min-h-[360px] flex-col justify-end p-6">
              <p className="font-display text-sm uppercase text-gold">0{service.index} / Service</p>
              <h3 className="font-display mt-2 text-3xl uppercase text-background">{service.title}</h3>
              <p className="mt-2 text-sm leading-6 text-background/75">{service.description}</p>
            </div>
          </article>
        ))}
      </div>

      <div className="mt-8 flex items-center justify-center px-6 md:hidden" aria-label="Services carousel scroll position" role="progressbar" aria-valuemin={0} aria-valuemax={100} aria-valuenow={Math.round(scrollProgress * 100)}>
        <div className="relative h-2 w-full max-w-[18rem] rounded-full border-t-[6px] border-dashed border-gold">
          <span
            className="absolute left-0 top-[-6px] h-1.5 w-10 rounded-full bg-gold transition-transform duration-200"
            style={{ transform: `translateX(${scrollProgress * 248}px)` }}
          />
        </div>
      </div>
    </section>
  );
}
