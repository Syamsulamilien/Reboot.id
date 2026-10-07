import { useEffect, useRef, useState, type ReactNode, type MouseEvent } from 'react'
import { Power } from 'lucide-react'

export function Logo({ dark = true }: { dark?: boolean }) {
  return (
    <span className="inline-flex items-center gap-2 font-extrabold tracking-tight text-xl">
      <span className="grid h-8 w-8 place-items-center rounded-lg bg-bright text-white"><Power size={18} strokeWidth={2.75} /></span>
      <span className={dark ? 'text-white' : 'text-deep'}>Reboot<span className="text-bright">.id</span></span>
    </span>
  )
}

/** Scroll reveal ala React Bits (ringan, tanpa dependensi) */
export function Reveal({ children, delay = 0, className = '' }: { children: ReactNode; delay?: number; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const [on, setOn] = useState(false)
  useEffect(() => {
    const io = new IntersectionObserver(([e]) => { if (e.isIntersecting) { setOn(true); io.disconnect() } }, { threshold: 0.15 })
    if (ref.current) io.observe(ref.current)
    return () => io.disconnect()
  }, [])
  return <div ref={ref} style={{ transitionDelay: `${delay}ms` }} className={`reveal ${on ? 'in' : ''} ${className}`}>{children}</div>
}

/** Text animation ala React Bits BlurText */
export function BlurText({ text, className = '' }: { text: string; className?: string }) {
  return <span className={className} aria-label={text}>{text.split(' ').map((w, i) => (
    <span key={i} aria-hidden className="blurword" style={{ animationDelay: `${i * 110}ms` }}>{w}&nbsp;</span>))}</span>
}

/** Spotlight card ala React Bits SpotlightCard */
export function SpotlightCard({ children, className = '' }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null)
  const move = (e: MouseEvent) => {
    const r = ref.current!.getBoundingClientRect()
    ref.current!.style.setProperty('--x', `${e.clientX - r.left}px`); ref.current!.style.setProperty('--y', `${e.clientY - r.top}px`)
  }
  return (
    <div ref={ref} onMouseMove={move} className={`group relative overflow-hidden rounded-2xl border border-line bg-white shadow-sm transition hover:-translate-y-0.5 hover:shadow-md ${className}`}>
      <div className="pointer-events-none absolute inset-0 opacity-0 transition group-hover:opacity-100" style={{ background: 'radial-gradient(260px circle at var(--x,50%) var(--y,50%), rgba(30,115,216,.10), transparent 70%)' }} />
      <div className="relative">{children}</div>
    </div>
  )
}

export function SectionHead({ title, desc, light = false }: { title: string; desc?: string; light?: boolean }) {
  return (
    <Reveal className="mx-auto mb-12 max-w-2xl text-center">
      <h2 className={`text-3xl font-extrabold tracking-tight sm:text-4xl ${light ? 'text-white' : 'text-ink'}`}>{title}</h2>
      {desc && <p className={`mt-4 text-base sm:text-lg ${light ? 'text-white/70' : 'text-mute'}`}>{desc}</p>}
    </Reveal>
  )
}
export const wrap = 'mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8'
