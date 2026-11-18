import { differentials } from '@/data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Differentials() {
  const [first, ...rest] = differentials
  return (
    <section aria-labelledby="diferenciais-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="diferenciais-title" track="05" kicker="Por que o S do Samba" title="O que você leva ao contratar" />

      <div className="mt-12 grid gap-10 md:grid-cols-12">
        <Reveal className="md:col-span-5">
          <h3 className="font-display text-4xl font-semibold uppercase leading-tight text-lime md:text-5xl">{first.title}</h3>
          <p className="mt-4 text-lg text-soft">{first.text}</p>
        </Reveal>
        <Reveal delay={1} className="md:col-span-7">
          <ul className="divide-y divide-border border-y border-border">
            {rest.map((d) => (
              <li key={d.title} className="py-5">
                <h3 className="text-xl font-bold">{d.title}</h3>
                <p className="mt-1 text-soft">{d.text}</p>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
