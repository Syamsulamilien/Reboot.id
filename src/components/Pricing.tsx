import { Check } from 'lucide-react'
import { plans } from '../data/pricing'
import { Reveal, SectionHead, wrap } from './ui'
import { WA_MSG } from '../lib/wa'
export default function Pricing() {
  return (
    <section id="paket" className="bg-softb py-20 sm:py-28"><div className={wrap}>
      <SectionHead title="Pilih Paket Sesuai Kebutuhan" desc="Harga final dikonfirmasi lewat WhatsApp." />
      <div className="grid items-center gap-6 lg:grid-cols-3">{plans.map((p, i) => (
        <Reveal key={p.name} delay={i * 80}>
          <article className={`relative flex flex-col rounded-2xl border p-7 transition hover:-translate-y-1 ${p.popular ? 'border-royal bg-gradient-to-b from-navy to-deep text-white shadow-xl shadow-royal/25 lg:scale-105 lg:py-10' : 'border-line bg-white shadow-sm hover:shadow-md'}`}>
            {p.popular && <span className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-bright px-4 py-1 text-xs font-bold text-white">PALING POPULER</span>}
            <h3 className="text-xl font-extrabold">{p.name}</h3>
            <p className={`mt-2 min-h-12 text-sm ${p.popular ? 'text-white/70' : 'text-mute'}`}>{p.desc}</p>
            <p className="mt-5 text-3xl font-extrabold">{p.price}</p>
            <ul className="my-6 flex-1 space-y-3">{p.features.map(f => <li key={f} className="flex gap-3 text-sm"><Check size={18} className={`shrink-0 ${p.popular ? 'text-white' : 'text-bright'}`} />{f}</li>)}</ul>
            <a href={WA_MSG(`Halo Reboot.id, saya tertarik paket ${p.name}.`)} target="_blank" rel="noreferrer" className={`rounded-xl py-3 text-center font-semibold transition ${p.popular ? 'bg-bright text-white hover:bg-royal' : 'bg-royal text-white hover:bg-bright'}`}>Pilih {p.name}</a>
          </article></Reveal>))}</div>
    </div></section>
  )
}
