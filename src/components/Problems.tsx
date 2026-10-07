import { Turtle, TriangleAlert, RefreshCw, Cpu, CircleHelp, SlidersHorizontal } from 'lucide-react'
import { Reveal, SectionHead, wrap } from './ui'
const items = [[Turtle,'Laptop Terasa Lambat'],[TriangleAlert,'Windows Mengalami Error'],[RefreshCw,'Perlu Install Ulang'],[Cpu,'Driver Bermasalah'],[CircleHelp,'Kesulitan Install Windows Sendiri'],[SlidersHorizontal,'Setting Windows Membingungkan']] as const
export default function Problems() {
  return (
    <section className="bg-softb py-20 sm:py-28"><div className={wrap}>
      <SectionHead title="Windows Bermasalah?" desc="Masalah-masalah ini sering muncul, dan bisa kami bantu selesaikan." />
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">{items.map(([I, t], i) => (
        <Reveal key={t} delay={i * 50}><div className="flex items-center gap-4 rounded-2xl border border-line bg-white p-5 shadow-sm"><I className="shrink-0 text-bright" /><h3 className="font-semibold">{t}</h3></div></Reveal>))}</div>
    </div></section>
  )
}
