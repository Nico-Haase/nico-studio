import Link from "next/link";
import type { ReactNode } from "react";

// ─── Metadata ─────────────────────────────────────────────────────────────────

export const metadata = {
  title: "Portfolio | Nico Studio",
  description:
    "Design-Beispiele für moderne Websites für Dienstleister, Handwerker, Coaches und mehr.",
};

// ─── Browser Frame Shell ──────────────────────────────────────────────────────

function BrowserFrame({ children, bg = "bg-[#0e0e0e]" }: { children: ReactNode; bg?: string }) {
  return (
    <div className={`rounded-xl overflow-hidden shadow-2xl shadow-black/40 border border-white/[0.06] ${bg} w-full`}>
      <div className="flex items-center gap-1.5 px-3 py-2.5 bg-white/[0.04] border-b border-white/[0.06]">
        <div className="w-2 h-2 rounded-full bg-red-500/60" />
        <div className="w-2 h-2 rounded-full bg-yellow-500/60" />
        <div className="w-2 h-2 rounded-full bg-green-500/60" />
        <div className="flex-1 mx-2 bg-white/[0.06] rounded-full h-3" />
      </div>
      {children}
    </div>
  );
}

// ─── Mockup: Massage & Wellness ───────────────────────────────────────────────

function MassageMockup() {
  return (
    <BrowserFrame bg="bg-[#0d0f0e]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
        <div className="w-16 h-2.5 rounded-full bg-stone-400/60" />
        <div className="flex gap-3">
          {[40, 32, 28].map((w, i) => <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: w }} />)}
        </div>
        <div className="h-5 w-20 rounded-full bg-stone-500/40 border border-stone-400/20" />
      </div>
      <div className="px-4 pt-5 pb-3 text-center">
        <div className="inline-block h-3 w-28 rounded-full bg-stone-400/30 mb-3" />
        <div className="h-5 w-3/4 mx-auto rounded-full bg-white/70 mb-2" />
        <div className="h-4 w-2/3 mx-auto rounded-full bg-white/40 mb-1" />
        <div className="h-3 w-1/2 mx-auto rounded-full bg-white/20 mb-4" />
        <div className="flex justify-center gap-2">
          <div className="h-6 w-24 rounded-full bg-stone-500/70" />
          <div className="h-6 w-20 rounded-full border border-white/20" />
        </div>
      </div>
      <div className="px-4 pb-4 grid grid-cols-3 gap-2 mt-1">
        {["Klassisch", "Hot Stone", "Aromaöl"].map((label) => (
          <div key={label} className="rounded-lg bg-white/[0.04] border border-white/[0.07] p-2">
            <div className="w-4 h-4 rounded-full bg-stone-500/40 mb-1.5" />
            <div className="h-1.5 w-10 rounded-full bg-white/30 mb-1" />
            <div className="h-1 w-8 rounded-full bg-white/15" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

// ─── Mockup: Beauty Studio ────────────────────────────────────────────────────

function BeautyMockup() {
  return (
    <BrowserFrame bg="bg-[#100d10]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
        <div className="w-16 h-2.5 rounded-full bg-rose-300/60" />
        <div className="flex gap-3">
          {[40, 32, 28].map((w, i) => <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: w }} />)}
        </div>
        <div className="h-5 w-20 rounded-full bg-rose-500/30 border border-rose-400/20" />
      </div>
      <div className="relative mx-4 mt-4 rounded-xl overflow-hidden bg-rose-950/40 border border-rose-400/10 h-20 flex items-center justify-center">
        <div className="text-center">
          <div className="h-4 w-32 rounded-full bg-rose-200/50 mx-auto mb-1.5" />
          <div className="h-2.5 w-20 rounded-full bg-white/20 mx-auto" />
        </div>
        <div className="absolute top-2 right-2 h-5 w-16 rounded-full bg-rose-500/50" />
      </div>
      <div className="px-4 pb-4 grid grid-cols-4 gap-1.5 mt-3">
        {["bg-rose-900/40","bg-rose-800/30","bg-rose-950/50","bg-rose-900/20","bg-rose-800/40","bg-rose-900/30","bg-rose-950/40","bg-rose-800/20"].map((bg, i) => (
          <div key={i} className={`h-8 rounded-lg ${bg} border border-rose-400/10`} />
        ))}
      </div>
    </BrowserFrame>
  );
}

// ─── Mockup: Handwerk & Bau ───────────────────────────────────────────────────

function HandwerkMockup() {
  return (
    <BrowserFrame bg="bg-[#0e0c09]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
        <div className="w-20 h-2.5 rounded-full bg-amber-400/60" />
        <div className="flex gap-3">
          {[44, 36, 28].map((w, i) => <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: w }} />)}
        </div>
        <div className="h-5 w-20 rounded-full bg-amber-500/40 border border-amber-400/20" />
      </div>
      <div className="px-4 pt-4 flex items-start gap-3">
        <div className="flex-1">
          <div className="h-2 w-24 rounded-full bg-amber-400/40 mb-2" />
          <div className="h-4 w-full rounded-full bg-white/70 mb-1.5" />
          <div className="h-3.5 w-4/5 rounded-full bg-white/40 mb-3" />
          <div className="flex gap-2">
            <div className="h-6 w-20 rounded-full bg-amber-500/70" />
            <div className="h-6 w-20 rounded-full border border-white/20" />
          </div>
        </div>
        <div className="shrink-0 bg-white/[0.05] border border-white/[0.08] rounded-xl p-2 text-center w-20">
          <div className="h-4 w-8 rounded bg-amber-400/60 mx-auto mb-1" />
          <div className="h-1.5 w-12 rounded-full bg-white/20 mx-auto mb-2" />
          <div className="h-3 w-6 rounded bg-amber-400/40 mx-auto mb-1" />
          <div className="h-1.5 w-10 rounded-full bg-white/15 mx-auto" />
        </div>
      </div>
      <div className="px-4 pb-4 grid grid-cols-3 gap-1.5 mt-3">
        {[0,1,2].map((i) => (
          <div key={i} className="rounded-lg bg-amber-950/30 border border-amber-400/10 h-14 flex flex-col justify-end p-1.5">
            <div className="h-1.5 w-10 rounded-full bg-white/30 mb-1" />
            <div className="h-1 w-8 rounded-full bg-white/15" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

// ─── Mockup: Fitness & Personal Training ──────────────────────────────────────

function FitnessMockup() {
  return (
    <BrowserFrame bg="bg-[#090909]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
        <div className="w-20 h-2.5 rounded-full bg-lime-400/70" />
        <div className="flex gap-3">
          {[44, 36, 28].map((w, i) => <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: w }} />)}
        </div>
        <div className="h-5 w-20 rounded-full bg-lime-500/30 border border-lime-400/20" />
      </div>
      <div className="px-4 pt-4">
        <div className="h-2 w-20 rounded-full bg-lime-400/40 mb-2" />
        <div className="h-6 w-full rounded-md bg-white/80 mb-1" />
        <div className="h-4 w-2/3 rounded-full bg-lime-400/50 mb-3" />
        <div className="flex gap-2 mb-3">
          <div className="h-7 w-28 rounded-full bg-lime-500/80" />
          <div className="h-7 w-20 rounded-full border border-white/20" />
        </div>
      </div>
      <div className="mx-4 mb-3 rounded-xl bg-white/[0.04] border border-white/[0.06] p-2 grid grid-cols-3 gap-2">
        {[["200+","Kunden"],["5★","Bewertung"],["8 J.","Erfahrung"]].map(([val, lbl]) => (
          <div key={lbl} className="text-center">
            <div className="h-3.5 w-8 rounded bg-lime-400/50 mx-auto mb-1" />
            <div className="h-1.5 w-10 rounded-full bg-white/20 mx-auto" />
          </div>
        ))}
      </div>
      <div className="px-4 pb-4 flex flex-wrap gap-1.5">
        {["HIIT","Krafttraining","Yoga","1:1 Coaching"].map((tag) => (
          <div key={tag} className="h-5 px-3 rounded-full bg-lime-500/15 border border-lime-400/20 flex items-center">
            <div className="h-1.5 w-10 rounded-full bg-lime-400/50" />
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

// ─── Mockup: Finanzberatung ────────────────────────────────────────────────────

function FinanzMockup() {
  return (
    <BrowserFrame bg="bg-[#090c10]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
        <div className="w-24 h-2.5 rounded-full bg-blue-400/60" />
        <div className="flex gap-3">
          {[52, 44, 36, 28].map((w, i) => <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: w }} />)}
        </div>
        <div className="h-5 w-20 rounded-full bg-blue-500/30 border border-blue-400/20" />
      </div>
      <div className="px-4 pt-4 flex gap-3">
        <div className="flex-1">
          <div className="h-2 w-24 rounded-full bg-blue-400/40 mb-2" />
          <div className="h-4 w-full rounded-full bg-white/70 mb-1.5" />
          <div className="h-3 w-4/5 rounded-full bg-white/40 mb-3" />
          <div className="h-6 w-24 rounded-full bg-blue-500/60 mb-2" />
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-blue-400/30 border border-blue-400/20" />
            <div className="h-1.5 w-20 rounded-full bg-white/20" />
          </div>
        </div>
        <div className="shrink-0 w-24 rounded-xl bg-blue-950/40 border border-blue-400/15 p-2">
          <div className="w-6 h-6 rounded-full bg-blue-400/30 mb-2 mx-auto" />
          <div className="h-1.5 w-14 rounded-full bg-white/30 mx-auto mb-1" />
          <div className="h-1 w-10 rounded-full bg-white/15 mx-auto mb-2" />
          <div className="h-4 w-full rounded-lg bg-blue-500/30" />
        </div>
      </div>
      <div className="px-4 pb-4 mt-3 space-y-1.5">
        {[80, 65, 72].map((w, i) => (
          <div key={i} className="flex items-center gap-2 rounded-lg bg-white/[0.03] border border-white/[0.06] px-2.5 py-1.5">
            <div className="w-3 h-3 rounded bg-blue-400/40" />
            <div className="h-1.5 rounded-full bg-white/25" style={{ width: w }} />
          </div>
        ))}
      </div>
    </BrowserFrame>
  );
}

// ─── Mockup: Coaching ─────────────────────────────────────────────────────────

function CoachingMockup() {
  return (
    <BrowserFrame bg="bg-[#090f0d]">
      <div className="flex items-center justify-between px-4 py-2.5 border-b border-white/[0.05]">
        <div className="w-16 h-2.5 rounded-full bg-emerald-400/60" />
        <div className="flex gap-3">
          {[44, 36, 44, 28].map((w, i) => <div key={i} className="h-1.5 rounded-full bg-white/20" style={{ width: w }} />)}
        </div>
        <div className="h-5 w-20 rounded-full bg-emerald-500/30 border border-emerald-400/20" />
      </div>
      <div className="px-4 pt-4 flex gap-3 items-center">
        <div className="shrink-0 w-14 h-14 rounded-2xl bg-emerald-900/50 border border-emerald-400/15 flex items-center justify-center">
          <div className="w-8 h-8 rounded-full bg-emerald-400/30" />
        </div>
        <div className="flex-1">
          <div className="h-2 w-20 rounded-full bg-emerald-400/40 mb-2" />
          <div className="h-3.5 w-full rounded-full bg-white/65 mb-1.5" />
          <div className="h-2.5 w-3/4 rounded-full bg-white/35" />
        </div>
      </div>
      <div className="mx-4 mt-3 rounded-xl bg-emerald-950/40 border border-emerald-400/15 px-3 py-2">
        <div className="h-1.5 w-full rounded-full bg-white/20 mb-1" />
        <div className="h-1.5 w-4/5 rounded-full bg-white/15 mb-1" />
        <div className="h-1.5 w-2/3 rounded-full bg-white/10 mb-2" />
        <div className="flex items-center gap-1.5">
          <div className="w-4 h-4 rounded-full bg-emerald-400/30" />
          <div className="h-1.5 w-16 rounded-full bg-white/20" />
        </div>
      </div>
      <div className="px-4 pb-4 mt-3 flex gap-2">
        <div className="h-7 flex-1 rounded-full bg-emerald-500/60" />
        <div className="h-7 flex-1 rounded-full border border-white/15" />
      </div>
    </BrowserFrame>
  );
}

// ─── Portfolio Card ───────────────────────────────────────────────────────────

interface CardProps {
  tag: string;
  title: string;
  description: string;
  features: string[];
  accentColor: string;
  mockup: ReactNode;
  demoHref: string;
}

function PortfolioCard({ tag, title, description, features, accentColor, mockup, demoHref }: CardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/70 hover:-translate-y-1.5 transition-all duration-300">
      {/* Dark mockup area – clickable */}
      <Link href={demoHref} className="relative bg-zinc-950 px-5 pt-5 pb-1 overflow-hidden block cursor-pointer" style={{ minHeight: 224 }}>
        <div
          className="absolute inset-0 opacity-25 pointer-events-none"
          style={{ background: `radial-gradient(ellipse 80% 60% at 50% 100%, ${accentColor}55 0%, transparent 70%)` }}
        />
        <div className="relative z-10 scale-[0.88] origin-top">
          {mockup}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-white/0 group-hover:bg-white/5 transition-colors duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white text-zinc-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg">
            Demo ansehen →
          </span>
        </div>
      </Link>

      {/* Card text */}
      <div className="flex flex-col flex-1 p-6">
        <span className="inline-block text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-400 mb-3">
          {tag}
        </span>
        <h3 className="text-lg font-semibold text-zinc-900 mb-2 leading-snug">{title}</h3>
        <p className="text-[13px] text-zinc-500 leading-relaxed mb-5">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {features.map((f) => (
            <span key={f} className="text-[11px] font-medium text-zinc-500 border border-zinc-200 bg-zinc-50 px-2.5 py-1 rounded-full">
              {f}
            </span>
          ))}
        </div>
        <div className="mt-auto flex gap-2">
          <Link
            href={demoHref}
            className="inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-900 bg-zinc-900 border border-zinc-900 px-4 py-2.5 rounded-full hover:bg-zinc-700 hover:border-zinc-700 text-white active:scale-[0.98] transition-all duration-200"
          >
            Demo ansehen →
          </Link>
          <a
            href="mailto:lokaltexte.service@gmail.com"
            className="group/btn inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-600 border border-zinc-200 px-4 py-2.5 rounded-full hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98] transition-all duration-200"
          >
            Anfragen
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Page Data ────────────────────────────────────────────────────────────────

const items: CardProps[] = [
  {
    tag: "Wellness",
    title: "Massage & Wellness",
    description: "Ruhiges, vertrauenswürdiges Design mit klarer Leistungsstruktur und optionaler Online-Buchung – für Kunden, die Entspannung suchen.",
    features: ["Online-Buchung", "Leistungsübersicht", "Mobiloptimiert", "SEO"],
    accentColor: "#a8836a",
    demoHref: "/demo/massage",
    mockup: <MassageMockup />,
  },
  {
    tag: "Beauty",
    title: "Beauty Studio",
    description: "Elegantes Layout mit Galerie und Preisliste – das die Hochwertigkeit des Studios sofort kommuniziert und Neukunden überzeugt.",
    features: ["Galerie", "Preisliste", "Terminbuchung", "Bewertungen"],
    accentColor: "#e879a0",
    demoHref: "/demo/beauty",
    mockup: <BeautyMockup />,
  },
  {
    tag: "Handwerk",
    title: "Handwerk & Bau",
    description: "Starke, klare Präsenz mit Referenzprojekten und Leistungsübersicht – damit Auftraggeber sofort Vertrauen fassen.",
    features: ["Referenzprojekte", "Leistungen", "Anfrage-Formular", "Google Maps"],
    accentColor: "#f59e0b",
    demoHref: "/demo/handwerk",
    mockup: <HandwerkMockup />,
  },
  {
    tag: "Fitness",
    title: "Fitness & Personal Training",
    description: "Energetisches, motivierendes Design mit Kursplan und Trainer-Profil – das neue Mitglieder direkt zur Anmeldung führt.",
    features: ["Kursplan", "Trainer-Profil", "Mitgliedschaft", "Ergebnisse"],
    accentColor: "#84cc16",
    demoHref: "/demo/fitness",
    mockup: <FitnessMockup />,
  },
  {
    tag: "Finanzen",
    title: "Finanzberatung",
    description: "Seriöses, vertrauensaufbauendes Design mit strukturierten Leistungen und einem klaren Weg zur Erstberatung.",
    features: ["Vertrauenssignale", "Leistungen", "Erstberatung", "Zertifikate"],
    accentColor: "#3b82f6",
    demoHref: "/demo/finanzberatung",
    mockup: <FinanzMockup />,
  },
  {
    tag: "Coaching",
    title: "Coaching",
    description: "Persönliches, inspirierendes Design mit starker Hero-Section, Testimonials und einem klaren Weg zur Erstberatung.",
    features: ["Persönliches Branding", "Testimonials", "Erstgespräch", "Blog"],
    accentColor: "#10b981",
    demoHref: "/demo/coaching",
    mockup: <CoachingMockup />,
  },
];

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function PortfolioPage() {
  return (
    <main className="bg-white text-zinc-900 antialiased">

      {/* NAV */}
      <header className="border-b border-zinc-100 bg-white/90 backdrop-blur-xl sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <Link href="/" className="text-[17px] font-semibold tracking-tight text-zinc-900 select-none">
            Nico<span className="text-zinc-400">Studio</span>
          </Link>
          <nav className="hidden md:flex items-center gap-7 text-[13px] text-zinc-500">
            {["Leistungen","Referenzen","Prozess","Preise"].map((item) => (
              <Link key={item} href={`/#${item.toLowerCase()}`} className="hover:text-zinc-900 transition-colors duration-150">
                {item}
              </Link>
            ))}
            <Link href="/portfolio" className="text-zinc-900 font-semibold">Portfolio</Link>
          </nav>
          <Link href="/#kontakt" className="hidden md:inline-flex items-center bg-zinc-900 text-white text-sm font-medium px-5 py-2.5 rounded-full hover:bg-zinc-700 transition-colors duration-200">
            Kostenlose Website-Analyse
          </Link>
          <Link href="/" className="md:hidden text-sm text-zinc-500 hover:text-zinc-900 transition-colors">← Zurück</Link>
        </div>
      </header>

      {/* HERO */}
      <section className="py-24 px-6 border-b border-zinc-100">
        <div className="max-w-6xl mx-auto">
          <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-400 mb-5">Portfolio</span>
          <div className="grid md:grid-cols-2 gap-10 items-end">
            <h1 className="text-4xl md:text-[56px] font-semibold tracking-tight leading-[1.06]">
              Design-Beispiele{" "}
              <span className="text-zinc-400">für verschiedene Branchen</span>
            </h1>
            <div>
              <p className="text-lg text-zinc-500 leading-relaxed mb-6">
                Jede Website wird individuell auf dein Unternehmen zugeschnitten – modern,
                professionell und darauf ausgelegt, Anfragen zu generieren.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Premium Design","Mobiloptimiert","Conversion-fokussiert","2–3 Wochen Lieferzeit"].map((pill) => (
                  <span key={pill} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-full">
                    <span className="text-emerald-500 text-[10px]">✓</span>
                    {pill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* GRID */}
      <section className="py-20 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {items.map((item) => <PortfolioCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      {/* WHY NOTE */}
      <section className="py-16 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: "◻", title: "Kein Template", desc: "Jede Website entsteht individuell – angepasst an dein Angebot, deine Zielgruppe und deine Ziele." },
            { icon: "◈", title: "Klare Struktur", desc: "Design und Inhalt sind so aufgebaut, dass Besucher geführt werden – direkt zur Anfrage." },
            { icon: "◎", title: "Schnelle Lieferzeit", desc: "Von der Analyse bis zum Launch in 2–3 Wochen. Kein monatelanger Prozess." },
          ].map((item) => (
            <div key={item.title} className="flex gap-4">
              <span className="text-2xl text-zinc-300 shrink-0 mt-0.5">{item.icon}</span>
              <div>
                <p className="font-semibold text-zinc-900 mb-1">{item.title}</p>
                <p className="text-sm text-zinc-500 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-28 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="bg-zinc-900 rounded-3xl px-10 py-20 text-center relative overflow-hidden">
            <div aria-hidden className="pointer-events-none absolute inset-0 opacity-30" style={{ background: "radial-gradient(ellipse 70% 60% at 50% 110%, rgba(161,161,170,0.4) 0%, transparent 70%)" }} />
            <div className="relative z-10">
              <span className="inline-block text-[11px] font-semibold tracking-[0.18em] uppercase text-zinc-400 mb-5">Dein Projekt</span>
              <h2 className="text-3xl md:text-[48px] font-semibold tracking-tight leading-[1.08] text-white max-w-2xl mx-auto mb-5">
                Gefällt dir ein Designstil?
              </h2>
              <p className="text-zinc-400 text-lg max-w-xl mx-auto mb-10 leading-relaxed">
                Ich erstelle auch für dein Unternehmen eine moderne Website, die professionell aussieht und neue Kunden gewinnt.
              </p>
              <Link href="/#kontakt" className="inline-flex items-center gap-2 bg-white text-zinc-900 text-sm font-medium px-8 py-4 rounded-full hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200 shadow-sm">
                Kostenlose Website-Analyse →
              </Link>
              <p className="text-zinc-500 text-[13px] mt-5">Antwort innerhalb von 24 Stunden · Kein Verkaufsdruck</p>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-zinc-100 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-[13px] text-zinc-400">
          <Link href="/" className="text-base font-semibold text-zinc-900 tracking-tight">
            Nico<span className="text-zinc-400">Studio</span>
          </Link>
          <div className="flex gap-6">
            <Link href="/impressum" className="hover:text-zinc-700 transition-colors">Impressum</Link>
            <Link href="/datenschutz" className="hover:text-zinc-700 transition-colors">Datenschutz</Link>
            <Link href="/#kontakt" className="hover:text-zinc-700 transition-colors">Kontakt</Link>
          </div>
          <span>© 2026 Nico Studio. Alle Rechte vorbehalten.</span>
        </div>
      </footer>

    </main>
  );
}