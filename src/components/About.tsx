import { asset, members } from '@/data'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function About() {
  return (
    <section id="quem-somos" aria-labelledby="quem-somos-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="quem-somos-title" track="01" kicker="Quem somos" title="Uma roda de samba que virou show" />

      <div className="mt-12 grid gap-10 md:grid-cols-12 md:gap-12">
        <Reveal className="space-y-5 text-lg leading-relaxed text-soft md:col-span-6">
          <p>
            O <b className="text-paper">S do Samba</b> nasceu de uma roda entre amigos. A sintonia entre os quatro é o que sustenta o show, do primeiro ao último pagode.
          </p>
          <p>
            Somos <b className="text-paper">amigos de longa data</b> que decidiram levar o samba para mais gente. Em cada evento, o repertório é ensaiado, o palco é cheio e o público entra na música.
          </p>
        </Reveal>

        <Reveal delay={1} className="md:col-span-6">
          <img
            src={asset('ensaio.jpg')}
            alt="Integrantes do S do Samba com violão, saxofone e percussão na passagem de som"
            loading="lazy"
            className="aspect-[4/5] w-full rounded-[1.75rem] object-cover sm:aspect-[4/3] md:aspect-[4/5]"
          />
        </Reveal>
      </div>

      <Reveal className="mt-14">
        <h3 className="kicker text-soft">Ficha do palco</h3>
        <dl className="mt-4 divide-y divide-border border-y border-border">
          {members.map((m) => (
            <div key={m.name} className="grid gap-1 py-4 sm:grid-cols-[12rem_1fr] sm:items-baseline">
              <dt className="font-display text-2xl font-semibold uppercase md:text-3xl">{m.name}</dt>
              <dd className="text-soft">{m.inst}</dd>
            </div>
          ))}
        </dl>
      </Reveal>
    </section>
  )
}
