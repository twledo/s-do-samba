import { songs, styles } from '../data'
import Reveal from './Reveal'

export default function Repertoire() {
  return (
    <section id="repertorio" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow">Repertório</p>
        <h2 className="h2-display">Do samba de raiz ao pagode de hoje</h2>
      </Reveal>
      <ol className="mt-10 divide-y divide-white/10 border-y border-white/10">
        {styles.map((s, i) => (
          <Reveal as="li" key={s.title} delay={i} className="group flex flex-col gap-2 py-6 md:flex-row md:items-baseline md:gap-8">
            <span className="font-display text-lg text-lime">{String(i + 1).padStart(2, '0')}</span>
            <h3 className="font-display text-3xl font-semibold uppercase transition-colors md:text-5xl md:group-hover:text-lime">{s.title}</h3>
            <p className="text-soft md:ml-auto md:max-w-xs">{s.text}</p>
          </Reveal>
        ))}
      </ol>
      <Reveal className="mt-8 max-w-3xl text-lg text-soft">
        Releituras que agradam <b className="text-paper">todas as idades</b>, com um roteiro que muda conforme o clima de cada evento.
      </Reveal>
      <Reveal className="mt-8">
        <h3 className="mb-4 text-sm font-bold uppercase tracking-[0.25em] text-lime">Não podem faltar</h3>
        <ul className="flex flex-wrap gap-2">
          {songs.map((s) => (
            <li key={s} className="rounded-full border border-lime/40 bg-ink2 px-4 py-2 text-sm text-paper md:text-base">{s}</li>
          ))}
        </ul>
      </Reveal>
    </section>
  )
}
