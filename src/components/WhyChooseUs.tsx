import { BadgeDollarSign, ListChecks, Zap, ShieldCheck, GraduationCap, MessageCircle } from 'lucide-react'
import { Reveal, SectionHead, wrap } from './ui'
const b = [[BadgeDollarSign,'Harga Transparan','Paket dan harga jelas sejak awal.'],[ListChecks,'Proses Jelas','Kamu tahu apa yang dikerjakan di tiap tahap.'],[Zap,'Praktis','Tinggal hubungi, sisanya kami urus.'],[ShieldCheck,'Quality Check','Setiap pengerjaan diperiksa sebelum selesai.'],[GraduationCap,'Ramah untuk Mahasiswa','Paket terjangkau untuk kebutuhan kuliah.'],[MessageCircle,'Mudah Dihubungi','Respons cepat lewat WhatsApp.']] as const
export default function WhyChooseUs() {
  return (
    <section className="bg-white py-20 sm:py-28"><div className={wrap}>
      <SectionHead title="Kenapa Memilih Reboot.id?" />
      <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2 lg:grid-cols-3">{b.map(([I, t, d], i) => (
        <Reveal key={t} delay={i * 50}><div className="flex gap-4"><span className="grid h-12 w-12 shrink-0 place-items-center rounded-xl bg-lightb text-bright"><I size={22} /></span>
          <div><h3 className="font-bold">{t}</h3><p className="mt-1 text-sm text-mute">{d}</p></div></div></Reveal>))}</div>
    </div></section>
  )
}
