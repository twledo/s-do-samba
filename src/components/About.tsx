import { asset } from '../data'
import Reveal from './Reveal'

export default function About() {
  return (
    <section id="quem-somos" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <div className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
        <Reveal>
          <p className="eyebrow">Quem somos</p>
          <h2 className="h2-display">Uma roda de samba que vira show</h2>
          <p className="mt-6 text-lg leading-relaxed text-soft">
            O <b className="text-paper">S do Samba</b> nasceu de uma roda entre amigos. A sintonia entre os quatro é o que sustenta o show, do primeiro ao último pagode.
          </p>
          <p className="mt-4 text-lg leading-relaxed text-soft">
            Somos <b className="text-paper">amigos de longa data</b> que decidiram levar o samba para mais gente. Em cada evento, o repertório é ensaiado, o palco é cheio e o público entra na música.
          </p>
        </Reveal>
        <Reveal delay={1}>
          <img
            className="aspect-square w-full rounded-3xl object-cover md:rotate-[1.5deg]"
            src={asset('ensaio.jpg')}
            alt="Integrantes do S do Samba com violão, saxofone e percussão na passagem de som"
            loading="lazy"
          />
        </Reveal>
      </div>
    </section>
  )
}
