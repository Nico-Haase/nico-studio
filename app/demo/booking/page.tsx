"use client";

import { useState } from "react";
import Link from "next/link";

const SERVICES = [
  { name: "Klassische Massage", duration: "60 Min.", price: "75 €", desc: "Ganzkörperentspannung" },
  { name: "Hot Stone Massage", duration: "90 Min.", price: "115 €", desc: "Mit Basaltsteinen" },
  { name: "Aromatherapie", duration: "75 Min.", price: "95 €", desc: "Ätherische Öle" },
  { name: "Rücken & Nacken", duration: "45 Min.", price: "60 €", desc: "Fokus Problemzonen" },
];

const TIMES = ["09:00", "10:00", "11:00", "12:00", "13:00", "14:00", "15:00", "16:00", "17:00", "18:00"];
const BOOKED = ["10:00", "13:00", "15:00"];
const DAYS = ["Mo", "Di", "Mi", "Do", "Fr", "Sa", "So"];

function getDaysInMonth(year: number, month: number) {
  return new Date(year, month + 1, 0).getDate();
}
function getFirstDay(year: number, month: number) {
  return (new Date(year, month, 1).getDay() + 6) % 7;
}

const MONTHS = ["Januar", "Februar", "März", "April", "Mai", "Juni", "Juli", "August", "September", "Oktober", "November", "Dezember"];

export default function BookingDemo() {
  const today = new Date();
  const [step, setStep] = useState(1);
  const [selectedService, setSelectedService] = useState<number | null>(null);
  const [selectedDay, setSelectedDay] = useState<number | null>(null);
  const [selectedTime, setSelectedTime] = useState<string | null>(null);
  const [month, setMonth] = useState(today.getMonth());
  const [year, setYear] = useState(today.getFullYear());
  const [form, setForm] = useState({ name: "", email: "", phone: "", note: "" });
  const [done, setDone] = useState(false);

  const daysInMonth = getDaysInMonth(year, month);
  const firstDay = getFirstDay(year, month);
  const totalCells = Math.ceil((firstDay + daysInMonth) / 7) * 7;

  const prevMonth = () => { if (month === 0) { setMonth(11); setYear(y => y - 1); } else setMonth(m => m - 1); setSelectedDay(null); };
  const nextMonth = () => { if (month === 11) { setMonth(0); setYear(y => y + 1); } else setMonth(m => m + 1); setSelectedDay(null); };

  const isPast = (day: number) => {
    const d = new Date(year, month, day);
    d.setHours(0,0,0,0);
    const t = new Date(); t.setHours(0,0,0,0);
    return d < t;
  };
  const isWeekend = (day: number) => {
    const dow = new Date(year, month, day).getDay();
    return dow === 0 || dow === 6;
  };

  if (done) return (
    <main className="min-h-screen bg-[#f7f4ef] flex items-center justify-center px-6">
      <div className="text-center max-w-md">
        <div className="w-20 h-20 rounded-full bg-emerald-100 border-4 border-emerald-200 flex items-center justify-center mx-auto mb-8">
          <span className="text-emerald-600 text-3xl">✓</span>
        </div>
        <h2 className="text-[36px] font-light tracking-tight text-zinc-900 mb-4">Buchung bestätigt!</h2>
        <p className="text-zinc-500 text-[16px] leading-relaxed mb-3">
          Danke, <strong>{form.name}</strong>. Dein Termin wurde erfolgreich gebucht.
        </p>
        <div className="bg-white rounded-2xl border border-zinc-100 p-6 my-8 text-left shadow-sm">
          <div className="space-y-3">
            <div className="flex justify-between text-sm"><span className="text-zinc-400">Behandlung</span><span className="font-medium text-zinc-900">{selectedService !== null ? SERVICES[selectedService].name : ""}</span></div>
            <div className="flex justify-between text-sm"><span className="text-zinc-400">Datum</span><span className="font-medium text-zinc-900">{selectedDay}. {MONTHS[month]} {year}</span></div>
            <div className="flex justify-between text-sm"><span className="text-zinc-400">Uhrzeit</span><span className="font-medium text-zinc-900">{selectedTime} Uhr</span></div>
            <div className="flex justify-between text-sm"><span className="text-zinc-400">Preis</span><span className="font-medium text-zinc-900">{selectedService !== null ? SERVICES[selectedService].price : ""}</span></div>
          </div>
        </div>
        <p className="text-zinc-400 text-sm mb-8">Eine Bestätigung wurde an <strong>{form.email}</strong> gesendet.</p>
        <button onClick={() => { setDone(false); setStep(1); setSelectedService(null); setSelectedDay(null); setSelectedTime(null); setForm({ name: "", email: "", phone: "", note: "" }); }}
          className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors underline underline-offset-4">
          Neuen Termin buchen
        </button>
      </div>
    </main>
  );

  return (
    <main className="min-h-screen bg-[#f7f4ef] antialiased">

      {/* Demo Banner */}
      <div className="bg-[#1a1714] text-white text-center py-2.5 px-4 text-[11px] tracking-[0.15em]">
        <span className="text-zinc-500">Demo Buchungssystem von</span>{" "}
        <Link href="/" className="font-semibold text-white hover:text-zinc-300 transition-colors">Nico Studio</Link>
        <span className="text-zinc-600 mx-3">·</span>
        <Link href="/#kontakt" className="text-emerald-400 font-medium hover:text-emerald-300 transition-colors">Für meine Website anfragen →</Link>
      </div>

      {/* Header */}
      <header className="bg-[#1a1714] pb-12 pt-8 px-6">
        <div className="max-w-3xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <p className="text-[20px] font-light tracking-[0.1em] text-white uppercase">Serenity</p>
              <p className="text-[9px] tracking-[0.35em] text-stone-500 uppercase">Wellness & Massage · München</p>
            </div>
            <a href="tel:+4989123456" className="text-stone-500 text-[12px] tracking-wide hover:text-stone-300 transition-colors">+49 89 123 456</a>
          </div>

          {/* Progress steps */}
          <div className="flex items-center gap-0">
            {["Behandlung", "Datum & Zeit", "Ihre Daten", "Bestätigung"].map((label, idx) => {
              const s = idx + 1;
              const active = step === s;
              const done = step > s;
              return (
                <div key={label} className="flex items-center flex-1 last:flex-none">
                  <div className="flex flex-col items-center">
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center text-[12px] font-bold transition-colors ${done ? 'bg-emerald-500 text-white' : active ? 'bg-white text-zinc-900' : 'bg-zinc-800 text-zinc-500'}`}>
                      {done ? "✓" : s}
                    </div>
                    <p className={`text-[10px] tracking-wide mt-1.5 ${active ? 'text-white' : done ? 'text-emerald-400' : 'text-zinc-600'}`}>{label}</p>
                  </div>
                  {idx < 3 && <div className={`h-px flex-1 mx-2 mb-4 ${done ? 'bg-emerald-500' : 'bg-zinc-800'}`} />}
                </div>
              );
            })}
          </div>
        </div>
      </header>

      <div className="max-w-3xl mx-auto px-6 py-12">

        {/* Step 1 – Service */}
        {step === 1 && (
          <div>
            <h2 className="text-[32px] font-light tracking-tight text-zinc-900 mb-2">Behandlung wählen</h2>
            <p className="text-zinc-400 mb-10">Welche Behandlung darf es sein?</p>
            <div className="grid gap-4">
              {SERVICES.map((s, idx) => (
                <button key={s.name} onClick={() => setSelectedService(idx)}
                  className={`w-full text-left p-6 rounded-2xl border-2 transition-all duration-200 ${selectedService === idx ? 'border-zinc-900 bg-white shadow-lg shadow-zinc-200/50' : 'border-zinc-200 bg-white hover:border-zinc-300'}`}>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-5">
                      <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center shrink-0 transition-colors ${selectedService === idx ? 'border-zinc-900 bg-zinc-900' : 'border-zinc-300'}`}>
                        {selectedService === idx && <span className="text-white text-[10px] font-bold">✓</span>}
                      </div>
                      <div>
                        <p className="font-semibold text-zinc-900 text-[16px]">{s.name}</p>
                        <p className="text-zinc-400 text-[13px] mt-0.5">{s.desc} · {s.duration}</p>
                      </div>
                    </div>
                    <span className="font-semibold text-zinc-900 text-[18px]">{s.price}</span>
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-8">
              <button onClick={() => selectedService !== null && setStep(2)}
                className={`w-full py-4 rounded-full text-[14px] font-semibold tracking-wide transition-all ${selectedService !== null ? 'bg-zinc-900 text-white hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'}`}>
                Weiter zum Datum →
              </button>
            </div>
          </div>
        )}

        {/* Step 2 – Date & Time */}
        {step === 2 && (
          <div>
            <h2 className="text-[32px] font-light tracking-tight text-zinc-900 mb-2">Datum & Uhrzeit</h2>
            <p className="text-zinc-400 mb-10">Wähle deinen Wunschtermin.</p>
            <div className="grid md:grid-cols-2 gap-6">
              {/* Calendar */}
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                <div className="flex items-center justify-between mb-6">
                  <button onClick={prevMonth} className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 transition-colors">‹</button>
                  <p className="font-semibold text-zinc-900 text-[15px]">{MONTHS[month]} {year}</p>
                  <button onClick={nextMonth} className="w-8 h-8 rounded-full hover:bg-zinc-100 flex items-center justify-center text-zinc-500 transition-colors">›</button>
                </div>
                <div className="grid grid-cols-7 gap-1 mb-2">
                  {DAYS.map(d => <p key={d} className="text-center text-[11px] font-medium text-zinc-400 py-1">{d}</p>)}
                </div>
                <div className="grid grid-cols-7 gap-1">
                  {Array.from({ length: totalCells }).map((_, i) => {
                    const day = i - firstDay + 1;
                    const valid = day >= 1 && day <= daysInMonth;
                    if (!valid) return <div key={i} />;
                    const past = isPast(day);
                    const weekend = isWeekend(day);
                    const disabled = past || weekend;
                    const selected = selectedDay === day;
                    return (
                      <button key={i} onClick={() => !disabled && setSelectedDay(day)} disabled={disabled}
                        className={`aspect-square rounded-xl text-[13px] font-medium transition-all ${selected ? 'bg-zinc-900 text-white' : disabled ? 'text-zinc-200 cursor-not-allowed' : 'hover:bg-zinc-100 text-zinc-700'}`}>
                        {day}
                      </button>
                    );
                  })}
                </div>
                <div className="mt-4 flex items-center gap-4 text-[11px] text-zinc-400">
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-zinc-900 inline-block" />Gewählt</span>
                  <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-zinc-100 inline-block" />Nicht verfügbar</span>
                </div>
              </div>

              {/* Times */}
              <div className="bg-white rounded-2xl border border-zinc-200 p-6 shadow-sm">
                <p className="font-semibold text-zinc-900 mb-5 text-[15px]">
                  {selectedDay ? `${selectedDay}. ${MONTHS[month]}` : "Bitte Datum wählen"}
                </p>
                {selectedDay ? (
                  <div className="grid grid-cols-2 gap-2">
                    {TIMES.map(time => {
                      const booked = BOOKED.includes(time);
                      const sel = selectedTime === time;
                      return (
                        <button key={time} onClick={() => !booked && setSelectedTime(time)} disabled={booked}
                          className={`py-3 rounded-xl text-[13px] font-medium transition-all ${sel ? 'bg-zinc-900 text-white' : booked ? 'bg-zinc-50 text-zinc-300 cursor-not-allowed line-through' : 'border border-zinc-200 text-zinc-700 hover:border-zinc-400 hover:bg-zinc-50'}`}>
                          {time}
                        </button>
                      );
                    })}
                  </div>
                ) : (
                  <div className="flex items-center justify-center h-48">
                    <p className="text-zinc-400 text-sm">Wähle zuerst ein Datum im Kalender</p>
                  </div>
                )}
                {selectedDay && (
                  <div className="mt-4 flex gap-4 text-[11px] text-zinc-400">
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded border border-zinc-300 inline-block" />Verfügbar</span>
                    <span className="flex items-center gap-1"><span className="w-3 h-3 rounded bg-zinc-50 inline-block" />Belegt</span>
                  </div>
                )}
              </div>
            </div>

            {/* Selection summary */}
            {selectedDay && selectedTime && (
              <div className="mt-4 bg-emerald-50 border border-emerald-200 rounded-xl p-4 flex items-center gap-3">
                <span className="text-emerald-500 text-lg">✓</span>
                <p className="text-emerald-700 text-[14px] font-medium">
                  {selectedDay}. {MONTHS[month]} {year} um {selectedTime} Uhr · {SERVICES[selectedService!].name}
                </p>
              </div>
            )}

            <div className="flex gap-4 mt-8">
              <button onClick={() => setStep(1)} className="flex-1 py-4 rounded-full border border-zinc-200 text-zinc-600 text-[14px] font-semibold hover:border-zinc-400 transition-colors">
                ← Zurück
              </button>
              <button onClick={() => selectedDay && selectedTime && setStep(3)}
                className={`flex-1 py-4 rounded-full text-[14px] font-semibold tracking-wide transition-all ${selectedDay && selectedTime ? 'bg-zinc-900 text-white hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'}`}>
                Weiter zu Ihren Daten →
              </button>
            </div>
          </div>
        )}

        {/* Step 3 – Contact */}
        {step === 3 && (
          <div>
            <h2 className="text-[32px] font-light tracking-tight text-zinc-900 mb-2">Ihre Daten</h2>
            <p className="text-zinc-400 mb-10">Fast geschafft. Ihre Daten werden vertraulich behandelt.</p>

            {/* Summary box */}
            <div className="bg-white rounded-2xl border border-zinc-100 p-6 mb-8 shadow-sm">
              <p className="text-[11px] tracking-widest uppercase text-zinc-400 mb-4">Ihr Termin</p>
              <div className="grid grid-cols-3 gap-4">
                <div><p className="text-[11px] text-zinc-400 mb-1">Behandlung</p><p className="font-semibold text-zinc-900 text-[14px]">{SERVICES[selectedService!].name}</p></div>
                <div><p className="text-[11px] text-zinc-400 mb-1">Datum</p><p className="font-semibold text-zinc-900 text-[14px]">{selectedDay}. {MONTHS[month]}</p></div>
                <div><p className="text-[11px] text-zinc-400 mb-1">Uhrzeit</p><p className="font-semibold text-zinc-900 text-[14px]">{selectedTime} Uhr</p></div>
              </div>
            </div>

            <div className="bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm space-y-6">
              {([["Vollständiger Name *", "name", "text", "Anna Müller"], ["E-Mail-Adresse *", "email", "email", "anna@example.de"], ["Telefonnummer *", "phone", "tel", "+49 176 123 456"]] as const).map(([label, field, type, placeholder]) => (
                <div key={field}>
                  <label className="text-[12px] font-semibold text-zinc-500 tracking-wide block mb-2 uppercase">{label}</label>
                  <input type={type} placeholder={placeholder} value={form[field]}
                    onChange={e => setForm(f => ({ ...f, [field]: e.target.value }))}
                    className="w-full h-12 rounded-xl border-2 border-zinc-100 bg-zinc-50 px-4 text-[14px] text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors" />
                </div>
              ))}
              <div>
                <label className="text-[12px] font-semibold text-zinc-500 tracking-wide block mb-2 uppercase">Anmerkungen (optional)</label>
                <textarea placeholder="Gibt es etwas, das ich wissen sollte?" value={form.note}
                  onChange={e => setForm(f => ({ ...f, note: e.target.value }))}
                  className="w-full h-24 rounded-xl border-2 border-zinc-100 bg-zinc-50 px-4 py-3 text-[14px] text-zinc-900 placeholder-zinc-300 focus:outline-none focus:border-zinc-400 transition-colors resize-none" />
              </div>
            </div>

            <div className="flex gap-4 mt-8">
              <button onClick={() => setStep(2)} className="flex-1 py-4 rounded-full border border-zinc-200 text-zinc-600 text-[14px] font-semibold hover:border-zinc-400 transition-colors">
                ← Zurück
              </button>
              <button onClick={() => setStep(4)}
                className={`flex-1 py-4 rounded-full text-[14px] font-semibold tracking-wide transition-all ${form.name && form.email && form.phone ? 'bg-zinc-900 text-white hover:bg-zinc-700' : 'bg-zinc-100 text-zinc-400 cursor-not-allowed'}`}>
                Zur Bestätigung →
              </button>
            </div>
          </div>
        )}

        {/* Step 4 – Confirm */}
        {step === 4 && (
          <div>
            <h2 className="text-[32px] font-light tracking-tight text-zinc-900 mb-2">Buchung bestätigen</h2>
            <p className="text-zinc-400 mb-10">Bitte prüfe deine Angaben und bestätige den Termin.</p>
            <div className="bg-white rounded-2xl border border-zinc-100 p-8 shadow-sm mb-6">
              <p className="text-[11px] tracking-widest uppercase text-zinc-400 mb-6">Zusammenfassung</p>
              <div className="space-y-4 divide-y divide-zinc-50">
                {[
                  ["Behandlung", SERVICES[selectedService!].name],
                  ["Dauer", SERVICES[selectedService!].duration],
                  ["Datum", `${selectedDay}. ${MONTHS[month]} ${year}`],
                  ["Uhrzeit", `${selectedTime} Uhr`],
                  ["Preis", SERVICES[selectedService!].price],
                  ["Name", form.name],
                  ["E-Mail", form.email],
                  ["Telefon", form.phone],
                  ...(form.note ? [["Anmerkung", form.note]] : []),
                ].map(([label, val]) => (
                  <div key={label} className="flex justify-between py-3 text-[14px]">
                    <span className="text-zinc-400">{label}</span>
                    <span className="font-medium text-zinc-900 text-right max-w-xs">{val}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-stone-50 border border-stone-200 rounded-xl p-5 mb-8">
              <p className="text-[13px] text-stone-600 leading-relaxed">
                Mit der Buchung akzeptierst du unsere <span className="underline">Stornobedingungen</span>. Kostenlose Stornierung bis 24 Stunden vor dem Termin.
              </p>
            </div>
            <div className="flex gap-4">
              <button onClick={() => setStep(3)} className="flex-1 py-4 rounded-full border border-zinc-200 text-zinc-600 text-[14px] font-semibold hover:border-zinc-400 transition-colors">
                ← Zurück
              </button>
              <button onClick={() => setDone(true)} className="flex-1 py-4 rounded-full bg-zinc-900 text-white text-[14px] font-semibold hover:bg-zinc-700 transition-colors">
                Termin jetzt buchen ✓
              </button>
            </div>
          </div>
        )}
      </div>
    </main>
  );
}