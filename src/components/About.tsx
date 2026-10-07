import { ListChecks, BadgeDollarSign, Zap, GraduationCap, MessageCircle, ShieldCheck } from 'lucide-react'
import { Reveal, SectionHead, wrap } from './ui'
const pts = [[ListChecks,'Proses jelas'],[BadgeDollarSign,'Harga transparan'],[Zap,'Praktis'],[GraduationCap,'Cocok untuk mahasiswa'],[MessageCircle,'Layanan mudah dihubungi'],[ShieldCheck,'Quality check setelah instalasi']] as const
export default function About() {
  return (
    <section id="tentang" className="bg-white py-20 sm:py-28"><div className={wrap}>
      <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
        <Reveal><h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Kenapa Reboot.id?</h2>
          <p className="mt-5 max-w-lg text-lg text-mute">Reboot.id hadir sebagai solusi bagi pengguna laptop dan PC yang membutuhkan instalasi Windows secara praktis tanpa harus melakukan proses instalasi sendiri.</p></Reveal>
        <ul className="grid gap-3 sm:grid-cols-2">{pts.map(([I, t], i) => (
          <Reveal key={t} delay={i * 60}><li className="flex items-center gap-3 rounded-xl border border-line bg-softb p-4"><span className="grid h-10 w-10 shrink-0 place-items-center rounded-lg bg-lightb text-bright"><I size={20} /></span><span className="font-semibold">{t}</span></li></Reveal>))}</ul>
      </div></div></section>
  )
}
