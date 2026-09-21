import { ArrowRight, Camera, ShieldCheck } from "lucide-react";
import { SiteHeader } from "@/components/site-header";

export default function Home() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f5f8fc] text-[#10233f]">
      <section id="главная" className="relative min-h-screen">
        <div className="absolute inset-0 -z-0 bg-[radial-gradient(circle_at_80%_15%,rgba(44,123,229,0.16),transparent_28%),linear-gradient(120deg,#f8fbff_0%,#eef5fc_100%)]" />
        <SiteHeader />

        <div className="relative z-0 mx-auto flex max-w-7xl flex-col px-5 pb-20 pt-24 sm:px-8 lg:flex-row lg:items-center lg:gap-20 lg:px-10 lg:pb-28 lg:pt-32">
          <div className="max-w-2xl">
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-[#cfe1f5] bg-white/75 px-3 py-2 text-xs font-semibold text-[#3979b9] shadow-sm">
              <ShieldCheck size={15} /> Безопасность, которой доверяют
            </div>
            <h1 className="text-5xl font-bold leading-[1.05] tracking-[-0.055em] text-[#112c4f] sm:text-6xl lg:text-[76px]">
              Видим всё.
              <br />
              <span className="text-[#2474d4]">Защищаем главное.</span>
            </h1>
            <p className="mt-7 max-w-lg text-base leading-7 text-[#60738d] sm:text-lg">
              Установим систему видеонаблюдения под ключ — для дома, бизнеса и
              производства.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#контакты"
                className="inline-flex items-center gap-2 rounded-lg bg-[#2474d4] px-6 py-3.5 text-sm font-semibold text-white shadow-[0_10px_22px_rgba(36,116,212,0.24)] transition hover:bg-[#1b64bc]"
              >
                Получить консультацию <ArrowRight size={16} />
              </a>
              <a
                href="#услуги"
                className="text-sm font-semibold text-[#46627f] transition hover:text-[#2474d4]"
              >
                Наши услуги
              </a>
            </div>
          </div>
          <div className="mt-16 flex flex-1 justify-center lg:mt-0">
            <div className="relative flex h-64 w-64 items-center justify-center rounded-[42px] border border-white bg-white/70 shadow-[0_24px_80px_rgba(34,86,141,0.15)] sm:h-80 sm:w-80">
              <div className="absolute inset-7 rounded-[32px] border border-[#d9e7f5]" />
              <div className="flex h-36 w-36 items-center justify-center rounded-[38px] bg-[#15365f] text-white shadow-[0_20px_40px_rgba(21,54,95,0.3)] sm:h-44 sm:w-44">
                <Camera size={78} strokeWidth={1.2} />
              </div>
              <span className="absolute right-5 top-8 h-3 w-3 rounded-full bg-[#47d1a4] shadow-[0_0_0_7px_rgba(71,209,164,0.13)]" />
            </div>
          </div>
        </div>
      </section>
      <section id="о-компании" className="sr-only" aria-label="О компании" />
      <section id="услуги" className="sr-only" aria-label="Наши услуги" />
      <section id="контакты" className="sr-only" aria-label="+99890 273 23 30" />
    </main>
  );
}
