import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { faqs } from '../data/faq'
import { SectionHead, wrap } from './ui'
export default function FAQ() {
  const [o, setO] = useState<number | null>(0)
  return (
    <section id="faq" className="bg-softb py-20 sm:py-28"><div className={wrap}>
      <SectionHead title="Frequently Asked Questions" />
      <div className="mx-auto max-w-3xl space-y-3">{faqs.map((f, i) => (
        <div key={f.q} className="rounded-2xl border border-line bg-white">
          <h3><button aria-expanded={o === i} aria-controls={`f${i}`} onClick={() => setO(o === i ? null : i)} className="flex w-full items-center justify-between gap-4 p-5 text-left font-semibold">
            {f.q}<ChevronDown className={`shrink-0 text-bright transition-transform duration-300 ${o === i ? 'rotate-180' : ''}`} /></button></h3>
          <div id={`f${i}`} className={`grid transition-[grid-template-rows] duration-300 ${o === i ? 'grid-rows-[1fr]' : 'grid-rows-[0fr]'}`}><div className="overflow-hidden"><p className="px-5 pb-5 text-mute">{f.a}</p></div></div>
        </div>))}</div>
    </div></section>
  )
}
