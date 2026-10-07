import { services } from '../data/services'
import { Reveal, SectionHead, SpotlightCard, wrap } from './ui'
export default function Services() {
  return (
    <section id="layanan" className="bg-white py-20 sm:py-28"><div className={wrap}>
      <SectionHead title="Layanan Reboot.id" desc="Fokus pada instalasi dan konfigurasi Windows untuk laptop dan PC." />
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{services.map(({ icon: I, title, desc }, i) => (
        <Reveal key={title} delay={i * 50}><SpotlightCard className="h-full p-6">
          <span className="grid h-12 w-12 place-items-center rounded-xl bg-lightb text-bright"><I size={24} /></span>
          <h3 className="mt-5 text-lg font-bold">{title}</h3><p className="mt-2 text-mute">{desc}</p></SpotlightCard></Reveal>))}</div>
    </div></section>
  )
}
