import { Reveal, SectionHead, wrap } from './ui'
const steps = ['Pilih Layanan','Hubungi Kami','Pemeriksaan Perangkat','Pengerjaan','Quality Check','Selesai']
export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="bg-lightb py-20 sm:py-28"><div className={wrap}>
      <SectionHead title="Prosesnya Gampang" />
      <ol className="relative grid gap-8 lg:grid-cols-6 lg:gap-4">
        <div className="absolute left-5 top-5 bottom-5 w-0.5 bg-bright/30 lg:bottom-auto lg:left-[8%] lg:right-[8%] lg:top-5 lg:h-0.5 lg:w-auto" aria-hidden />
        {steps.map((s, i) => (
          <Reveal key={s} delay={i * 90}><li className="relative flex items-center gap-4 lg:flex-col lg:text-center">
            <span className="relative z-10 grid h-10 w-10 shrink-0 place-items-center rounded-full bg-royal font-bold text-white ring-4 ring-lightb">{i + 1}</span>
            <span className="font-semibold">{s}</span></li></Reveal>))}
      </ol>
    </div></section>
  )
}
