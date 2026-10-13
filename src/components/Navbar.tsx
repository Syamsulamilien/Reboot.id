import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { wrap } from './ui'
import { WA_MSG } from '../lib/wa'

export const links = [
  ['Home', '#home'],
  ['Tentang', '#tentang'],
  ['Layanan', '#layanan'],
  ['Paket Harga', '#paket'],
  ['Cara Kerja', '#cara-kerja'],
  ['Dokumentasi', '#dokumentasi'],
  ['FAQ', '#faq'],
  ['Kontak', '#kontak'],
]

export default function Navbar() {
  const [s, setS] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const f = () => setS(window.scrollY > 40)

    f()
    window.addEventListener('scroll', f, { passive: true })

    return () => window.removeEventListener('scroll', f)
  }, [])

  const solid = s || open

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 border-b border-slate-200 transition-all duration-300 ${
        solid
          ? 'bg-white/95 shadow-md shadow-slate-200/50 backdrop-blur-md'
          : 'bg-white'
      }`}
    >
      <nav
        aria-label="Utama"
        className={`${wrap} flex h-16 items-center justify-between`}
      >
        {/* Logo */}
        <a
          href="#home"
          aria-label="Reboot.id beranda"
          className="flex shrink-0 items-center gap-2.5"
        >
          <img
            src="/LogoKWU.png"
            alt="Logo Reboot.id"
            className="h-11 w-11 object-contain"
          />

          <span className="text-xl font-bold tracking-tight text-blue-900">
            Reboot.id
          </span>
        </a>

        {/* Menu Desktop */}
        <ul className="hidden items-center gap-5 xl:gap-6 lg:flex">
          {links.map(([n, h]) => (
            <li key={h}>
              <a
                href={h}
                className="text-sm font-semibold text-slate-700 transition-colors duration-200 hover:text-blue-700"
              >
                {n}
              </a>
            </li>
          ))}
        </ul>

        {/* Tombol Kontak dan Menu Mobile */}
        <div className="flex items-center gap-2">
          <a
            href={WA_MSG()}
            target="_blank"
            rel="noreferrer"
            className="hidden rounded-xl bg-blue-700 px-4 py-2.5 text-sm font-semibold text-white transition-colors duration-200 hover:bg-blue-800 sm:inline-block"
          >
            Hubungi Kami
          </a>

          <button
            type="button"
            className="grid h-11 w-11 place-items-center rounded-lg text-slate-800 transition-colors hover:bg-slate-100 lg:hidden"
            aria-label={open ? 'Tutup menu' : 'Buka menu'}
            aria-expanded={open}
            onClick={() => setOpen(!open)}
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Menu Mobile */}
      {open && (
        <div className="border-t border-slate-200 bg-white lg:hidden">
          <ul className={`${wrap} flex flex-col py-3`}>
            {links.map(([n, h]) => (
              <li key={h}>
                <a
                  href={h}
                  onClick={() => setOpen(false)}
                  className="block rounded-lg px-3 py-3 font-medium text-slate-700 transition-colors hover:bg-slate-50 hover:text-blue-700"
                >
                  {n}
                </a>
              </li>
            ))}

            <li className="pt-2">
              <a
                href={WA_MSG()}
                target="_blank"
                rel="noreferrer"
                className="block rounded-xl bg-blue-700 py-3 text-center font-semibold text-white transition-colors hover:bg-blue-800"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  )
}
