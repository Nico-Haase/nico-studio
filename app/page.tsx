"use client";

import { useState } from "react";

// ─── Types ────────────────────────────────────────────────────────────────────

interface ServiceCard {
  icon: string;
  title: string;
  description: string;
  tags: string[];
}

interface PricingPlan {
  name: string;
  price: string;
  period?: string;
  description: string;
  features: string[];
  highlight: boolean;
  cta: string;
}

interface ProcessStep {
  number: string;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const services: ServiceCard[] = [
  {
    icon: "◻",
    title: "Premium Web Design",
    description:
      "Visuell starke, markengerechte Websites, die Vertrauen aufbauen – bevor der erste Satz gelesen wird. Jedes Detail ist auf deine Zielgruppe abgestimmt.",
    tags: ["UI Design", "Branding", "Conversion"],
  },
  {
    icon: "◈",
    title: "Website Entwicklung",
    description:
      "Saubere, schnelle Websites auf modernem Tech-Stack. Mobiloptimiert, SEO-ready und so gebaut, dass sie dauerhaft performen.",
    tags: ["Next.js", "React", "TailwindCSS"],
  },
  {
    icon: "◎",
    title: "Digitale Systeme & Module",
    description:
      "Online-Buchung, Kontaktformulare, Bewertungsbereiche – als optionale Module, die nahtlos in deine Website integriert werden.",
    tags: ["Buchung", "Formulare", "Bewertungen"],
  },
  {
    icon: "◇",
    title: "Prozess-Automatisierung",
    description:
      "Wiederkehrende Abläufe automatisieren: Bestätigungen, Erinnerungen, Follow-ups – damit du dich auf dein Kerngeschäft konzentrieren kannst.",
    tags: ["Workflows", "E-Mail", "CRM"],
  },
  {
    icon: "△",
    title: "Wartung & Betreuung",
    description:
      "Regelmäßige Updates, Performance-Monitoring und persönlicher Support – deine Website bleibt dauerhaft auf höchstem Niveau.",
    tags: ["Support", "Updates", "Hosting"],
  },
];

const steps: ProcessStep[] = [
  {
    number: "01",
    title: "Analyse",
    description:
      "Ich verstehe dein Business, deine Zielgruppe und deine Ziele. Kostenlos, unverbindlich, auf den Punkt.",
  },
  {
    number: "02",
    title: "Konzept",
    description:
      "Auf Basis der Analyse entwickle ich Struktur, Design und Texte – alles abgestimmt auf maximale Wirkung.",
  },
  {
    number: "03",
    title: "Umsetzung",
    description:
      "Saubere Entwicklung mit modernem Tech-Stack. Du siehst den Fortschritt in Echtzeit.",
  },
  {
    number: "04",
    title: "Launch & Betreuung",
    description:
      "Gemeinsam wird deine Website live gestellt. Du bekommst eine persönliche Einweisung und weißt genau, wie alles funktioniert.",
  },
];

const plans: PricingPlan[] = [
  {
    name: "Starter",
    price: "600",
    description: "Professioneller Auftritt für lokale Dienstleister.",
    features: [
      "5 Unterseiten",
      "Premium Design",
      "Mobiloptimiert & schnell",
      "Kontaktformular",
      "Google Maps & SEO Grundlagen",
      "2 Wochen Lieferzeit",
    ],
    highlight: false,
    cta: "Jetzt starten",
  },
  {
    name: "Premium",
    price: "999",
    description: "Vollständiges digitales System mit allen Modulen.",
    features: [
      "Alles aus Starter",
      "Individuelles Web Design",
      "Optionales Buchungsmodul",
      "Prozess-Automatisierung",
      "Bewertungsbereich",
      "3 Wochen Lieferzeit",
    ],
    highlight: true,
    cta: "Premium wählen",
  },
  {
    name: "Betreuung",
    price: "49",
    period: "/ Monat",
    description: "Deine Website dauerhaft auf höchstem Niveau.",
    features: [
      "Monatliche Updates",
      "Performance-Monitoring",
      "Bis zu 3 Anpassungen/Monat",
      "Prioritäts-Support",
      "Hosting inklusive",
      "Monatlich kündbar",
    ],
    highlight: false,
    cta: "Betreuung buchen",
  },
];

const trustItems = [
  { value: "100%", label: "Fokus auf lokale Dienstleister" },
  { value: "2–3 Wo.", label: "Durchschnittliche Lieferzeit" },
  { value: "0 €", label: "Erstgespräch & Konzept" },
  { value: "24 h", label: "Antwortzeit auf Anfragen" },
];

// ─── Reusable primitives ──────────────────────────────────────────────────────

function SectionLabel({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <span
      className={`inline-block text-[11px] font-semibold tracking-[0.18em] uppercase mb-5 ${
        light ? "text-zinc-400" : "text-zinc-400"
      }`}
    >
      {children}
    </span>
  );
}

function PrimaryButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 bg-zinc-900 text-white text-sm font-medium px-7 py-3.5 rounded-full shadow-md hover:bg-zinc-700 hover:shadow-lg active:scale-[0.98] transition-all duration-200"
    >
      {children}
    </a>
  );
}

function OutlineButton({ href, children }: { href: string; children: React.ReactNode }) {
  return (
    <a
      href={href}
      className="inline-flex items-center justify-center gap-2 border border-zinc-300 text-zinc-700 text-sm font-medium px-7 py-3.5 rounded-full hover:border-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 active:scale-[0.98] transition-all duration-200"
    >
      {children}
    </a>
  );
}

// ─── Navbar ───────────────────────────────────────────────────────────────────

function NavBar() {
  const [open, setOpen] = useState(false);
  const links = ["Leistungen", "Referenzen", "Prozess", "Preise"];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-xl border-b border-zinc-100/80 shadow-sm shadow-zinc-100/50">
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a href="#" className="text-[17px] font-semibold tracking-tight text-zinc-900 select-none">
          Nico<span className="text-zinc-400">Studio</span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-7">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className="text-[13px] text-zinc-500 hover:text-zinc-900 transition-colors duration-150"
            >
              {item}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <PrimaryButton href="#kontakt">Kostenlose Website-Analyse</PrimaryButton>
        </div>

        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Menü"
          className="md:hidden flex flex-col gap-[5px] p-2"
        >
          <span className={`block w-[22px] h-[1.5px] bg-zinc-700 transition-all duration-200 ${open ? "rotate-45 translate-y-[6.5px]" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-zinc-700 transition-all duration-200 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-[22px] h-[1.5px] bg-zinc-700 transition-all duration-200 ${open ? "-rotate-45 -translate-y-[6.5px]" : ""}`} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <div
        className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="border-t border-zinc-100 bg-white/95 backdrop-blur-xl px-6 py-5 flex flex-col gap-4">
          {links.map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setOpen(false)}
              className="text-sm text-zinc-600 hover:text-zinc-900 transition-colors py-1"
            >
              {item}
            </a>
          ))}
          <div className="pt-2">
            <PrimaryButton href="#kontakt">Kostenlose Website-Analyse</PrimaryButton>
          </div>
        </div>
      </div>
    </header>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function Page() {
  return (
    <main className="bg-white text-zinc-900 antialiased selection:bg-zinc-900 selection:text-white">
      <NavBar />

      {/* ── HERO ──────────────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center pt-28 pb-20 px-6 overflow-hidden">
        {/* Subtle radial gradient background */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% -10%, rgba(161,161,170,0.12) 0%, transparent 70%)",
          }}
        />
        {/* Fine grid texture */}
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-10 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(zinc 1px, transparent 1px), linear-gradient(90deg, zinc 1px, transparent 1px)",
            backgroundSize: "64px 64px",
          }}
        />

        <div className="max-w-6xl mx-auto w-full">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 border border-zinc-200 bg-white rounded-full px-4 py-1.5 mb-10 shadow-sm">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-[11px] font-medium tracking-wide text-zinc-500 uppercase">
              Websites für Massage · Beauty · Fitness · Coaching
            </span>
          </div>

          <h1 className="text-5xl sm:text-6xl md:text-[76px] font-semibold tracking-[-0.03em] leading-[1.04] text-zinc-900 max-w-4xl mb-7">
            Mehr Anfragen.{" "}
            <span className="text-zinc-400">Besserer erster Eindruck.</span>
            {" "}Weniger Aufwand.
          </h1>

          <p className="text-lg md:text-xl text-zinc-500 max-w-xl mb-8 leading-relaxed">
            Ich entwickle premium Websites für lokale Dienstleister – designed
            für Vertrauen, gebaut für Conversions. Damit Besucher zu Anfragen
            werden, nicht zu Absprüngen.
          </p>

          {/* Outcome pills */}
          <div className="flex flex-wrap gap-2 mb-12">
            {[
              "Professioneller Auftritt ab Tag 1",
              "Mehr Anfragen über die Website",
              "Fertig in 2–3 Wochen",
            ].map((pill) => (
              <span
                key={pill}
                className="inline-flex items-center gap-1.5 text-[12px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 px-3.5 py-1.5 rounded-full"
              >
                <span className="text-emerald-500 text-[10px]">✓</span>
                {pill}
              </span>
            ))}
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <PrimaryButton href="#kontakt">Kostenlose Website-Analyse</PrimaryButton>
            <OutlineButton href="#referenzen">Projekt ansehen →</OutlineButton>
          </div>

          {/* Scroll hint */}
          <div className="mt-20 flex items-center gap-3 text-zinc-300 text-xs tracking-wider select-none">
            <span className="block w-8 h-px bg-zinc-200" />
            Scroll
          </div>
        </div>
      </section>

      {/* ── TRUST BAR ─────────────────────────────────────────────────────── */}
      <section className="border-y border-zinc-100 bg-zinc-50 py-14 px-6">
        <div className="max-w-6xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-y-10 gap-x-6">
          {trustItems.map((item) => (
            <div key={item.label} className="text-center">
              <p className="text-[38px] font-semibold tracking-tight text-zinc-900 leading-none mb-2">
                {item.value}
              </p>
              <p className="text-[13px] text-zinc-400 leading-snug">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── ABOUT ─────────────────────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          {/* Left – heading */}
          <div>
            <SectionLabel>Über mich</SectionLabel>
            <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight leading-[1.08]">
              Persönlich.{" "}
              <span className="text-zinc-400">Klar.</span>{" "}
              Ergebnisorientiert.
            </h2>
          </div>

          {/* Right – copy + highlights */}
          <div>
            <p className="text-zinc-500 text-lg leading-relaxed mb-8">
              Ich bin Nico – ich entwickle moderne Websites und digitale
              Systeme für lokale Dienstleister. Mein Fokus liegt auf
              Vertrauen, klarer Struktur und einem Auftritt, der mehr
              Anfragen generiert.
            </p>
            <p className="text-zinc-500 text-lg leading-relaxed mb-10">
              Kein anonymer Agenturprozess. Kein Ticket-System. Du hast
              einen direkten Ansprechpartner – von der ersten Idee bis
              zum Launch und darüber hinaus.
            </p>

            <div className="flex flex-col gap-4">
              {[
                {
                  title: "Spezialisiert auf lokale Dienstleister",
                  desc: "Massage, Beauty, Fitness, Coaching – ich kenne deine Zielgruppe und was sie überzeugt.",
                },
                {
                  title: "Design mit Wirkung",
                  desc: "Kein generisches Template. Jede Website ist auf dein Angebot und deine Kunden ausgerichtet.",
                },
                {
                  title: "Direkter Kontakt",
                  desc: "Du erreichst mich persönlich – schnelle Antworten, klare Kommunikation, keine Umwege.",
                },
              ].map((item) => (
                <div
                  key={item.title}
                  className="flex gap-4 p-5 rounded-2xl border border-zinc-100 hover:border-zinc-200 hover:shadow-md hover:shadow-zinc-100 hover:-translate-y-0.5 transition-all duration-250"
                >
                  <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-zinc-900 flex items-center justify-center">
                    <span className="text-white text-[10px] font-bold">✓</span>
                  </span>
                  <div>
                    <p className="font-semibold text-zinc-900 mb-0.5">{item.title}</p>
                    <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── PROBLEM ───────────────────────────────────────────────────────── */}
      <section className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <SectionLabel>Das Problem</SectionLabel>
            <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight leading-[1.08] mb-6">
              Dein Angebot ist gut. Dein digitaler Auftritt hält nicht mit.
            </h2>
            <p className="text-zinc-500 text-lg leading-relaxed">
              Lokale Dienstleister verlieren täglich potenzielle Kunden –
              nicht weil ihr Service schlecht ist, sondern weil ihre Website
              kein Vertrauen aufbaut.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                title: "Kein professionelles Design",
                desc: "Ein schlechter erster Eindruck entscheidet in Sekunden – der Besucher geht, ohne zu fragen.",
              },
              {
                title: "Keine klare Botschaft",
                desc: "Wer nicht sofort versteht, was du anbietest, springt ab. Klarheit schlägt Kreativität.",
              },
              {
                title: "Nicht mobiloptimiert",
                desc: "Über 70 % kommen per Smartphone – eine schlechte mobile Erfahrung kostet dich Kunden.",
              },
              {
                title: "Kein Weg zur Anfrage",
                desc: "Wenn der Besucher nicht weiß, wie er dich erreicht, erreicht er dich nicht.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 p-6 rounded-2xl border border-zinc-100 bg-white hover:border-zinc-200 hover:shadow-md hover:shadow-zinc-100 hover:-translate-y-0.5 transition-all duration-250"
              >
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-red-50 border border-red-100 flex items-center justify-center">
                  <span className="text-red-400 text-[10px] font-bold">✕</span>
                </span>
                <div>
                  <p className="font-semibold text-zinc-900 mb-1">{item.title}</p>
                  <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SOLUTION ──────────────────────────────────────────────────────── */}
      <section className="bg-zinc-900 text-white py-28 px-6 relative overflow-hidden">
        {/* Gradient orb */}
        <div
          aria-hidden
          className="pointer-events-none absolute -top-40 right-0 w-[600px] h-[600px] rounded-full -z-0 opacity-20"
          style={{
            background: "radial-gradient(circle, rgba(161,161,170,0.3) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-start">
          <div className="md:sticky md:top-28">
            <SectionLabel light>Die Lösung</SectionLabel>
            <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight leading-[1.08] mb-6 text-white">
              Eine Website, die deinen Wert sichtbar macht.
            </h2>
            <p className="text-zinc-400 text-lg leading-relaxed">
              Ich baue keine Template-Seiten. Ich entwickle digitale
              Auftritte, die dein Studio professionell positionieren und
              gezielt Anfragen generieren.
            </p>
          </div>

          <div className="flex flex-col gap-4">
            {[
              {
                title: "Klares, premium Design",
                desc: "Visuell stark, markengerecht, vertrauensaufbauend – schon beim ersten Blick.",
              },
              {
                title: "Conversion-optimierte Struktur",
                desc: "Jede Seite ist so aufgebaut, dass Besucher zu Anfragen und Kunden werden.",
              },
              {
                title: "Schnell, mobil, technisch sauber",
                desc: "Top Ladezeiten, perfekte Darstellung auf allen Geräten, SEO-ready von Anfang an.",
              },
              {
                title: "Optionale digitale Module",
                desc: "Buchung, Automatisierung, Bewertungen – integrierbar, wenn es Sinn macht.",
              },
            ].map((item) => (
              <div
                key={item.title}
                className="group flex gap-4 p-6 rounded-2xl border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-800/60 hover:-translate-y-0.5 transition-all duration-250"
              >
                <span className="mt-0.5 shrink-0 w-5 h-5 rounded-full bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center">
                  <span className="text-emerald-400 text-[10px] font-bold">✓</span>
                </span>
                <div>
                  <p className="font-semibold text-white mb-1">{item.title}</p>
                  <p className="text-sm text-zinc-400 leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ──────────────────────────────────────────────────────── */}
      <section id="leistungen" className="py-28 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionLabel>Leistungen</SectionLabel>
            <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight leading-[1.08] max-w-xl">
              Alles aus einer Hand – kein Flickenteppich.
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service) => (
              <div
                key={service.title}
                className="group p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-xl hover:shadow-zinc-200/60 hover:-translate-y-1 transition-all duration-300 cursor-default"
              >
                <span className="text-[32px] text-zinc-200 group-hover:text-zinc-800 transition-colors duration-300 block mb-6">
                  {service.icon}
                </span>
                <h3 className="text-lg font-semibold text-zinc-900 mb-3">{service.title}</h3>
                <p className="text-[14px] text-zinc-500 leading-relaxed mb-6">
                  {service.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {service.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-[11px] font-medium text-zinc-400 border border-zinc-200 bg-zinc-50 px-3 py-1 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CASE STUDY ────────────────────────────────────────────────────── */}
      <section id="referenzen" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionLabel>Referenz</SectionLabel>
            <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight leading-[1.08] max-w-2xl">
              Massage Studio – Ein vollständiges digitales System
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-14 items-center">
            {/* Browser mock */}
            <div className="rounded-2xl border border-zinc-200 bg-zinc-50 p-2 shadow-xl shadow-zinc-200/50">
              <div className="bg-white rounded-xl border border-zinc-100 overflow-hidden">
                {/* Chrome bar */}
                <div className="flex items-center gap-1.5 px-4 py-3 border-b border-zinc-100 bg-zinc-50">
                  <div className="w-2.5 h-2.5 rounded-full bg-red-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-yellow-300" />
                  <div className="w-2.5 h-2.5 rounded-full bg-green-300" />
                  <div className="flex-1 mx-3 bg-zinc-100 h-5 rounded-full" />
                </div>
                {/* Content */}
                <div className="p-6 space-y-5">
                  <div>
                    <div className="h-6 bg-zinc-900 rounded-lg w-48 mb-2" />
                    <div className="h-3 bg-zinc-100 rounded w-full mb-1.5" />
                    <div className="h-3 bg-zinc-100 rounded w-3/4" />
                  </div>
                  {/* Calendar */}
                  <div>
                    <div className="grid grid-cols-7 gap-1">
                      {["Mo","Di","Mi","Do","Fr","Sa","So"].map((d) => (
                        <div key={d} className="text-center text-[9px] font-medium text-zinc-400 pb-1">
                          {d}
                        </div>
                      ))}
                      {Array.from({ length: 35 }).map((_, i) => {
                        const day = i + 1;
                        const isSelected = i === 14;
                        const isBooked = i === 8 || i === 22;
                        const isEmpty = day > 31;
                        return (
                          <div
                            key={i}
                            className={`aspect-square flex items-center justify-center text-[10px] font-medium rounded-lg transition-colors ${
                              isEmpty
                                ? ""
                                : isSelected
                                ? "bg-zinc-900 text-white"
                                : isBooked
                                ? "bg-zinc-100 text-zinc-300"
                                : "hover:bg-zinc-100 text-zinc-600"
                            }`}
                          >
                            {!isEmpty ? day : ""}
                          </div>
                        );
                      })}
                    </div>
                  </div>
                  {/* Time slots */}
                  <div className="grid grid-cols-3 gap-2">
                    {[
                      { time: "09:00", state: "free" },
                      { time: "10:30", state: "free" },
                      { time: "12:00", state: "selected" },
                      { time: "13:30", state: "free" },
                      { time: "15:00", state: "booked" },
                      { time: "16:30", state: "free" },
                    ].map(({ time, state }) => (
                      <div
                        key={time}
                        className={`py-2 rounded-xl text-[11px] text-center font-medium transition-colors ${
                          state === "selected"
                            ? "bg-zinc-900 text-white"
                            : state === "booked"
                            ? "bg-zinc-100 text-zinc-300 line-through"
                            : "bg-zinc-50 text-zinc-600 border border-zinc-100 hover:border-zinc-300"
                        }`}
                      >
                        {time}
                      </div>
                    ))}
                  </div>
                  {/* Book button */}
                  <div className="h-9 bg-zinc-900 rounded-xl flex items-center justify-center">
                    <span className="text-white text-[11px] font-medium">Termin bestätigen</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Text side */}
            <div>
              <p className="text-zinc-500 text-lg leading-relaxed mb-10">
                Für ein lokales Massage-Studio habe ich einen vollständigen
                digitalen Auftritt entwickelt – vom professionellen Design
                über klare Inhaltsstruktur bis hin zu einem integrierten
                Buchungsmodul als ergänzender Baustein.
              </p>

              <div className="space-y-6">
                {[
                  {
                    title: "Professioneller erster Eindruck",
                    desc: "Das Studio wirkt sofort vertrauenswürdig – Besucher bleiben und informieren sich.",
                  },
                  {
                    title: "Klare Struktur, mehr Anfragen",
                    desc: "Jede Seite führt den Besucher gezielt zur Kontaktaufnahme.",
                  },
                  {
                    title: "Buchung als optionales Modul",
                    desc: "Integriert, weil es hier Sinn macht – nicht als Hauptfokus der Website.",
                  },
                ].map((item, idx) => (
                  <div key={item.title} className="flex gap-4">
                    <div className="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center shrink-0 text-white text-xs font-semibold">
                      {idx + 1}
                    </div>
                    <div>
                      <p className="font-semibold text-zinc-900 mb-0.5">{item.title}</p>
                      <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── PROCESS ───────────────────────────────────────────────────────── */}
      <section id="prozess" className="py-28 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionLabel>Prozess</SectionLabel>
            <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight leading-[1.08] max-w-2xl">
              Von Idee zu Launch – in 4 Schritten.
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={step.number} className="relative group">
                {/* Connector line */}
                {idx < steps.length - 1 && (
                  <div className="hidden md:block absolute top-5 left-[calc(100%-0.5rem)] w-full h-px bg-gradient-to-r from-zinc-200 to-transparent z-0" />
                )}
                <div className="relative z-10 p-6 rounded-2xl bg-white border border-zinc-100 hover:shadow-lg hover:shadow-zinc-100 hover:-translate-y-0.5 transition-all duration-250">
                  <span className="text-[42px] font-semibold text-zinc-100 leading-none block mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-semibold text-zinc-900 mb-2">{step.title}</h3>
                  <p className="text-[13px] text-zinc-500 leading-relaxed">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── PRICING ───────────────────────────────────────────────────────── */}
      <section id="preise" className="py-28 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="mb-16">
            <SectionLabel>Preise</SectionLabel>
            <h2 className="text-4xl md:text-[52px] font-semibold tracking-tight leading-[1.08] max-w-2xl">
              Klare Pakete. Kein Kleingedrucktes.
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 items-start">
            {plans.map((plan) => (
              <div
                key={plan.name}
                className={`relative rounded-2xl p-8 transition-all duration-300 ${
                  plan.highlight
                    ? "bg-zinc-900 text-white shadow-2xl shadow-zinc-300/40 scale-[1.02]"
                    : "bg-white border border-zinc-200 hover:shadow-xl hover:shadow-zinc-100 hover:-translate-y-0.5"
                }`}
              >
                {plan.highlight && (
                  <span className="absolute -top-3 left-1/2 -translate-x-1/2 inline-flex items-center gap-1.5 bg-emerald-500 text-white text-[10px] font-semibold tracking-wider uppercase px-4 py-1 rounded-full shadow-sm">
                    <span className="w-1 h-1 rounded-full bg-white/70" />
                    Empfohlen
                  </span>
                )}

                <p className={`text-sm font-medium mb-1 ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                  {plan.name}
                </p>
                <div className="flex items-baseline gap-1 mb-2">
                  <span className={`text-sm font-normal mr-0.5 ${plan.highlight ? "text-zinc-400" : "text-zinc-400"}`}>ab</span>
                  <span className="text-[44px] font-semibold tracking-tight leading-none">
                    €{plan.price}
                  </span>
                  {plan.period && (
                    <span className={`text-sm ${plan.highlight ? "text-zinc-400" : "text-zinc-400"}`}>
                      {plan.period}
                    </span>
                  )}
                </div>
                <p className={`text-sm mb-8 leading-relaxed ${plan.highlight ? "text-zinc-400" : "text-zinc-500"}`}>
                  {plan.description}
                </p>

                <ul className="space-y-3.5 mb-9">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-3 text-sm">
                      <span className={`text-xs ${plan.highlight ? "text-emerald-400" : "text-zinc-300"}`}>
                        ✓
                      </span>
                      <span className={plan.highlight ? "text-zinc-300" : "text-zinc-600"}>
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>

                <a
                  href="#kontakt"
                  className={`block text-center py-3.5 rounded-full text-sm font-medium transition-all duration-200 active:scale-[0.98] ${
                    plan.highlight
                      ? "bg-white text-zinc-900 hover:bg-zinc-100 shadow-sm"
                      : "border border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50"
                  }`}
                >
                  {plan.cta}
                </a>
              </div>
            ))}
          </div>

          <p className="text-center text-[13px] text-zinc-400 mt-10">
            Preise verstehen sich als Startpreise. Der finale Preis richtet sich nach Umfang und Anforderungen.
          </p>
        </div>
      </section>

      {/* ── FINAL CTA ─────────────────────────────────────────────────────── */}
      <section id="kontakt" className="py-28 px-6 bg-zinc-50 relative overflow-hidden">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 -z-0"
          style={{
            background:
              "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(161,161,170,0.15) 0%, transparent 70%)",
          }}
        />
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <SectionLabel>Los geht&apos;s</SectionLabel>
          <h2 className="text-4xl md:text-[60px] font-semibold tracking-tight leading-[1.06] max-w-3xl mx-auto mb-6">
            Dein Studio verdient einen digitalen Auftritt auf höchstem Niveau.
          </h2>
          <p className="text-zinc-500 text-lg max-w-lg mx-auto mb-12 leading-relaxed">
            Schreib mir direkt – ich analysiere deinen aktuellen Auftritt
            und zeige dir in einem kostenlosen Gespräch, was möglich ist.
            Unverbindlich, ohne Verkaufsdruck.
          </p>
          <PrimaryButton href="mailto:lokaltexte.service@gmail.com">
            Kostenlose Website-Analyse →
          </PrimaryButton>
          <p className="text-zinc-400 text-[13px] mt-6">
            Antwort von Nico innerhalb von 24 Stunden · Kein Verkaufsdruck
          </p>
        </div>
      </section>

      {/* ── FOOTER ────────────────────────────────────────────────────────── */}
      <footer className="border-t border-zinc-100 py-10 px-6 bg-white">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-zinc-400">
          <a href="#" className="text-base font-semibold text-zinc-900 tracking-tight">
            Nico<span className="text-zinc-400">Studio</span>
          </a>
          <div className="flex gap-6">
            {["Impressum", "Datenschutz", "Kontakt"].map((l) => (
              <a key={l} href="#" className="hover:text-zinc-700 transition-colors">
                {l}
              </a>
            ))}
          </div>
          <span>© 2026 Nico Studio. Alle Rechte vorbehalten.</span>
        </div>
      </footer>
    </main>
  );
}