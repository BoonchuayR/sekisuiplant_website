"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="border-b border-gray-200 bg-mainBlue">
      <nav className="max-w-5xl mx-auto flex justify-between items-center p-4" role="navigation" aria-label="main navigation">
        <div className="font-bold text-lg">
          <Link href="/" className="text-white">CompanyName</Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-4 list-none m-0 p-0">
            <li>
              <Link href="/" className="text-white hover:text-gray-300">Home</Link>
            </li>
            <li>
              <Link href="/about" className="text-white hover:text-gray-300">About</Link>
            </li>
            <li>
              <Link href="/services" className="text-white hover:text-gray-300">Services</Link>
            </li>
            <li>
              <Link href="/contact" className="text-white hover:text-gray-300">Contact</Link>
            </li>
          </ul>

          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} aria-hidden={!open}>
        <ul className="px-4 pt-2 pb-4 space-y-1 bg-mainBlue">
          <li>
            <Link href="/" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-mainBlue" onClick={() => setOpen(false)}>
              Home
            </Link>
          </li>
          <li>
            <Link href="/about" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-mainBlue" onClick={() => setOpen(false)}>
              About
            </Link>
          </li>
          <li>
            <Link href="/services" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-mainBlue" onClick={() => setOpen(false)}>
              Services
            </Link>
          </li>
          <li>
            <Link href="/contact" className="block px-3 py-2 rounded-md text-base font-medium text-white hover:bg-gray-100 hover:text-mainBlue" onClick={() => setOpen(false)}>
              Contact
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;
