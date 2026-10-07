import { MessageCircle } from 'lucide-react'
import { wrap } from './ui'
import { WA_MSG } from '../lib/wa'
export default function CTA() {
  return (
    <section className="bg-gradient-to-br from-deep to-navy py-20 sm:py-24"><div className={`${wrap} text-center`}>
      <h2 className="text-3xl font-extrabold text-white sm:text-5xl">Laptop Bermasalah? Saatnya Reboot.</h2>
      <p className="mx-auto mt-4 max-w-xl text-lg text-white/70">Biarkan kami membantu membuat perangkatmu kembali siap digunakan.</p>
      <a href={WA_MSG()} target="_blank" rel="noreferrer" className="mt-9 inline-flex items-center gap-2 rounded-xl bg-bright px-8 py-4 font-semibold text-white shadow-[0_0_40px_rgba(30,115,216,.45)] transition hover:bg-royal"><MessageCircle size={20} />Konsultasi via WhatsApp</a>
    </div></section>
  )
}
