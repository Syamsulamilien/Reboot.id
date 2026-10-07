import { Instagram, MessageCircle } from 'lucide-react'
import { Logo, wrap } from './ui'
import { WA_MSG, INSTAGRAM } from '../lib/wa'
const nav = [['Home','#home'],['Tentang','#tentang'],['Layanan','#layanan'],['Paket Harga','#paket'],['FAQ','#faq'],['Kontak','#kontak']]
export default function Footer() {
  return (
    <footer className="bg-deep py-14 text-white"><div className={wrap}>
      <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_auto]">
        <div><Logo /><p className="mt-4 max-w-sm text-white/65">Jasa instalasi Windows yang praktis, transparan, dan terpercaya.</p></div>
        <nav aria-label="Footer"><ul className="grid grid-cols-2 gap-2">{nav.map(([n, h]) => <li key={h}><a href={h} className="text-white/70 transition hover:text-bright">{n}</a></li>)}</ul></nav>
        <div className="flex gap-3">
          <a aria-label="Instagram" href={INSTAGRAM} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:bg-bright"><Instagram size={20} /></a>
          <a aria-label="WhatsApp" href={WA_MSG()} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-xl bg-white/10 transition hover:bg-bright"><MessageCircle size={20} /></a></div>
      </div>
      <p className="mt-10 border-t border-white/10 pt-6 text-sm text-white/50">© 2026 Reboot.id. All Rights Reserved.</p>
    </div></footer>
  )
}
