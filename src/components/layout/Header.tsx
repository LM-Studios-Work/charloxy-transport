'use client';

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, X, ArrowUpRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const navigation = [{ name: 'Home', href: '/' }, { name: 'About Us', href: '/about' }, { name: 'Services', href: '/services' }, { name: 'Contact', href: '/contact' }];

export default function Header() {
  const [open, setOpen] = useState(false); const pathname = usePathname();
  return <header className="glass fixed inset-x-0 top-0 z-50 border-b border-navy/10"><nav className="container-wide flex h-[72px] items-center justify-between" aria-label="Global">
    <Link href="/" className="flex items-center gap-2" onClick={() => setOpen(false)}><span className="grid size-9 place-items-center rounded-full bg-gold font-display text-xl text-navy">C</span><span className="font-display text-xl uppercase tracking-tight text-navy">Charloxy <span className="text-gold">Transport</span></span></Link>
    <div className="hidden items-center gap-8 lg:flex">{navigation.map(item => <Link key={item.href} href={item.href} className={`text-sm font-semibold transition-colors ${pathname === item.href ? 'text-gold' : 'text-navy hover:text-gold'}`}>{item.name}</Link>)}<Link href="/quote" className="flex items-center gap-2 rounded-full bg-navy px-5 py-3 text-sm font-semibold text-background hover:bg-gold hover:text-navy">Request a quote <ArrowUpRight size={16} /></Link></div>
    <button type="button" className="rounded-full p-2 text-navy lg:hidden" onClick={() => setOpen(true)} aria-label="Open main menu"><Menu /></button>
  </nav><AnimatePresence>{open && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 bg-background p-6 lg:hidden"><div className="flex items-center justify-between"><Link href="/" className="font-display text-xl uppercase text-navy">Charloxy <span className="text-gold">Transport</span></Link><button type="button" onClick={() => setOpen(false)} aria-label="Close main menu"><X /></button></div><div className="mt-16 flex flex-col gap-6">{navigation.map(item => <Link key={item.href} href={item.href} onClick={() => setOpen(false)} className="font-display text-4xl uppercase text-navy">{item.name}</Link>)}<Link href="/quote" onClick={() => setOpen(false)} className="rounded-full bg-gold px-5 py-4 text-center font-semibold text-navy">Request a quote</Link></div></motion.div>}</AnimatePresence></header>;
}
