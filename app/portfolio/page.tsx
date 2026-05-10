import Link from "next/link";
import type { ReactNode } from "react";

export const metadata = {
  title: "Portfolio | Nico Studio",
  description: "Design-Beispiele für moderne Websites für Dienstleister, Handwerker, Coaches und mehr.",
};

// ─── Preview Mockups (hell, detailliert, wie echte Screenshots) ───────────────

function MassagePreview() {
  return (
    <div className="bg-[#f8f6f1] w-full h-full p-4 font-sans">
      <div className="flex items-center justify-between mb-4 border-b border-stone-200 pb-3">
        <div>
          <div className="text-[8px] tracking-[0.2em] uppercase text-stone-400">Serenity</div>
          <div className="text-[6px] tracking-widest text-stone-300 uppercase">Wellness & Massage</div>
        </div>
        <div className="flex gap-3 text-[7px] text-stone-400 tracking-wide">
          <span>Angebote</span><span>Preise</span><span>Kontakt</span>
        </div>
        <div className="border border-stone-800 px-2 py-1 text-[6px] tracking-wide text-stone-700">Buchen</div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <div className="pt-2">
          <div className="text-[6px] tracking-[0.3em] uppercase text-stone-400 mb-2">München · Seit 2016</div>
          <div className="text-[14px] font-light leading-tight text-stone-800 mb-2">Stille.<br/>Wärme.<br/><span className="italic text-stone-400">Heilung.</span></div>
          <div className="text-[6px] text-stone-500 leading-relaxed mb-3">Professionelle Massagetherapie, die tief wirkt. Jede Behandlung individuell.</div>
          <div className="flex gap-2">
            <div className="bg-stone-800 text-white text-[6px] px-3 py-1.5 tracking-wide">Termin</div>
            <div className="text-[6px] text-stone-400 py-1.5">Entdecken →</div>
          </div>
        </div>
        <div className="bg-stone-200/60 rounded-sm relative">
          <div className="absolute bottom-1 left-1 right-1 bg-white/90 p-1.5">
            <div className="flex gap-0.5 mb-0.5">
              {[1,2,3,4,5].map(i => <span key={i} className="text-amber-400 text-[6px]">★</span>)}
            </div>
            <div className="text-[5px] text-stone-500">"Beste Massage ever"</div>
          </div>
        </div>
      </div>
      <div className="mt-3 bg-stone-800 p-3 text-center">
        <div className="text-[6px] tracking-[0.3em] uppercase text-stone-500 mb-1">Philosophie</div>
        <div className="text-[8px] font-light text-stone-200 italic">"Der Körper spricht. Wir hören zu."</div>
      </div>
      <div className="mt-3 grid grid-cols-3 gap-1">
        {["Klassische Massage", "Hot Stone", "Aromatherapie"].map(s => (
          <div key={s} className="border border-stone-100 p-2 bg-white">
            <div className="text-[6px] font-medium text-stone-700 mb-1">{s}</div>
            <div className="text-[5px] text-stone-400 leading-relaxed mb-1">Professionelle Behandlung für Körper und Geist.</div>
            <div className="text-[7px] font-light text-stone-600">ab 75 €</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function BeautyPreview() {
  return (
    <div className="bg-[#0a0a0a] w-full h-full p-4 font-sans">
      <div className="flex items-center justify-between mb-4 border-b border-zinc-900 pb-3">
        <div className="text-[12px] font-black tracking-tighter text-white">NOIR<span className="text-rose-500">.</span></div>
        <div className="flex gap-3 text-[6px] tracking-[0.2em] uppercase text-zinc-600">
          <span>Studio</span><span>Services</span><span>Galerie</span>
        </div>
        <div className="bg-rose-500 px-2 py-1 text-[6px] tracking-wide text-white">Buchen</div>
      </div>
      <div className="grid grid-cols-2 gap-3 mb-3">
        <div className="py-2">
          <div className="text-[5px] tracking-[0.4em] uppercase text-zinc-600 mb-2">Hamburg · Premium</div>
          <div className="text-[14px] font-black tracking-tighter leading-tight text-white mb-1">BEAUTY<br/><span className="text-rose-500">REDEFINED</span><br/><span className="text-zinc-700">FOR YOU.</span></div>
          <div className="text-[6px] text-zinc-500 leading-relaxed mb-3">Kein Studio von der Stange. Jede Behandlung ist Handwerk.</div>
          <div className="flex gap-2">
            <div className="bg-white text-black text-[6px] px-3 py-1.5 font-bold tracking-wide">Buchen</div>
            <div className="border border-zinc-800 text-[6px] text-zinc-500 px-3 py-1.5">Services</div>
          </div>
        </div>
        <div className="bg-zinc-900 relative">
          <div className="absolute bottom-2 right-2 flex flex-wrap gap-1">
            {["Nails", "Lashes", "Brows"].map(t => <span key={t} className="text-[5px] bg-rose-500/20 border border-rose-500/40 text-rose-300 px-1.5 py-0.5">{t}</span>)}
          </div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1">
        {[
          { cat: "NAILS", title: "Nail Art", price: "ab 55 €" },
          { cat: "LASHES", title: "Lash Extensions", price: "ab 99 €" },
        ].map(s => (
          <div key={s.title} className="border border-zinc-900 p-2">
            <div className="text-[5px] tracking-[0.3em] uppercase text-rose-500 mb-1">{s.cat}</div>
            <div className="text-[7px] font-black text-white mb-1">{s.title}</div>
            <div className="text-[5px] text-zinc-600 mb-2">Premium Behandlung für perfekte Ergebnisse.</div>
            <div className="text-[6px] text-rose-400 font-bold">{s.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function HandwerkPreview() {
  return (
    <div className="bg-white w-full h-full p-4 font-sans">
      <div className="flex items-center justify-between mb-3 border-b border-zinc-200 pb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 bg-amber-500 rounded flex items-center justify-center">
            <span className="text-white font-bold text-[6px]">B</span>
          </div>
          <span className="text-[8px] font-bold text-zinc-800">Bauer Bau</span>
        </div>
        <div className="flex gap-2 text-[6px] text-zinc-500">
          <span>Leistungen</span><span>Referenzen</span><span>Kontakt</span>
        </div>
        <div className="bg-amber-500 text-white text-[6px] px-2 py-1 font-bold">Anfragen</div>
      </div>
      <div className="bg-zinc-900 p-4 mb-3 relative overflow-hidden">
        <div className="absolute inset-0 opacity-5" style={{backgroundImage: "repeating-linear-gradient(45deg, #fff 0, #fff 1px, transparent 0, transparent 50%)", backgroundSize: "10px 10px"}} />
        <div className="relative">
          <div className="text-[5px] tracking-widest uppercase text-amber-400 mb-2 flex items-center gap-1"><span className="w-1 h-1 rounded-full bg-amber-400" />Stuttgart · Seit 1998</div>
          <div className="text-[12px] font-black text-white leading-tight mb-2">Handwerk,<br/><span className="text-amber-400">dem man vertrauen kann.</span></div>
          <div className="text-[6px] text-zinc-400 mb-3">Maurer, Fliesen, Trockenbau. 25+ Jahre Erfahrung.</div>
          <div className="flex gap-2">
            <div className="bg-amber-500 text-white text-[6px] px-3 py-1.5 font-bold">Angebot anfragen</div>
            <div className="border border-zinc-700 text-zinc-400 text-[6px] px-3 py-1.5">Referenzen</div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 mb-3">
        {[["25+", "Jahre"], ["500+", "Projekte"], ["12", "Fachkräfte"], ["4.8★", "Google"]].map(([v, l]) => (
          <div key={l} className="bg-zinc-800 p-2 text-center">
            <div className="text-[8px] font-black text-white">{v}</div>
            <div className="text-[5px] text-zinc-500 mt-0.5">{l}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {["Maurerarbeiten", "Fliesenleger", "Trockenbau"].map(s => (
          <div key={s} className="border border-zinc-100 p-2 hover:border-amber-200">
            <div className="text-[6px] font-bold text-zinc-800 mb-1">{s}</div>
            <div className="text-[5px] text-zinc-400 leading-relaxed">Professionelle Ausführung in Stuttgart.</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function FitnessPreview() {
  return (
    <div className="bg-[#080808] w-full h-full p-4 font-sans">
      <div className="flex items-center justify-between mb-3 border-b border-zinc-900 pb-3">
        <div className="text-[11px] font-black tracking-tighter text-white">PEAK<span className="text-lime-400">.</span></div>
        <div className="flex gap-3 text-[6px] tracking-widest uppercase text-zinc-500">
          <span>Training</span><span>Preise</span><span>Trainer</span>
        </div>
        <div className="bg-lime-400 text-zinc-900 text-[6px] px-2 py-1 font-black tracking-wide">Starten</div>
      </div>
      <div className="mb-3">
        <div className="flex items-center gap-1.5 mb-2">
          <div className="w-1.5 h-1.5 rounded-full bg-lime-400 animate-pulse" />
          <div className="text-[5px] tracking-[0.3em] uppercase text-lime-400">Personal Training · Frankfurt</div>
        </div>
        <div className="text-[14px] font-black tracking-tighter leading-tight text-white mb-1">KEIN BULLSHIT.<br/><span className="text-lime-400">NUR ERGEBNISSE.</span></div>
        <div className="text-[6px] text-zinc-500 mb-3">Personal Training, das funktioniert. Individuell, konsequent, messbar.</div>
        <div className="flex gap-2">
          <div className="bg-lime-400 text-zinc-900 text-[6px] px-3 py-1.5 font-black">Erstgespräch</div>
          <div className="border border-zinc-800 text-zinc-400 text-[6px] px-3 py-1.5">Training</div>
        </div>
      </div>
      <div className="grid grid-cols-4 gap-1 mb-3 border-t border-zinc-900 pt-3">
        {[["200+", "Klienten"], ["8 J.", "Erfahrung"], ["5★", "Bewertung"], ["93%", "Ziele"]].map(([v, l]) => (
          <div key={l}>
            <div className="text-[9px] font-black text-lime-400">{v}</div>
            <div className="text-[5px] text-zinc-600">{l}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-2 gap-1">
        <div className="bg-lime-400 p-3">
          <div className="text-[5px] font-black tracking-widest uppercase text-zinc-700 mb-1">Flagship</div>
          <div className="text-[8px] font-black text-zinc-900 mb-1">1:1 Personal Training</div>
          <div className="text-[5px] text-zinc-700 mb-2">Komplett individualisiert.</div>
          <div className="text-[6px] font-black text-zinc-800">ab 299 € / Mo</div>
        </div>
        <div className="bg-zinc-900 border border-zinc-800 p-3">
          <div className="text-[5px] font-black tracking-widest uppercase text-lime-400 mb-1">Online</div>
          <div className="text-[8px] font-black text-white mb-1">Online Coaching</div>
          <div className="text-[5px] text-zinc-500 mb-2">Flexibel, digital.</div>
          <div className="text-[6px] font-black text-lime-400">ab 149 € / Mo</div>
        </div>
      </div>
    </div>
  );
}

function FinanzPreview() {
  return (
    <div className="bg-white w-full h-full p-4 font-sans">
      <div className="flex items-center justify-between mb-3 border-b border-zinc-100 pb-3">
        <div className="flex items-center gap-1.5">
          <div className="w-5 h-5 rounded bg-[#0f2044] flex items-center justify-center">
            <span className="text-white font-bold text-[6px]">MF</span>
          </div>
          <div>
            <div className="text-[7px] font-bold text-zinc-800 leading-none">Müller Finanzberatung</div>
            <div className="text-[5px] text-zinc-400">Unabhängig seit 2005</div>
          </div>
        </div>
        <div className="flex gap-2 text-[6px] text-zinc-500">
          <span>Leistungen</span><span>Philosophie</span>
        </div>
        <div className="bg-[#0f2044] text-white text-[6px] px-2 py-1 rounded">Erstberatung</div>
      </div>
      <div className="bg-[#0f2044] p-4 mb-3">
        <div className="flex items-center gap-1 mb-2 border border-blue-700 rounded-full px-2 py-1 w-fit">
          <div className="w-1 h-1 rounded-full bg-blue-400" />
          <div className="text-[5px] tracking-widest uppercase text-blue-300">Köln · Unabhängig</div>
        </div>
        <div className="text-[11px] font-bold text-white leading-tight mb-2">Ihre Finanzen.<br/><span className="text-blue-400">Ihre Entscheidung.</span></div>
        <div className="text-[6px] text-blue-300 mb-3">Unabhängige Beratung ohne Provisionsinteressen.</div>
        <div className="flex gap-2">
          <div className="bg-blue-500 text-white text-[6px] px-3 py-1.5 rounded font-semibold">Erstberatung</div>
          <div className="border border-blue-700 text-blue-300 text-[6px] px-3 py-1.5 rounded">Leistungen</div>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-1 mb-3">
        {[["20 J.", "Erfahrung", "Seit 2005"], ["98%", "Weiterempfehlung", "2025"], ["350+", "Kunden", "Privat & Firma"], ["Unabh.", "Beratung", "Keine Provision"]].map(([v, l, s]) => (
          <div key={l} className="bg-[#162d55] p-2 rounded">
            <div className="text-[8px] font-bold text-white">{v}</div>
            <div className="text-[5px] text-blue-300 font-semibold">{l}</div>
            <div className="text-[5px] text-blue-600">{s}</div>
          </div>
        ))}
      </div>
      <div className="grid grid-cols-3 gap-1">
        {["Altersvorsorge", "Vermögensaufbau", "Absicherung"].map(s => (
          <div key={s} className="border border-zinc-100 p-2 rounded hover:border-blue-200">
            <div className="text-[6px] font-bold text-zinc-800 mb-1">{s}</div>
            <div className="text-[5px] text-zinc-400">Individuelle Beratung.</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function CoachingPreview() {
  return (
    <div className="bg-[#fafaf7] w-full h-full p-4 font-sans">
      <div className="flex items-center justify-between mb-3 border-b border-zinc-200/60 pb-3">
        <div className="text-[8px] font-semibold text-zinc-800">Sarah Weber<span className="text-emerald-500"> Coaching</span></div>
        <div className="flex gap-3 text-[6px] text-zinc-500">
          <span>Angebote</span><span>Über mich</span><span>Stimmen</span>
        </div>
        <div className="bg-emerald-600 text-white text-[6px] px-2 py-1 rounded-full font-semibold">Erstgespräch</div>
      </div>
      <div className="text-center mb-4">
        <div className="inline-flex items-center gap-1 bg-emerald-50 border border-emerald-200 rounded-full px-2 py-1 mb-3">
          <div className="w-1 h-1 rounded-full bg-emerald-400" />
          <div className="text-[5px] tracking-widest uppercase text-emerald-600">Business Coach · Berlin</div>
        </div>
        <div className="text-[13px] font-semibold tracking-tight leading-tight text-zinc-900 mb-2">Wachstum beginnt mit<br/><span className="text-emerald-500">Klarheit.</span></div>
        <div className="text-[6px] text-zinc-500 leading-relaxed mb-3 max-w-[160px] mx-auto">Ich begleite Unternehmerinnen dabei, das nächste Kapitel zu gestalten.</div>
        <div className="flex gap-2 justify-center">
          <div className="bg-emerald-600 text-white text-[6px] px-3 py-1.5 rounded-full font-semibold">Kostenloses Gespräch</div>
          <div className="border border-zinc-300 text-zinc-600 text-[6px] px-3 py-1.5 rounded-full">Mehr erfahren</div>
        </div>
      </div>
      <div className="bg-emerald-600 p-3 text-center mb-3 rounded-lg">
        <div className="text-[7px] font-semibold text-white italic">"Nicht mehr Arbeit. Richtige Arbeit."</div>
        <div className="text-[5px] text-emerald-200 mt-1">Das ist der Unterschied, den Coaching macht.</div>
      </div>
      <div className="grid grid-cols-3 gap-1">
        {[
          { title: "1:1 Coaching", tag: "Individuell", price: "ab 350 €" },
          { title: "VIP-Tag", tag: "Intensiv", price: "ab 1.800 €", hot: true },
          { title: "Gruppe", tag: "Community", price: "ab 490 €" },
        ].map(a => (
          <div key={a.title} className={`p-2 rounded-xl border ${a.hot ? 'bg-emerald-600 border-emerald-600' : 'border-zinc-100 bg-white'}`}>
            <div className={`text-[5px] font-bold tracking-widest uppercase mb-1 ${a.hot ? 'text-emerald-200' : 'text-emerald-500'}`}>{a.tag}</div>
            <div className={`text-[6px] font-semibold mb-1 ${a.hot ? 'text-white' : 'text-zinc-800'}`}>{a.title}</div>
            <div className={`text-[5px] font-semibold ${a.hot ? 'text-emerald-100' : 'text-zinc-600'}`}>{a.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ─── Portfolio Card ────────────────────────────────────────────────────────────

interface CardProps {
  tag: string;
  title: string;
  description: string;
  features: string[];
  demoHref: string;
  preview: ReactNode;
}

function PortfolioCard({ tag, title, description, features, demoHref, preview }: CardProps) {
  return (
    <article className="group flex flex-col rounded-2xl border border-zinc-200 bg-white overflow-hidden hover:shadow-2xl hover:shadow-zinc-200/70 hover:-translate-y-1.5 transition-all duration-300">
      {/* Preview – klickbar */}
      <Link href={demoHref} className="block relative overflow-hidden cursor-pointer" style={{ height: 260 }}>
        <div className="absolute inset-0 scale-[1.0] origin-top-left" style={{ width: "200%", height: "200%", transform: "scale(0.5)", transformOrigin: "top left" }}>
          {preview}
        </div>
        {/* Hover overlay */}
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-all duration-300 flex items-center justify-center">
          <span className="opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 bg-white text-zinc-900 text-xs font-semibold px-5 py-2.5 rounded-full shadow-xl">
            Demo öffnen →
          </span>
        </div>
      </Link>

      {/* Card text */}
      <div className="flex flex-col flex-1 p-6">
        <span className="inline-block text-[10px] font-semibold tracking-[0.18em] uppercase text-zinc-400 mb-3">{tag}</span>
        <h3 className="text-lg font-semibold text-zinc-900 mb-2 leading-snug">{title}</h3>
        <p className="text-[13px] text-zinc-500 leading-relaxed mb-5">{description}</p>
        <div className="flex flex-wrap gap-1.5 mb-6">
          {features.map(f => (
            <span key={f} className="text-[11px] font-medium text-zinc-500 border border-zinc-200 bg-zinc-50 px-2.5 py-1 rounded-full">{f}</span>
          ))}
        </div>
        <div className="mt-auto flex gap-2">
          <Link href={demoHref} className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-white bg-zinc-900 px-5 py-2.5 rounded-full hover:bg-zinc-700 active:scale-[0.98] transition-all duration-200">
            Demo ansehen →
          </Link>
          <a href="mailto:lokaltexte.service@gmail.com" className="inline-flex items-center gap-1.5 text-[13px] font-medium text-zinc-600 border border-zinc-200 px-5 py-2.5 rounded-full hover:border-zinc-400 hover:text-zinc-900 active:scale-[0.98] transition-all duration-200">
            Anfragen
          </a>
        </div>
      </div>
    </article>
  );
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const items: CardProps[] = [
  {
    tag: "Wellness",
    title: "Massage & Wellness",
    description: "Elegantes, minimalistisches Design mit japanisch-inspirierter Ästhetik. Viel Weißraum, premium Typografie, klare Struktur.",
    features: ["Zen-Design", "Leistungsübersicht", "Terminbuchung", "Testimonials"],
    demoHref: "/demo/massage",
    preview: <MassagePreview />,
  },
  {
    tag: "Beauty",
    title: "Beauty Studio",
    description: "Dunkles, editoriales Fashion-Magazine-Design. Dramatisch, selbstbewusst, unvergesslich.",
    features: ["Dark Mode", "Galerie", "Team-Vorstellung", "Service-Grid"],
    demoHref: "/demo/beauty",
    preview: <BeautyPreview />,
  },
  {
    tag: "Handwerk",
    title: "Handwerk & Bau",
    description: "Klares, starkes Auftreten mit Referenzprojekten und Anfrage-Formular. Vertrauen auf den ersten Blick.",
    features: ["Referenzen", "Leistungen", "Anfrage-Formular", "Statistiken"],
    demoHref: "/demo/handwerk",
    preview: <HandwerkPreview />,
  },
  {
    tag: "Fitness",
    title: "Fitness & Personal Training",
    description: "Bold, dunkel, energetisch. Starke Headlines, klare Pakete, direkter CTA der konvertiert.",
    features: ["Dark Mode", "Preistabelle", "Trainer-Profil", "Ergebnisse"],
    demoHref: "/demo/fitness",
    preview: <FitnessPreview />,
  },
  {
    tag: "Finanzen",
    title: "Finanzberatung",
    description: "Seriöses, vertrauensaufbauendes Design in Navy. Zertifikate, Transparenz und klare Erstberatung.",
    features: ["Vertrauen", "Zertifikate", "Navy-Design", "Erstberatung"],
    demoHref: "/demo/finanzberatung",
    preview: <FinanzPreview />,
  },
  {
    tag: "Coaching",
    title: "Coaching",
    description: "Persönlich, warm, einladend. Emerald-Akzente, Testimonials und ein klarer Weg zur ersten Session.",
    features: ["Persönlich", "Testimonials", "Pakete", "Erstgespräch"],
    demoHref: "/demo/coaching",
    preview: <CoachingPreview />,
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
            {["Leistungen","Referenzen","Prozess","Preise"].map(item => (
              <Link key={item} href={`/#${item.toLowerCase()}`} className="hover:text-zinc-900 transition-colors duration-150">{item}</Link>
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
              Design-Beispiele{" "}<span className="text-zinc-400">für verschiedene Branchen</span>
            </h1>
            <div>
              <p className="text-lg text-zinc-500 leading-relaxed mb-6">
                Klick auf eine Karte und erlebe die Demo-Website live. Jede ist
                individuell gestaltet und zeigt was für deine Branche möglich ist.
              </p>
              <div className="flex flex-wrap gap-2">
                {["Klickbar & scrollbar", "Jede Branche anders", "Production-ready Code", "2–3 Wochen Lieferzeit"].map(pill => (
                  <span key={pill} className="inline-flex items-center gap-1.5 text-[12px] font-medium text-zinc-600 bg-zinc-50 border border-zinc-200 px-3 py-1.5 rounded-full">
                    <span className="text-emerald-500 text-[10px]">✓</span>{pill}
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
            {items.map(item => <PortfolioCard key={item.title} {...item} />)}
          </div>
        </div>
      </section>

      {/* NOTE */}
      <section className="py-16 px-6 bg-white border-y border-zinc-100">
        <div className="max-w-6xl mx-auto grid md:grid-cols-3 gap-8">
          {[
            { icon: "◻", title: "Kein Template", desc: "Jede Website entsteht individuell, angepasst an dein Angebot und deine Zielgruppe." },
            { icon: "◈", title: "Klickbare Demos", desc: "Scroll durch jede Demo-Seite und erlebe das Design live, nicht nur als Screenshot." },
            { icon: "◎", title: "2–3 Wochen", desc: "Von der Analyse bis zum Launch. Kein monatelanger Prozess." },
          ].map(item => (
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
              <Link href="/#kontakt" className="inline-flex items-center gap-2 bg-white text-zinc-900 text-sm font-semibold px-8 py-4 rounded-full hover:bg-zinc-100 active:scale-[0.98] transition-all duration-200 shadow-sm">
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
          <Link href="/" className="text-base font-semibold text-zinc-900 tracking-tight">Nico<span className="text-zinc-400">Studio</span></Link>
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