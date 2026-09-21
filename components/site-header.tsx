"use client";

import { useState } from "react";
import { ArrowRight, Camera, Menu, X } from "lucide-react";

const links = [
  { label: "Главная", href: "#главная" },
  { label: "О компании", href: "#о-компании" },
  { label: "Наши услуги", href: "#услуги" },
  { label: "Контакты", href: "#контакты" },
];

export function SiteHeader() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="relative z-10 border-b border-[#dce6f1]/80 bg-white/80 backdrop-blur-xl">
      <nav
        className="mx-auto flex h-[76px] max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-10"
        aria-label="Основная навигация"
      >
        <a
          href="#главная"
          className="flex items-center gap-3"
          aria-label="Камера — на главную"
        >
          <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-[#15365f] text-white shadow-[0_8px_20px_rgba(21,54,95,0.22)]">
            <Camera size={22} strokeWidth={1.8} />
          </span>
          <span className="text-[17px] font-bold tracking-[-0.03em] text-[#15365f]">
            Камера
          </span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((link, index) => (
            <a
              key={link.href}
              href={link.href}
              className={`relative py-2 text-[14px] font-medium transition-colors hover:text-[#2474d4] ${index === 0 ? "text-[#2474d4]" : "text-[#60738d]"}`}
            >
              {link.label}
              {index === 0 && (
                <span className="absolute -bottom-[21px] left-0 h-0.5 w-full rounded-full bg-[#2e80e8]" />
              )}
            </a>
          ))}
        </div>

        <a
          href="#контакты"
          className="hidden items-center gap-2 rounded-lg bg-[#2474d4] px-5 py-3 text-[13px] font-semibold text-white shadow-[0_8px_18px_rgba(36,116,212,0.22)] transition hover:bg-[#1b64bc] md:flex"
        >
          Обсудить проект <ArrowRight size={15} />
        </a>

        <button
          type="button"
          className="rounded-lg p-2 text-[#15365f] md:hidden"
          aria-label={isMenuOpen ? "Закрыть меню" : "Открыть меню"}
          aria-expanded={isMenuOpen}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </nav>

      {isMenuOpen && (
        <div className="border-t border-[#dce6f1] bg-white px-5 py-4 md:hidden">
          <div className="mx-auto flex max-w-7xl flex-col gap-1">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setIsMenuOpen(false)}
                className="rounded-lg px-3 py-3 text-sm font-medium text-[#50647d] hover:bg-[#f1f6fc] hover:text-[#2474d4]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}
