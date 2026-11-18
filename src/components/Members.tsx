import { asset, members } from '../data'
import Reveal from './Reveal'

export default function Members() {
  return (
    <section id="integrantes" className="bg-ink2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">Integrantes</p>
          <h2 className="h2-display">Quatro músicos, uma só cadência</h2>
        </Reveal>
        <Reveal className="mt-10 h-72 overflow-hidden rounded-3xl bg-paper sm:h-96 md:h-[34rem]">
          <img
            src={asset('integrantes.png')}
            alt="Abner, Matias, Cristian e Jean com violão, saxofone, tantã e pandeiro"
            className="h-full w-full object-cover object-top"
            loading="lazy"
          />
        </Reveal>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {members.map((m, i) => (
            <Reveal as="li" key={m.name} delay={i} className="rounded-2xl bg-ink p-6">
              <h3 className="font-display text-3xl font-semibold uppercase">{m.name}</h3>
              <p className="mt-2 text-soft">{m.inst}</p>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  )
}
