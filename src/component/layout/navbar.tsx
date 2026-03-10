"use client";
import Link from "next/link";
import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import LanguageSwitcher from "@/component/i18n/LanguageSwitcher";
import { useTranslations } from "next-intl";
import { usePathname } from "next/navigation";
import getLocaleFromPath from "@/i18n/utils";

const Navbar: React.FC = () => {
  const [open, setOpen] = useState(false);
  const t = useTranslations("navbar");
  const pathname = usePathname() ?? "/";
  const currentLocale = getLocaleFromPath(pathname) ?? "en";

  const buildHref = (route: string) => {
    if (route === "/") return `/${currentLocale}`;
    return `/${currentLocale}${route}`;
  };

  const isActive = (route: string) => {
    const href = buildHref(route);
    if (route === "/") return pathname === href || pathname === href + "/";
    return pathname === href || pathname.startsWith(href + "/");
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) setOpen(false);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className={`shadow-sm bg-white ${open ? 'rounded-md' : 'rounded-full'} md:rounded-full px-10 -translate-x-1/2 max-w-[90%] w-full left-1/2 fixed top-3 z-50`}>
      <nav className=" mx-auto flex justify-between items-center p-4" role="navigation" aria-label="main navigation">
        <div className="font-bold text-lg">
          <Link href="/" className="text-mainBlue">{t("companyName")}</Link>
        </div>

        <div className="flex items-center gap-4">
          <ul className="hidden md:flex gap-10 list-none m-0 p-0">
            <li>
              <Link href={buildHref('/')} className={`${isActive('/') ? 'text-mainBlue' : 'text-gray-500'} hover:text-mainBlue`}>{t("home")}</Link>
            </li>
            <li>
              <Link href={buildHref('/about-us')} className={`${isActive('/about-us') ? 'text-mainBlue' : 'text-gray-500'} hover:text-mainBlue`}>{t("about")}</Link>
            </li>
            <li>
              <Link href={buildHref('/contact')} className={`${isActive('/contact') ? 'text-mainBlue' : 'text-gray-500'} hover:text-mainBlue`}>{t("contact")}</Link>
            </li>
            <li>
              <Link href={buildHref('/product-service')} className={`${isActive('/product-service') ? 'text-mainBlue' : 'text-gray-500'} hover:text-mainBlue`}>{t("product-service")}</Link>
            </li>
            <li>
              <Link href={buildHref('/policy')} className={`${isActive('/policy') ? 'text-mainBlue' : 'text-gray-500'} hover:text-mainBlue`}>{t("policy")}</Link>
            </li>
          </ul>
          <div className="relative">
            <LanguageSwitcher />
          </div>

          <button
            type="button"
            aria-controls="mobile-menu"
            aria-expanded={open}
            onClick={() => setOpen(!open)}
            className="md:hidden inline-flex items-center justify-center p-2 rounded-md text-mainBlue focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
            {open ? <X className="h-6 w-6" aria-hidden="true" /> : <Menu className="h-6 w-6" aria-hidden="true" />}
          </button>
        </div>
      </nav>

      <div id="mobile-menu" className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${open ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'}`} aria-hidden={!open}>
        <ul className="px-4 pt-2 pb-4 space-y-1  text-center">
          <li>
            <Link href={buildHref('/')} className={`block py-2 rounded-md text-base font-medium ${isActive('/') ? 'text-mainBlue font-semibold' : 'text-gray-500'} hover:text-mainBlue`} onClick={() => setOpen(false)}>
              {t("home")}
            </Link>
          </li>
          <li>
            <Link href={buildHref('/about-us')} className={`block py-2 rounded-md text-base font-medium ${isActive('/about-us') ? 'text-mainBlue font-semibold' : 'text-gray-500'} hover:text-mainBlue`} onClick={() => setOpen(false)}>
              {t("about")}
            </Link>
          </li>
          <li>
            <Link href={buildHref('/contact')} className={`block py-2 rounded-md text-base font-medium ${isActive('/contact') ? 'text-mainBlue font-semibold' : 'text-gray-500'} hover:text-mainBlue`} onClick={() => setOpen(false)}>
              {t("contact")}
            </Link>
          </li>
          <li>
            <Link href={buildHref('/product-service')} className={`block py-2 rounded-md text-base font-medium ${isActive('/product-service') ? 'text-mainBlue font-semibold' : 'text-gray-500'} hover:text-mainBlue`} onClick={() => setOpen(false)}>
              {t("product-service")}
            </Link>
          </li>
          <li>
            <Link href={buildHref('/policy')} className={`block py-2 rounded-md text-base font-medium ${isActive('/policy') ? 'text-mainBlue font-semibold' : 'text-gray-500'} hover:text-mainBlue`} onClick={() => setOpen(false)}>
              {t("policy")}
            </Link>
          </li>
        </ul>
        <div className="pt-2 pb-3 flex items-center justify-center">
          <div className="relative">
            <LanguageSwitcher />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
