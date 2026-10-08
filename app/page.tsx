"use client";

import { motion } from "framer-motion";
import {
  ArrowRight,
  Clock3,
  Instagram,
  MapPin,
  Menu,
  Phone,
  Star,
  UtensilsCrossed,
  X,
  ChevronDown,
} from "lucide-react";
import { useState, useEffect } from "react";

const menuItems = [
  { name: "Signature Burger", category: "Best seller", desc: "Smoky grilled patty, house sauce, crisp lettuce & toasted brioche.", price: "₹249", image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=1000&q=90" },
  { name: "Wood-Fired Pizza", category: "Chef's pick", desc: "Fresh mozzarella, basil, slow-roasted tomato & olive oil.", price: "₹299", image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=1000&q=90" },
  { name: "Creamy Pasta", category: "Comfort food", desc: "Silky parmesan sauce, herbs & roasted seasonal vegetables.", price: "₹279", image: "https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=1000&q=90" },
];

const gallery = [
  "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1200&q=90",
  "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=90",
];

const highlights = [
  ["01", "Fresh, always", "Simple ingredients, prepared to order and served with care."],
  ["02", "Made to linger", "A relaxed space for coffee dates, quick lunches and long conversations."],
  ["03", "Right around here", "Your neighbourhood café in Ambattur — easy to find, hard to leave."],
];

export default function Home() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => { const onScroll = () => setScrolled(window.scrollY > 30); window.addEventListener("scroll", onScroll); return () => window.removeEventListener("scroll", onScroll); }, []);

  return (
    <main className="overflow-hidden bg-[#f4efe7]">
      <motion.header initial={{ y: -30, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.7 }} className="fixed inset-x-0 top-0 z-50">
        <div className={`mx-auto mt-4 flex max-w-7xl items-center justify-between rounded-full border px-5 py-3 text-white backdrop-blur-xl transition-all duration-500 lg:px-6 ${scrolled ? "border-white/15 bg-[#11110f]/95 shadow-2xl shadow-black/20" : "border-white/10 bg-[#11110f]/70"}`}>
          <a href="#" className="font-display text-xl font-bold tracking-tight">
            URBAN<span className="text-[#e6a15d]">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-[13px] font-semibold text-white/75 md:flex">
            <a className="transition hover:text-white" href="#about">Story</a>
            <a className="transition hover:text-white" href="#menu">Menu</a>
            <a className="transition hover:text-white" href="#gallery">Gallery</a>
            <a className="transition hover:text-white" href="#contact">Visit</a>
          </nav>
          <a href="https://wa.me/919999999999" className="hidden rounded-full bg-[#e6a15d] px-5 py-2.5 text-[13px] font-bold text-[#17130f] transition hover:-translate-y-0.5 md:block">
            Reserve a table
          </a>
          <button aria-label="Toggle navigation" onClick={() => setOpen(!open)} className="rounded-full p-2 md:hidden">
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
        {open && (
          <div className="mx-4 mt-2 rounded-3xl border border-black/10 bg-[#11110f] p-5 text-white shadow-2xl md:hidden">
            <div className="flex flex-col gap-5 text-sm font-semibold">
              {["about", "menu", "gallery", "contact"].map((id) => (
                <a key={id} onClick={() => setOpen(false)} href={"#" + id}>{id[0].toUpperCase() + id.slice(1)}</a>
              ))}
              <a href="https://wa.me/919999999999" className="rounded-full bg-[#e6a15d] px-5 py-3 text-center text-[#17130f]">Reserve a table</a>
            </div>
          </div>
        )}
      </motion.header>

      <section className="relative flex min-h-[780px] items-end px-5 pb-14 pt-32 text-white lg:min-h-screen lg:px-8 lg:pb-20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=90')] bg-cover bg-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/50 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-transparent to-black/30" />
        <motion.div animate={{ scale: [1, 1.08, 1], opacity: [0.15, 0.3, 0.15] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-24 top-1/4 h-80 w-80 rounded-full bg-[#e6a15d] blur-[120px]" />
        <motion.div animate={{ x: [0, 80, 0], y: [0, -30, 0] }} transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }} className="absolute right-0 top-1/3 h-72 w-72 rounded-full bg-[#8b5e3c] blur-[120px] opacity-25" />
        <div className="relative mx-auto w-full max-w-7xl">
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }} className="pointer-events-none absolute -right-10 -top-20 hidden h-64 w-64 rounded-full border border-white/10 lg:block" />
          <motion.div initial={{ opacity: 0, y: 35 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
            <div className="mb-6 flex items-center gap-3 text-[11px] font-bold uppercase tracking-[0.32em] text-white/70">
              <span className="h-px w-12 bg-[#e6a15d]" /> Ambattur · Chennai
            </div>
            <h1 className="font-display max-w-5xl text-6xl font-semibold leading-[0.9] tracking-[-0.04em] sm:text-7xl lg:text-[8.5rem]">
              Good food.<br /><span className="text-[#e6a15d]">Good moments.</span>
            </h1>
            <div className="mt-8 flex max-w-2xl flex-col gap-7 sm:flex-row sm:items-end sm:justify-between">
              <p className="max-w-lg text-base leading-7 text-white/72 sm:text-lg">
                Fresh comfort food, serious coffee and a warm neighbourhood table. Come for the bite. Stay for the vibe.
              </p>
              <a href="#menu" className="group inline-flex w-fit shrink-0 items-center gap-3 rounded-full bg-white px-6 py-3.5 text-sm font-bold text-[#17130f] transition hover:bg-[#e6a15d]">
                Explore menu <ArrowRight size={17} className="transition group-hover:translate-x-1" />
              </a>
            </div>
          </motion.div>
        </div>
        <div className="absolute bottom-8 right-8 hidden items-center gap-3 text-[10px] font-bold uppercase tracking-[0.25em] text-white/50 lg:flex">
          Scroll to explore <ChevronDown size={15} />
        </div>
      </section>

      <motion.section id="about" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: 0.8 }} className="mx-auto grid max-w-7xl gap-12 px-5 py-24 lg:grid-cols-[1.1fr_.9fr] lg:px-8 lg:py-36">
        <div>
          <p className="eyebrow">Our story</p>
          <h2 className="mt-5 max-w-3xl font-display text-4xl font-semibold leading-[1.05] tracking-tight sm:text-6xl">
            Your neighbourhood table, with a little more soul.
          </h2>
        </div>
        <div className="flex flex-col justify-end">
          <p className="text-lg leading-8 text-[#71695e]">
            Urban Bites is an easy-going local café built around fresh food, good coffee and better company. Everything is designed to feel effortless — from a quick takeaway to an evening that accidentally turns into three hours.
          </p>
          <div className="mt-8 grid grid-cols-2 gap-3 sm:grid-cols-3">
            {["Fresh ingredients", "Family friendly", "Takeaway"].map((item) => (
              <div key={item} className="rounded-2xl border border-black/8 bg-white/60 p-4 text-sm font-semibold">{item}</div>
            ))}
          </div>
        </div>
      </section>

      <section id="menu" className="relative overflow-hidden bg-[#11110f] px-5 py-24 text-white lg:px-8 lg:py-32">
        <motion.div animate={{ x: ["-20%", "20%", "-20%"] }} transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -top-32 left-1/2 h-64 w-[70%] -translate-x-1/2 rounded-full bg-[#e6a15d]/10 blur-[100px]" />
        <div className="relative mx-auto max-w-7xl">
          <div className="mb-12 flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow text-[#e6a15d]">Customer favourites</p>
              <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl">Worth ordering twice.</h2>
            </div>
            <a href="#contact" className="group flex items-center gap-2 text-sm font-bold text-white/60 transition hover:text-white">View location <ArrowRight size={16} className="transition group-hover:translate-x-1" /></a>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {menuItems.map((item, i) => (
              <motion.article key={item.name} initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.08 }} className="group overflow-hidden rounded-[2rem] bg-[#1b1a17]">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105" />
                  <span className="absolute left-4 top-4 rounded-full bg-white/90 px-3 py-1.5 text-[10px] font-bold uppercase tracking-widest text-[#17130f]">{item.category}</span>
                </div>
                <div className="p-6">
                  <div className="flex items-start justify-between gap-4">
                    <h3 className="font-display text-2xl font-semibold">{item.name}</h3>
                    <span className="pt-1 font-bold text-[#e6a15d]">{item.price}</span>
                  </div>
                  <p className="mt-3 text-sm leading-6 text-white/50">{item.desc}</p>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </section>

      <motion.section id="gallery" initial={{ opacity: 0, y: 35 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-80px" }} transition={{ duration: 0.8 }} className="px-5 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-end">
            <div>
              <p className="eyebrow">Inside Urban Bites</p>
              <h2 className="mt-4 font-display text-5xl font-semibold tracking-tight sm:text-6xl">Come for the food.<br />Stay for the atmosphere.</h2>
            </div>
            <div className="flex items-center gap-2 text-sm font-semibold text-[#71695e]"><Star size={15} fill="currentColor" /> Local favourite</div>
          </div>
          <div className="mt-12 grid grid-cols-2 gap-3 md:grid-cols-12 md:grid-rows-2 md:gap-4">
            {gallery.map((src, i) => (
              <div key={src} className={(i === 0 ? "md:col-span-7 md:row-span-2" : "md:col-span-5") + " overflow-hidden rounded-[1.5rem]"}>
                <img src={src} alt="Urban Bites atmosphere" className="h-full min-h-48 w-full object-cover transition duration-700 hover:scale-105 md:min-h-0" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-[#e6a15d] px-5 py-24 text-[#17130f] lg:px-8 lg:py-28">
        <motion.div animate={{ rotate: [0, 3, 0, -3, 0] }} transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }} className="pointer-events-none absolute -right-24 -top-24 h-72 w-72 rounded-full border border-black/10" />
        <div className="relative mx-auto grid max-w-7xl gap-12 lg:grid-cols-3">
          {highlights.map(([num, title, text]) => (
            <div key={num} className="border-t border-black/20 pt-5">
              <span className="text-xs font-bold tracking-widest opacity-55">{num}</span>
              <h3 className="mt-8 font-display text-3xl font-semibold">{title}</h3>
              <p className="mt-3 max-w-sm leading-7 opacity-65">{text}</p>
            </div>
          ))}
        </div>
      </section>

      <motion.section id="contact" initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="bg-[#f4efe7] px-5 py-24 lg:px-8 lg:py-36">
        <div className="mx-auto grid max-w-7xl gap-12 lg:grid-cols-[1.2fr_.8fr]">
          <div>
            <p className="eyebrow">Find us</p>
            <h2 className="mt-5 max-w-3xl font-display text-5xl font-semibold leading-none tracking-tight sm:text-7xl">Your table is waiting.</h2>
            <p className="mt-7 max-w-xl text-lg leading-8 text-[#71695e]">Drop in for coffee, lunch or a slow evening. We&apos;re right here in Ambattur.</p>
            <div className="mt-9 flex flex-wrap gap-3">
              <a href="https://wa.me/919999999999" className="rounded-full bg-[#11110f] px-6 py-3.5 text-sm font-bold text-white transition hover:-translate-y-0.5">WhatsApp us</a>
              <a href="https://maps.google.com/?q=Ambattur,Chennai" className="rounded-full border border-black/15 px-6 py-3.5 text-sm font-bold transition hover:bg-white">Open in Maps</a>
            </div>
          </div>
          <div className="rounded-[2rem] bg-white p-7 shadow-xl shadow-black/5 sm:p-9">
            <div className="space-y-7">
              <a href="https://maps.google.com/?q=Ambattur,Chennai" className="flex gap-4"><MapPin className="mt-1 shrink-0" size={20} /><span><strong className="block text-sm">Location</strong><span className="mt-1 block text-sm text-[#71695e]">Ambattur, Chennai</span></span></a>
              <a href="tel:+919999999999" className="flex gap-4"><Phone className="mt-1 shrink-0" size={20} /><span><strong className="block text-sm">Call us</strong><span className="mt-1 block text-sm text-[#71695e]">+91 99999 99999</span></span></a>
              <div className="flex gap-4"><Clock3 className="mt-1 shrink-0" size={20} /><span><strong className="block text-sm">Opening hours</strong><span className="mt-1 block text-sm text-[#71695e]">Mon–Sun · 10:00 AM – 10:00 PM</span></span></div>
              <a href="#" className="flex gap-4"><Instagram className="mt-1 shrink-0" size={20} /><span><strong className="block text-sm">Instagram</strong><span className="mt-1 block text-sm text-[#71695e]">@urbanbites</span></span></a>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-[#11110f] px-5 py-8 text-white lg:px-8">
        <div className="mx-auto flex max-w-7xl flex-col gap-4 text-sm text-white/45 sm:flex-row sm:items-center sm:justify-between">
          <span className="font-display text-xl font-bold text-white">URBAN<span className="text-[#e6a15d]">.</span></span>
          <span>© 2026 Urban Bites Café · Website demo by Gokul Krishna</span>
        </div>
      </footer>
    </main>
  );
}
