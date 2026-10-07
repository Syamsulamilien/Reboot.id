import { Power, ShieldCheck } from 'lucide-react'
import { BlurText, wrap } from './ui'
import { WA_MSG } from '../lib/wa'
export default function Hero() {
  return (
    <section id="home" className="relative overflow-hidden bg-gradient-to-br from-deep via-navy to-royal pt-32 pb-24 sm:pt-40 sm:pb-32">
      <div className="drift pointer-events-none absolute -top-24 right-0 h-[28rem] w-[28rem] rounded-full bg-bright/20 blur-3xl" style={{ animation: 'drift 14s ease-in-out infinite' }} />
      <div className={`${wrap} relative grid items-center gap-12 lg:grid-cols-[1.2fr_.8fr]`}>
        <div>
          <h1 className="text-4xl font-extrabold leading-[1.08] tracking-tight text-white sm:text-6xl"><BlurText text="Your PC, Ready to Reboot." /></h1>
          <p className="mt-6 max-w-xl text-base text-white/75 sm:text-lg">Jasa instalasi Windows yang praktis, transparan, dan siap membantu laptop atau PC kamu kembali siap digunakan.</p>
          <div className="mt-9 flex flex-col gap-3 sm:flex-row">
            <a href="#paket" className="rounded-xl bg-bright px-7 py-3.5 text-center font-semibold text-white shadow-lg shadow-bright/30 transition hover:bg-royal">Lihat Paket</a>
            <a href={WA_MSG()} target="_blank" rel="noreferrer" className="rounded-xl border border-white/60 px-7 py-3.5 text-center font-semibold text-white transition hover:bg-white/10">Hubungi Kami</a>
          </div>
        </div>
        <div className="relative mx-auto grid aspect-square w-64 place-items-center sm:w-80" aria-hidden>
          <div className="absolute inset-0 rounded-full border border-white/10" /><div className="absolute inset-8 rounded-full border border-white/15" />
          <div className="absolute inset-0 rounded-full bg-bright/20 blur-2xl" />
          <div className="relative grid h-32 w-32 place-items-center rounded-3xl bg-white/10 text-white ring-1 ring-white/25 backdrop-blur sm:h-40 sm:w-40"><Power size={64} strokeWidth={2.25} /></div>
          <div className="absolute -bottom-2 right-2 flex items-center gap-2 rounded-xl bg-white px-3 py-2 text-sm font-semibold text-deep shadow-lg"><ShieldCheck size={16} className="text-bright" />Quality check</div>
        </div>
      </div>
    </section>
  )
}
