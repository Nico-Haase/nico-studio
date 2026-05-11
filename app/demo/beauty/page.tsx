import Link from "next/link";

export const metadata = {
  title: "NOIR Beauty Studio – Demo | Nico Studio",
};

export default function BeautyDemo() {
  return (
    <main className="bg-[#080808] text-white antialiased">

      {/* Demo Banner */}
      <div className="bg-white text-zinc-900 text-center py-2.5 px-4 text-[11px] tracking-[0.15em]">
        <span className="text-zinc-500">Demo von</span>{" "}
        <Link href="/" className="font-semibold hover:text-zinc-600 transition-colors">Nico Studio</Link>
        <span className="text-zinc-300 mx-3">·</span>
        <Link href="/#kontakt" className="text-rose-500 font-semibold hover:text-rose-600 transition-colors">Eigene Website anfragen →</Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-50 bg-[#080808]/95 backdrop-blur-xl border-b border-zinc-900">
        <div className="max-w-7xl mx-auto px-8 h-18 flex items-center justify-between py-4">
          <div>
            <p className="text-[22px] font-black tracking-tighter text-white">NOIR<span className="text-rose-500">.</span></p>
            <p className="text-[8px] tracking-[0.35em] uppercase text-zinc-600 -mt-0.5">Beauty Studio Hamburg</p>
          </div>
          <div className="hidden md:flex items-center gap-10">
            {["Studio", "Services", "Galerie", "Preise", "Team"].map(item => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-[11px] tracking-[0.15em] uppercase text-zinc-500 hover:text-white transition-colors">{item}</a>
            ))}
          </div>
          <a href="#buchen" className="bg-rose-500 text-white text-[11px] tracking-[0.15em] uppercase px-7 py-3 font-bold hover:bg-rose-600 transition-colors">
            Jetzt buchen
          </a>
        </div>
      </nav>

      {/* Hero */}
      <section className="min-h-screen grid md:grid-cols-[1.2fr_1fr]">
        <div className="flex flex-col justify-center px-12 md:px-20 py-24">
          <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-10">Hamburg Eppendorf · Premium Beauty</p>
          <h1 className="text-[72px] md:text-[96px] font-black tracking-tighter leading-[0.88] mb-10">
            BEAUTY<br />
            <span className="text-rose-500">RE</span>DEFINED<br />
            <span className="text-zinc-700">FOR YOU.</span>
          </h1>
          <p className="text-zinc-400 text-[17px] leading-[1.8] mb-14 max-w-[380px]">
            Kein Studio von der Stange. Kein Standard-Look. Jede Behandlung ist Handwerk, jedes Ergebnis ein Statement, das zu dir passt.
          </p>
          <div className="flex gap-4 flex-wrap">
            <a href="#buchen" className="bg-white text-black text-[11px] tracking-[0.2em] uppercase px-10 py-4 font-black hover:bg-zinc-200 transition-colors">
              Termin buchen
            </a>
            <a href="#services" className="border border-zinc-800 text-zinc-400 text-[11px] tracking-[0.2em] uppercase px-10 py-4 hover:border-zinc-600 hover:text-white transition-colors">
              Services entdecken
            </a>
          </div>
          <div className="flex gap-10 mt-16 pt-10 border-t border-zinc-900">
            {[["500+", "Kunden"], ["6 J.", "Expertise"], ["4.9★", "Google Rating"]].map(([v, l]) => (
              <div key={l}>
                <p className="text-[28px] font-black text-white tracking-tight">{v}</p>
                <p className="text-[10px] tracking-[0.2em] uppercase text-zinc-600 mt-1">{l}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-zinc-900 relative min-h-[60vh] md:min-h-0 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-rose-950/30 via-transparent to-zinc-950/50" />
          <div className="absolute bottom-10 right-10 flex flex-col gap-2">
            {["Nail Art", "Lash Extensions", "Brow Styling", "Make-up"].map(tag => (
              <span key={tag} className="text-[10px] tracking-[0.2em] uppercase bg-rose-500/15 border border-rose-500/30 text-rose-300 px-4 py-2 text-right">{tag}</span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-28 px-8 md:px-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-end justify-between mb-20">
            <div>
              <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-5">Was wir tun</p>
              <h2 className="text-[56px] font-black tracking-tighter">SERVICES</h2>
            </div>
            <p className="text-zinc-600 text-sm max-w-xs text-right leading-relaxed hidden md:block">Alle Behandlungen auf Termin. Persönliche Beratung inklusive.</p>
          </div>
          <div className="grid md:grid-cols-2 gap-px bg-zinc-900">
            {[
              {
                cat: "NAILS",
                title: "Nail Art & Extensions",
                desc: "Von klassisch French bis avantgardistischem 3D-Design. Gel, Acryl, Polygel. Jedes Set hält mindestens 4 Wochen und wird auf deine Nagelform abgestimmt.",
                price: "ab 55 €",
                items: ["Gelnägel Vollset", "Nail Art & Design", "Shellac & Gel Polish", "Auffüllen & Reparatur", "Gel French", "Nageldesign nach Wunsch"],
                featured: true,
              },
              {
                cat: "LASHES",
                title: "Lash Extensions",
                desc: "Classic, Volume oder Mega Volume. Wir arbeiten ausschließlich mit hochwertigen Seidenwimpern und medizinischem Kleber. Natürlich oder dramatisch.",
                price: "ab 99 €",
                items: ["Classic Full Set", "Volume Full Set", "Mega Volume", "Lash Lifting & Tinting", "Keratin Treatment", "Nachfüllen"],
              },
              {
                cat: "BROWS",
                title: "Brow Styling & Design",
                desc: "Perfekt geformte Brauen definieren das ganze Gesicht. Wir analysieren deine Gesichtsform und erstellen das für dich passende Brow-Design.",
                price: "ab 40 €",
                items: ["Brow Lamination", "Henna Brows", "Waxing & Fadenepilation", "Brow Tinting", "Microblading Beratung"],
              },
              {
                cat: "MAKE-UP",
                title: "Professional Make-up",
                desc: "Für Hochzeit, Event oder ein unvergessliches Shooting. Wir arbeiten mit professionellen Produkten und Airbrush-Technik für makellose, lang anhaltende Ergebnisse.",
                price: "ab 75 €",
                items: ["Braut Make-up", "Event & Party Styling", "Airbrush Make-up", "Editorial & Shooting Look", "Make-up Kurs 1:1"],
                featured: true,
              },
            ].map(s => (
              <div key={s.title} className={`group p-12 ${s.featured ? 'bg-zinc-900/60' : 'bg-[#080808]'} hover:bg-zinc-900/80 transition-colors`}>
                <p className="text-[10px] tracking-[0.4em] uppercase text-rose-500 mb-5">{s.cat}</p>
                <div className="flex justify-between items-start mb-5">
                  <h3 className="text-[26px] font-black tracking-tight leading-tight">{s.title}</h3>
                  <span className="text-rose-400 font-bold text-[15px] shrink-0 ml-4 mt-1">{s.price}</span>
                </div>
                <p className="text-zinc-500 text-[14px] leading-[1.8] mb-8">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map(d => (
                    <span key={d} className="text-[10px] tracking-wide border border-zinc-800 text-zinc-500 px-3 py-1.5 group-hover:border-zinc-700 transition-colors">{d}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Galerie */}
      <section id="galerie" className="py-28 px-8 md:px-16 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-5 text-center">Portfolio</p>
          <h2 className="text-[56px] font-black tracking-tighter mb-20 text-center">UNSERE ARBEITEN</h2>
          <div className="grid grid-cols-3 md:grid-cols-6 gap-1">
            {[
              { cls: "col-span-2 row-span-2", bg: "bg-zinc-800" },
              { cls: "col-span-1", bg: "bg-zinc-900" },
              { cls: "col-span-1", bg: "bg-rose-950/60" },
              { cls: "col-span-1", bg: "bg-zinc-800" },
              { cls: "col-span-1", bg: "bg-zinc-900" },
              { cls: "col-span-2", bg: "bg-rose-950/40" },
              { cls: "col-span-1", bg: "bg-zinc-800" },
              { cls: "col-span-1", bg: "bg-zinc-900" },
            ].map((item, i) => (
              <div key={i} className={`${item.cls} ${item.bg} aspect-square hover:opacity-75 transition-opacity cursor-pointer relative group overflow-hidden`}>
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section id="team" className="py-28 px-8 md:px-16 bg-[#080808]">
        <div className="max-w-7xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-5">Das Team</p>
          <h2 className="text-[56px] font-black tracking-tighter mb-20">UNSER TEAM</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "Lena M.", role: "Nail Artist · Senior", years: "6 Jahre", spec: "Nail Art, Gel Extensions, 3D Designs" },
              { name: "Sophie K.", role: "Lash & Brow Expert", years: "4 Jahre", spec: "Classic & Volume Lashes, Lamination" },
              { name: "Anna R.", role: "Make-up Artist", years: "5 Jahre", spec: "Bridal, Editorial, Airbrush" },
            ].map(p => (
              <div key={p.name} className="group">
                <div className="aspect-[3/4] bg-zinc-900 mb-6 relative overflow-hidden">
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent" />
                  <div className="absolute bottom-6 left-6 right-6">
                    <div className="h-0.5 w-8 bg-rose-500 mb-4 group-hover:w-16 transition-all duration-300" />
                  </div>
                </div>
                <p className="text-[20px] font-black tracking-tight">{p.name}</p>
                <p className="text-zinc-500 text-[11px] tracking-[0.15em] uppercase mt-1">{p.role}</p>
                <p className="text-zinc-700 text-[11px] mt-1">{p.years} Erfahrung</p>
                <p className="text-zinc-600 text-[12px] mt-2 leading-relaxed">{p.spec}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Preise */}
      <section id="preise" className="py-28 px-8 md:px-16 bg-zinc-950">
        <div className="max-w-4xl mx-auto">
          <p className="text-[10px] tracking-[0.4em] uppercase text-zinc-600 mb-5 text-center">Investition</p>
          <h2 className="text-[56px] font-black tracking-tighter mb-20 text-center">PREISE</h2>
          <div className="divide-y divide-zinc-900">
            {[
              { cat: "Nails", items: [["Gelnägel Vollset", "ab 55 €"], ["Nail Art & Design", "ab 65 €"], ["Shellac", "ab 35 €"], ["Auffüllen", "ab 40 €"]] },
              { cat: "Lashes", items: [["Classic Full Set", "ab 99 €"], ["Volume Full Set", "ab 129 €"], ["Mega Volume", "ab 149 €"], ["Nachfüllen", "ab 65 €"]] },
              { cat: "Brows", items: [["Brow Lamination", "ab 55 €"], ["Henna Brows", "ab 45 €"], ["Waxing & Faden", "ab 20 €"]] },
              { cat: "Make-up", items: [["Braut Make-up", "ab 149 €"], ["Event Styling", "ab 75 €"], ["Airbrush", "ab 95 €"]] },
            ].map(cat => (
              <div key={cat.cat} className="py-8">
                <p className="text-[10px] tracking-[0.4em] uppercase text-rose-500 mb-5">{cat.cat}</p>
                <div className="space-y-3">
                  {cat.items.map(([name, price]) => (
                    <div key={name} className="flex justify-between items-center hover:pl-2 transition-all">
                      <p className="text-zinc-300 text-[15px]">{name}</p>
                      <p className="text-[15px] font-bold text-white">{price}</p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-28 px-8 md:px-16 bg-[#080808] border-y border-zinc-900">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { name: "LAURA M.", text: "Meine Nails von Lena sind jedes Mal ein Kunstwerk. Nie zuvor habe ich Gelnägel gesehen, die so natürlich und gleichzeitig so auffällig sind. Absolute Top-Qualität.", stars: 5 },
              { name: "SOPHIE T.", text: "Die Lash Extensions sind unglaublich. So natural, dass mein Freund drei Wochen lang dachte, das wären meine eigenen Wimpern. Hält wirklich die versprochenen 6 Wochen.", stars: 5 },
              { name: "ANNA K.", text: "Für meine Hochzeit wollte ich perfektes Make-up. Anna hat nicht nur meine Erwartungen erfüllt, sie hat sie übertroffen. 14 Stunden Halt, traumhaftes Ergebnis, tolle Beratung.", stars: 5 },
            ].map(t => (
              <div key={t.name} className="p-10 border border-zinc-900 hover:border-zinc-700 transition-colors">
                <div className="flex gap-1 mb-8">
                  {[...Array(t.stars)].map((_, i) => <span key={i} className="text-rose-500 text-lg">★</span>)}
                </div>
                <p className="text-zinc-300 text-[15px] leading-[1.85] mb-8 font-light">"{t.text}"</p>
                <p className="text-[10px] tracking-[0.3em] text-zinc-600">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking CTA */}
      <section id="buchen" className="py-28 px-8 bg-rose-500">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-[64px] font-black tracking-tighter text-white mb-6 leading-tight">READY FOR<br />YOUR GLOW-UP?</h2>
          <p className="text-rose-100 text-[18px] leading-relaxed mb-14">Sichere dir jetzt deinen Termin. Online, sofort, ohne Wartezeit.</p>
          <a href="mailto:info@noir-beauty.de" className="inline-block bg-white text-rose-600 text-[11px] tracking-[0.3em] uppercase font-black px-14 py-5 hover:bg-rose-50 transition-colors">
            Termin anfragen
          </a>
          <p className="text-rose-200 text-[11px] tracking-[0.2em] mt-10 uppercase">Di–Sa 10–20 Uhr · Hamburg Eppendorf</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#030303] py-12 px-8 border-t border-zinc-900">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6 text-[11px] text-zinc-800">
          <p className="font-black tracking-tight text-zinc-600 text-[16px]">NOIR<span className="text-rose-500">.</span></p>
          <div className="flex gap-8 text-zinc-700">
            <a href="#" className="hover:text-zinc-400 transition-colors">Impressum</a>
            <a href="#" className="hover:text-zinc-400 transition-colors">Datenschutz</a>
            <a href="#buchen" className="hover:text-zinc-400 transition-colors">Kontakt</a>
          </div>
          <div className="text-right">
            <p className="text-zinc-700">Demo von <Link href="/" className="text-zinc-600 hover:text-white transition-colors">Nico Studio</Link></p>
            <p className="text-zinc-800 mt-0.5">© 2026 NOIR Beauty Studio</p>
          </div>
        </div>
      </footer>
    </main>
  );
}