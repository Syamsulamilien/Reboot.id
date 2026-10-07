import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo, wrap } from './ui'
import { WA_MSG } from '../lib/wa'
export const links = [['Home','#home'],['Tentang','#tentang'],['Layanan','#layanan'],['Paket Harga','#paket'],['Cara Kerja','#cara-kerja'],['Dokumentasi','#dokumentasi'],['FAQ','#faq'],['Kontak','#kontak']]
export default function Navbar() {
  const [s, setS] = useState(false), [open, setOpen] = useState(false)
  useEffect(() => { const f = () => setS(window.scrollY > 40); f(); window.addEventListener('scroll', f, { passive: true }); return () => window.removeEventListener('scroll', f) }, [])
  const solid = s || open
  return (
    <header className={`fixed inset-x-0 top-0 z-50 transition ${solid ? 'bg-deep/90 backdrop-blur-md shadow-lg shadow-deep/20' : 'bg-deep'}`}>
      <nav aria-label="Utama" className={`${wrap} flex h-16 items-center justify-between`}>
        <a href="#home" aria-label="Reboot.id beranda"><Logo /></a>
        <ul className="hidden items-center gap-6 lg:flex">
          {links.map(([n, h]) => <li key={h}><a href={h} className="text-sm font-medium text-white/75 transition hover:text-bright">{n}</a></li>)}
        </ul>
        <div className="flex items-center gap-2">
          <a href={WA_MSG()} target="_blank" rel="noreferrer" className="hidden rounded-xl bg-royal px-4 py-2 text-sm font-semibold text-white transition hover:bg-bright sm:inline-block">Hubungi Kami</a>
          <button className="grid h-11 w-11 place-items-center rounded-lg text-white lg:hidden" aria-label="Menu" aria-expanded={open} onClick={() => setOpen(!open)}>{open ? <X /> : <Menu />}</button>
        </div>
      </nav>
      {open && <div className="border-t border-white/10 bg-deep lg:hidden"><ul className={`${wrap} flex flex-col py-3`}>
        {links.map(([n, h]) => <li key={h}><a href={h} onClick={() => setOpen(false)} className="block py-3 text-white/85">{n}</a></li>)}
        <li className="pt-2"><a href={WA_MSG()} className="block rounded-xl bg-royal py-3 text-center font-semibold text-white">Hubungi Kami</a></li></ul></div>}
    </header>
  )
}
