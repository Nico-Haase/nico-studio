import Link from "next/link";

export const metadata = {
  title: "Lumière Beauty Studio – Demo | Nico Studio",
  description: "Demo-Website für ein Beauty Studio – erstellt von Nico Studio.",
};

export default function BeautyDemo() {
  return (
    <main className="bg-white text-zinc-900 antialiased">

      {/* Demo Banner */}
      <div className="bg-zinc-900 text-white text-center py-2.5 px-4 text-[12px] tracking-wide">
        <span className="text-zinc-400">Demo-Website von</span>{" "}
        <Link href="/" className="font-semibold text-white hover:text-zinc-300 transition-colors">
          Nico Studio
        </Link>
        <span className="text-zinc-400 mx-3">·</span>
        <Link href="/#kontakt" className="text-rose-400 hover:text-rose-300 transition-colors font-medium">
          Eigene Website anfragen →
        </Link>
      </div>

      {/* Nav */}
      <nav className="sticky top-0 z-40 bg-white/90 backdrop-blur-md border-b border-zinc-100">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <span className="text-lg font-semibold tracking-tight">
            Lumière<span className="text-rose-400"> Studio</span>
          </span>
          <div className="hidden md:flex items-center gap-8 text-sm text-zinc-500">
            {["Leistungen", "Galerie", "Preise", "Kontakt"].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`}
                className="hover:text-zinc-900 transition-colors">
                {item}
              </a>
            ))}
          </div>
          <a href="#termin"
            className="bg-rose-500 text-white text-sm px-5 py-2.5 rounded-full hover:bg-rose-600 transition-colors">
            Termin buchen
          </a>
        </div>
      </nav>

      {/* Hero – editorial split */}
      <section className="grid md:grid-cols-2 min-h-[90vh]">
        {/* Left – image */}
        <div className="bg-rose-50 relative flex items-center justify-center p-12 min-h-[50vh] md:min-h-0">
          <div className="w-full max-w-sm aspect-[3/4] rounded-3xl bg-rose-100 relative">
            <div className="absolute -bottom-6 -right-6 bg-white border border-zinc-100 shadow-xl rounded-2xl p-5">
              <p className="text-2xl font-bold text-zinc-900">500+</p>
              <p className="text-xs text-zinc-500 mt-0.5">glückliche Kundinnen</p>
            </div>
          </div>
        </div>
        {/* Right – text */}
        <div className="flex flex-col justify-center px-10 md:px-16 py-16">
          <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-rose-400 block mb-6">
            Beauty Studio · Hamburg
          </span>
          <h1 className="text-5xl md:text-6xl font-bold tracking-tight leading-[1.04] mb-6">
            Schönheit,<br />
            <span className="text-zinc-300">die bleibt.</span>
          </h1>
          <p className="text-zinc-500 text-lg leading-relaxed mb-10 max-w-md">
            Premium Beauty-Treatments für jeden Anlass. Von Nails über Lashes
            bis zum kompletten Glow-up.
          </p>
          <div className="flex flex-wrap gap-3">
            <a href="#termin"
              className="inline-flex items-center justify-center bg-zinc-900 text-white px-8 py-4 rounded-full text-sm font-semibold hover:bg-zinc-700 transition-colors">
              Termin buchen
            </a>
            <a href="#galerie"
              className="inline-flex items-center justify-center border border-zinc-200 text-zinc-600 px-8 py-4 rounded-full text-sm font-semibold hover:border-zinc-400 transition-colors">
              Galerie ansehen
            </a>
          </div>
          {/* Trust pills */}
          <div className="flex flex-wrap gap-2 mt-10">
            {["Nail Art", "Lash Extensions", "Brow Styling", "Make-up"].map((tag) => (
              <span key={tag} className="text-xs font-medium border border-rose-200 bg-rose-50 text-rose-600 px-3 py-1.5 rounded-full">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="leistungen" className="py-24 px-6 bg-zinc-50">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-14 gap-6">
            <div>
              <span className="text-[11px] font-bold tracking-[0.2em] uppercase text-rose-400 block mb-4">
                Leistungen
              </span>
              <h2 className="text-4xl font-bold tracking-tight">Unsere Spezialitäten</h2>
            </div>
            <a href="#termin" className="text-sm font-semibold text-zinc-500 hover:text-zinc-900 transition-colors">
              Alle Leistungen anfragen →
            </a>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              {
                cat: "Nails",
                title: "Nail Art & Gelnägel",
                desc: "Von klassisch bis extravagant. Perfekte Nägel, die halten.",
                price: "ab 45 €",
                items: ["Gelnägel", "Nageldesign", "Shellac", "Auffüllen"],
              },
              {
                cat: "Lashes",
                title: "Lash Extensions",
                desc: "Natürlich oder dramatisch. Wimpern, die begeistern.",
                price: "ab 89 €",
                items: ["Classic", "Volume", "Mega Volume", "Lifting"],
              },
              {
                cat: "Brows",
                title: "Brow Styling",
                desc: "Perfekt geformte Brauen, die das Gesicht rahmen.",
                price: "ab 35 €",
                items: ["Zupfen", "Waxing", "Lamination", "Henna"],
              },
              {
                cat: "Make-up",
                title: "Make-up & Styling",
                desc: "Für jeden Anlass. Von natürlich bis dramatisch.",
                price: "ab 65 €",
                items: ["Braut Make-up", "Event Styling", "Airbrush", "Tutorial"],
              },
            ].map((s) => (
              <div key={s.title}
                className="group p-8 rounded-3xl bg-white border border-zinc-100 hover:border-rose-200 hover:shadow-xl hover:shadow-rose-50 transition-all duration-300">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-rose-400 block mb-3">
                  {s.cat}
                </span>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-zinc-900">{s.title}</h3>
                  <span className="text-sm font-semibold text-rose-500">{s.price}</span>
                </div>
                <p className="text-zinc-500 text-sm leading-relaxed mb-5">{s.desc}</p>
                <div className="flex flex-wrap gap-2">
                  {s.items.map((item) => (
                    <span key={item}
                      className="text-[11px] text-zinc-500 border border-zinc-200 px-2.5 py-1 rounded-full">
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section id="galerie" className="py-24 px-6 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-14 text-center">Unsere Arbeiten</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "aspect-square", "aspect-[3/4]", "aspect-square", "aspect-[4/3]",
              "aspect-[4/3]", "aspect-square", "aspect-[3/4]", "aspect-square",
            ].map((aspect, i) => (
              <div key={i}
                className={`${aspect} rounded-2xl overflow-hidden ${
                  i % 3 === 0 ? "bg-rose-100" : i % 3 === 1 ? "bg-rose-50" : "bg-zinc-100"
                } hover:scale-[0.98] transition-transform duration-300 cursor-pointer`}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 px-6 bg-zinc-900 text-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight mb-14 text-center">
            Kundenstimmen
          </h2>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Laura M.", text: "Die besten Nails, die ich je hatte. Halten ewig und sehen traumhaft aus.", stars: 5 },
              { name: "Sophie T.", text: "Lash Extensions so natürlich, dass alle fragen ob es meine eigenen sind.", stars: 5 },
              { name: "Anna K.", text: "Braut Make-up war perfekt. Hat den ganzen Tag gehalten. Absolut empfehlenswert!", stars: 5 },
            ].map((t) => (
              <div key={t.name} className="p-7 rounded-2xl border border-zinc-700">
                <div className="flex gap-0.5 mb-4">
                  {[...Array(t.stars)].map((_, i) => (
                    <svg key={i} className="w-4 h-4 text-rose-400 fill-current" viewBox="0 0 20 20">
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/>
                    </svg>
                  ))}
                </div>
                <p className="text-zinc-300 text-sm leading-relaxed mb-4">"{t.text}"</p>
                <p className="font-semibold text-sm text-white">{t.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Booking */}
      <section id="termin" className="py-24 px-6 bg-rose-500">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-white mb-5">
            Bereit für deinen Glow-up?
          </h2>
          <p className="text-rose-100 mb-10 leading-relaxed">
            Sichere dir jetzt deinen Wunschtermin. Online, schnell und unkompliziert.
          </p>
          <a href="mailto:info@lumiere-studio.de"
            className="inline-flex items-center gap-2 bg-white text-rose-600 px-8 py-4 rounded-full text-sm font-bold hover:bg-rose-50 transition-colors shadow-lg">
            Termin anfragen
          </a>
          <p className="text-rose-200 text-xs mt-5">Di–Sa 10–19 Uhr · Sonntags nach Vereinbarung</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-zinc-900 py-10 px-6">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <span className="font-semibold text-zinc-300">Lumière Beauty Studio · Hamburg</span>
          <span>Demo-Website von{" "}
            <Link href="/" className="text-zinc-300 hover:text-white transition-colors">Nico Studio</Link>
          </span>
          <span>© 2026 Lumière Studio</span>
        </div>
      </footer>
    </main>
  );
}