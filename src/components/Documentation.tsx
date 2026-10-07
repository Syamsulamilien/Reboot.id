import { useState, useEffect } from 'react'
import { HardDrive, Settings2, Cpu, AppWindow, LaptopMinimalCheck, X } from 'lucide-react'
import { Reveal, SectionHead, wrap } from './ui'
// Ganti `src` dengan foto asli di src/assets/images/ saat tersedia.
const items = [{ I: HardDrive, t: 'Instalasi Windows' },{ I: Settings2, t: 'Setting Windows' },{ I: Cpu, t: 'Instalasi Driver' },{ I: AppWindow, t: 'Instalasi Aplikasi' },{ I: LaptopMinimalCheck, t: 'Laptop setelah pengerjaan' }]
export default function Documentation() {
  const [sel, setSel] = useState<number | null>(null)
  useEffect(() => { const k = (e: KeyboardEvent) => e.key === 'Escape' && setSel(null); window.addEventListener('keydown', k); return () => window.removeEventListener('keydown', k) }, [])
  return (
    <section id="dokumentasi" className="bg-white py-20 sm:py-28"><div className={wrap}>
      <SectionHead title="Dokumentasi Pengerjaan" desc="Foto asli pengerjaan akan ditampilkan di sini." />
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">{items.map(({ I, t }, i) => (
        <Reveal key={t} delay={i * 60} className={i === 0 ? 'col-span-2 lg:col-span-1' : ''}>
          <button onClick={() => setSel(i)} className="group relative grid aspect-[4/3] w-full place-items-center overflow-hidden rounded-2xl border border-line bg-gradient-to-br from-lightb to-softb text-left">
            <I size={48} className="text-royal/50 transition group-hover:scale-110 group-hover:text-bright" />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-deep/80 to-transparent p-4 font-semibold text-white">{t}</span></button></Reveal>))}</div>
      {sel !== null && <div role="dialog" aria-modal onClick={() => setSel(null)} className="fixed inset-0 z-[60] grid place-items-center bg-deep/85 p-4">
        <div className="relative grid aspect-[4/3] w-full max-w-2xl place-items-center rounded-2xl bg-lightb">{(() => { const I = items[sel].I; return <I size={72} className="text-royal/60" /> })()}
          <p className="absolute bottom-4 font-semibold text-deep">{items[sel].t}</p>
          <button aria-label="Tutup" className="absolute right-3 top-3 grid h-10 w-10 place-items-center rounded-full bg-white shadow"><X size={18} /></button></div></div>}
    </div></section>
  )
}
