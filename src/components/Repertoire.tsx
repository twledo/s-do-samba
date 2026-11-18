import { songs, styles } from '@/data'
import { Badge } from '@/components/ui/badge'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

export function Repertoire() {
  return (
    <section id="repertorio" aria-labelledby="repertorio-title" className="bg-ink2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <SectionHeading id="repertorio-title" track="02" kicker="Repertório" title="Do samba de raiz ao pagode de hoje" />

        <Reveal as="div" className="mt-12">
          <ol className="divide-y divide-border border-y border-border">
            {styles.map((s, i) => (
              <li key={s.title} className="group grid gap-2 py-6 md:grid-cols-[4rem_1fr_18rem] md:items-baseline md:gap-6">
                <span className="font-display text-lg text-lime">{String(i + 1).padStart(2, '0')}</span>
                <h3 className="font-display text-3xl font-semibold uppercase transition-colors md:text-5xl md:group-hover:text-lime">
                  {s.title}
                </h3>
                <p className="text-soft">{s.text}</p>
              </li>
            ))}
          </ol>
        </Reveal>

        <div className="mt-14 grid gap-8 md:grid-cols-12">
          <Reveal className="md:col-span-4">
            <p className="text-xl leading-snug text-paper">
              Releituras que agradam todas as idades, com um roteiro que muda conforme o clima de cada evento.
            </p>
          </Reveal>
          <Reveal delay={1} className="md:col-span-8">
            <h3 className="kicker">Não podem faltar</h3>
            <ul className="mt-4 flex flex-wrap gap-2">
              {songs.map((s) => (
                <li key={s}><Badge variant="song">{s}</Badge></li>
              ))}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
