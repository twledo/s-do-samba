import { differentials } from '../data'
import Reveal from './Reveal'

export default function Differentials() {
  return (
    <section className="bg-ink2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">Por que o S do Samba</p>
          <h2 className="h2-display">O que você leva ao contratar</h2>
        </Reveal>
        <div className="mt-12 grid gap-x-16 gap-y-10 md:grid-cols-2">
          {differentials.map((d, i) => (
            <Reveal as="article" key={d.title} delay={i}>
              <span className="block h-1 w-10 rounded-full bg-lime" aria-hidden="true" />
              <h3 className="mt-4 text-2xl font-bold">{d.title}</h3>
              <p className="mt-2 max-w-md text-soft">{d.text}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
