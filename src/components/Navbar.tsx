'use client'

import Link from "next/link";
// import Image from "next/image";
import { useState } from "react";
// import { Cta1 } from "./CallToAction";
import { Menu, X } from "lucide-react";


// components/Navbar.tsx
export const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  
  return (
<header className="mx-auto w-full md:h-[134px] !py-3 md:!py-0  fixed top-0 left-0 bg-background/10 before:absolute before:inset-0 before:bg-gradient-to-b before:from-black/90 before:to-transparent before:content-[''] place-content-center !z-[9999]">
<div className="!z-[9999]" style={{backgroundColor: 'rgba(0,0,0,0.01)'}}></div>
      <div className=" w-[100%] flex !px-[5%] md:h-[47px] justify-between items-center py-4 !z-[9999]">
      <Link href="/" className="z-50 inline-flex items-baseline gap-[2px]">
        <img
          src={isOpen ? "/logo-black.svg" : "/logo-white.svg"}
          alt="9Stack Logo"
          className="h-8 w-auto"
        />
        <span className="inline-block bg-blue-500 rounded-full w-[6px] h-[6px]"></span>
      </Link>

                <button
          className={`md:hidden z-50 ${isOpen ? 'text-[#131415]': 'text-white'}`}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
        <nav className="hidden md:flex !z-[115] gap-11  text-[14px] items-center">
          <Link href="/services" className="font-bold">Services</Link>
          <Link href="/why-us" className="font-bold">Why Us</Link>
          <Link href="/projects" className="font-bold">Projects</Link>
          <Link href="/blog" className="font-bold">Blog<span className="rounded-[9999px] !px-[8px] !py-[3px] !ml-[5px] bg-blue-500 ">2</span></Link>
          {/* <Cta1 link={"#contact"} text={"Lets Talk"} className={"!px-3 !py-2 "}></Cta1> */}
        </nav>

                {/* Mobile Menu Overlay */}
        <div
          className={`fixed inset-0 bg-white z-40 transform transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "translate-x-full"
          } md:hidden`}
        >
          <div className="flex flex-col h-full justify-between px-8 py-10">
            <div>
              <nav className="flex flex-col gap-6 text-black text-xl font-semibold mt-10">
                <Link href="/services" onClick={() => setIsOpen(false)}>Services</Link>
                <Link href="/why-us" onClick={() => setIsOpen(false)}>Why Us</Link>
                <Link href="/projects" onClick={() => setIsOpen(false)}>Projects</Link>
                <Link href="/blog" onClick={() => setIsOpen(false)} className="flex items-center gap-1">
                  Blog <span className="bg-blue-500 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center">
    2
  </span>
                </Link>
              </nav>
              <div className="mt-10 flex flex-col gap-4 text-sm text-[#1c1d1e]">
                <Link href="https://instagram.com">Instagram</Link>
                <Link href="https://linkedin.com">LinkedIn</Link>
                <Link href="https://facebook.com/9stackco">Facebook</Link>
              </div>
            </div>

            <div className="text-sm border-t pt-6 grid grid-cols-2 gap-4 text-center text-black">
              <div>
                <div className="font-semibold">Prefer e-mail?</div>
                <a href="mailto:hello@9stack.co" className="underline text-blue-600">hello@9stack.co</a>
              </div>
              <div>
                <div className="font-semibold">or phone?</div>
                <a href="tel:+2348132813835" className="underline text-blue-600">+234 813 281 3835</a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </header>
  )
}
