"use client";
import {motion} from "framer-motion";
import {ArrowRight,Clock3,MapPin,Menu,Phone,Star,UtensilsCrossed,X} from "lucide-react";
import {useState} from "react";

const menuItems=[
{name:"Signature Burger",desc:"Smoky grilled patty, house sauce & crisp lettuce",price:"₹249",image:"https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=900&q=85"},
{name:"Wood-Fired Pizza",desc:"Fresh mozzarella, basil & slow-roasted tomato",price:"₹299",image:"https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=900&q=85"},
{name:"Creamy Pasta",desc:"Silky parmesan sauce, herbs & roasted vegetables",price:"₹279",image:"https://images.unsplash.com/photo-1473093295043-cdd812d0e601?auto=format&fit=crop&w=900&q=85"}];
const gallery=[
"https://images.unsplash.com/photo-1515003197210-e0cd71810b5f?auto=format&fit=crop&w=1000&q=85",
"https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&w=1000&q=85",
"https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=1000&q=85",
"https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1000&q=85"];

export default function Home(){
const[open,setOpen]=useState(false);
return <main className="overflow-hidden">
<header className="fixed top-0 z-50 w-full border-b border-black/5 bg-[#f7f1e7]/85 backdrop-blur-xl">
<div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4 lg:px-8">
<a href="#" className="font-display text-xl font-bold tracking-tight">URBAN<span className="text-[#c56a3a]">.</span></a>
<nav className="hidden items-center gap-8 text-sm font-semibold md:flex"><a href="#menu">Menu</a><a href="#about">About</a><a href="#gallery">Gallery</a><a href="#contact">Contact</a></nav>
<a href="https://wa.me/919999999999" className="hidden rounded-full bg-[#171512] px-5 py-2.5 text-sm font-semibold text-white md:block">WhatsApp us</a>
<button aria-label="Open menu" onClick={()=>setOpen(!open)} className="md:hidden">{open?<X/>:<Menu/>}</button></div>
{open&&<div className="border-t border-black/5 px-5 py-5 md:hidden"><div className="flex flex-col gap-4 font-semibold"><a onClick={()=>setOpen(false)} href="#menu">Menu</a><a onClick={()=>setOpen(false)} href="#about">About</a><a onClick={()=>setOpen(false)} href="#gallery">Gallery</a><a onClick={()=>setOpen(false)} href="#contact">Contact</a></div></div>}
</header>

<section className="relative flex min-h-[92vh] items-end bg-[#171512] px-5 pb-14 pt-32 text-white lg:min-h-screen lg:px-8 lg:pb-20">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=2200&q=85')] bg-cover bg-center"/><div className="absolute inset-0 bg-gradient-to-t from-black via-black/45 to-black/20"/>
<div className="relative mx-auto w-full max-w-6xl"><motion.div initial={{opacity:0,y:30}} animate={{opacity:1,y:0}} transition={{duration:.8}}>
<div className="mb-5 flex items-center gap-3 text-xs font-bold uppercase tracking-[.28em] text-white/70"><span className="h-px w-10 bg-[#e08a58]"/>Café • Ambattur</div>
<h1 className="font-display max-w-3xl text-6xl font-bold leading-[.95] tracking-tight sm:text-7xl lg:text-9xl">Good food.<br/><span className="text-[#e08a58]">Good moments.</span></h1>
<p className="mt-7 max-w-xl text-base leading-7 text-white/75 sm:text-lg">Freshly made comfort food, warm coffee and a place to slow down. Come hungry. Leave happy.</p>
<div className="mt-9 flex flex-wrap gap-3"><a href="#menu" className="inline-flex items-center gap-2 rounded-full bg-[#e08a58] px-6 py-3.5 font-bold">Explore menu <ArrowRight size={17}/></a><a href="https://wa.me/919999999999" className="rounded-full border border-white/25 bg-white/10 px-6 py-3.5 font-bold">Book / WhatsApp</a></div>
</motion.div></div></section>

<section id="about" className="mx-auto grid max-w-6xl gap-12 px-5 py-24 lg:grid-cols-2 lg:px-8 lg:py-32"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-[#c56a3a]">Our story</p><h2 className="font-display text-4xl font-bold leading-tight sm:text-5xl">A neighbourhood place made for real conversations.</h2></div><div className="flex flex-col justify-end"><p className="text-lg leading-8 text-[#756e64]">Urban Bites is your easy-going local spot for freshly prepared food, good coffee and even better company. Every plate is made with care, using simple ingredients and bold flavours.</p><div className="mt-8 flex flex-wrap gap-3 text-sm font-semibold"><span className="rounded-full bg-white px-4 py-2">✓ Fresh ingredients</span><span className="rounded-full bg-white px-4 py-2">✓ Family friendly</span><span className="rounded-full bg-white px-4 py-2">✓ Takeaway available</span></div></div></section>

<section id="menu" className="bg-white px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><div className="mb-12 flex items-end justify-between gap-5"><div><p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-[#c56a3a]">Customer favourites</p><h2 className="font-display text-4xl font-bold sm:text-5xl">Our menu</h2></div><UtensilsCrossed className="hidden text-[#c56a3a] sm:block" size={38}/></div><div className="grid gap-6 md:grid-cols-3">
{menuItems.map((item,i)=><motion.article key={item.name} initial={{opacity:0,y:20}} whileInView={{opacity:1,y:0}} viewport={{once:true}} transition={{delay:i*.08}} className="group overflow-hidden rounded-[1.5rem] bg-[#f7f1e7]"><div className="aspect-[4/3] overflow-hidden"><img src={item.image} alt={item.name} className="h-full w-full object-cover transition duration-700 group-hover:scale-105"/></div><div className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="font-display text-2xl font-bold">{item.name}</h3><span className="font-bold text-[#c56a3a]">{item.price}</span></div><p className="mt-2 text-sm leading-6 text-[#756e64]">{item.desc}</p></div></motion.article>)}
</div></div></section>

<section id="gallery" className="px-5 py-24 lg:px-8 lg:py-32"><div className="mx-auto max-w-6xl"><p className="mb-3 text-xs font-bold uppercase tracking-[.25em] text-[#c56a3a]">Inside Urban Bites</p><h2 className="font-display text-4xl font-bold sm:text-5xl">Come see for yourself.</h2><div className="mt-10 grid grid-cols-2 gap-3 md:grid-cols-4">{gallery.map((src,i)=><img key={src} src={src} alt="Urban Bites gallery" className={"h-64 w-full rounded-2xl object-cover "+(i===1?"md:mt-10":"")}/>)}</div></div></section>

<section className="bg-[#171512] px-5 py-24 text-white lg:px-8"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-3">{[["01","Made fresh","We prepare every order with fresh ingredients and care."],["02","Made for you","Comfort food, quick bites and drinks for every mood."],["03","Made local","A friendly neighbourhood café right here in Ambattur."]].map(([num,title,text])=><div key={num} className="border-t border-white/15 pt-6"><span className="text-sm text-[#e08a58]">{num}</span><h3 className="mt-8 font-display text-3xl font-bold">{title}</h3><p className="mt-3 leading-7 text-white/60">{text}</p></div>)}</div></section>

<section id="contact" className="bg-[#e08a58] px-5 py-24 text-white lg:px-8 lg:py-28"><div className="mx-auto grid max-w-6xl gap-12 lg:grid-cols-2"><div><p className="mb-4 text-xs font-bold uppercase tracking-[.25em] text-white/70">Visit us</p><h2 className="font-display text-5xl font-bold sm:text-6xl">Your table is waiting.</h2></div><div className="space-y-5 text-lg"><a href="https://maps.google.com/?q=Ambattur,Chennai" className="flex items-center gap-4"><MapPin/>Ambattur, Chennai</a><a href="tel:+919999999999" className="flex items-center gap-4"><Phone/>+91 99999 99999</a><div className="flex items-center gap-4"><Clock3/>Mon–Sun • 10:00 AM – 10:00 PM</div><a href="https://wa.me/919999999999" className="mt-5 inline-flex rounded-full bg-white px-6 py-3 font-bold text-[#171512]">Message us on WhatsApp</a></div></div></section>

<footer className="bg-[#171512] px-5 py-8 text-white lg:px-8"><div className="mx-auto flex max-w-6xl flex-col gap-3 text-sm text-white/50 sm:flex-row sm:items-center sm:justify-between"><span className="font-display text-lg font-bold text-white">URBAN<span className="text-[#e08a58]">.</span></span><span>© 2026 Urban Bites Café • Website demo by Gokul Krishna</span></div></footer>
</main>}