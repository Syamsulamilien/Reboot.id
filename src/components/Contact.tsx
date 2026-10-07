import { MessageCircle, Instagram, MapPin, Clock } from 'lucide-react'
import { Reveal, SectionHead, wrap } from './ui'
import { WA, WA_MSG, INSTAGRAM } from '../lib/wa'
const info = [[MessageCircle,'WhatsApp','+62 XXX-XXXX-XXXX'],[Instagram,'Instagram','@reboot.id'],[MapPin,'Lokasi','Alamat / area layanan (isi nanti)'],[Clock,'Jam layanan','Senin–Sabtu, 09.00–20.00 (contoh)']] as const
export default function Contact() {
  return (
    <section id="kontak" className="bg-white py-20 sm:py-28"><div className={wrap}>
      <SectionHead title="Hubungi Reboot.id" />
      <div className="mx-auto grid max-w-4xl gap-4 sm:grid-cols-2">{info.map(([I, t, v], i) => (
        <Reveal key={t} delay={i * 50}><div className="flex items-center gap-4 rounded-2xl border border-line bg-softb p-5"><span className="grid h-11 w-11 shrink-0 place-items-center rounded-xl bg-lightb text-bright"><I size={20} /></span>
          <div><p className="text-sm text-mute">{t}</p><p className="font-semibold">{v}</p></div></div></Reveal>))}</div>
      <div className="mt-10 text-center"><a href={WA_MSG()} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-royal px-8 py-4 font-semibold text-white transition hover:bg-bright"><MessageCircle size={20} />Chat via WhatsApp</a>
        <p className="mt-3 text-xs text-mute">{WA}</p><span className="hidden">{INSTAGRAM}</span></div>
    </div></section>
  )
}
