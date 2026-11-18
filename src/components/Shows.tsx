import { businessEvents, formacao, partyEvents } from '../data'
import Reveal from './Reveal'

function EventList({ title, items, tone }: { title: string; items: string[]; tone: 'lime' | 'teal' }) {
  const text = tone === 'lime' ? 'text-lime' : 'text-teal'
  const dot = tone === 'lime' ? 'bg-lime' : 'bg-teal'
  return (
    <Reveal className="rounded-3xl bg-ink p-8">
      <h3 className={`font-display text-3xl font-semibold uppercase ${text}`}>{title}</h3>
      <ul className="mt-5 space-y-3 text-lg text-soft">
        {items.map((t) => (
          <li key={t} className="flex gap-3">
            <span className={`mt-2.5 h-2 w-2 shrink-0 rounded-full ${dot}`} aria-hidden="true" />
            {t}
          </li>
        ))}
      </ul>
    </Reveal>
  )
}

const stats = [
  ['2h30', 'de show contínuo, com roteiro montado para o seu público'],
  ['500', 'pessoas: até esse porte com som e luz próprios, do bar ao salão'],
  ['NF', 'emitida (MEI) e contrato formal de prestação de serviço'],
]

export default function Shows() {
  return (
    <section id="shows" className="bg-ink2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-5">
        <Reveal>
          <p className="eyebrow">Onde tocamos</p>
          <h2 className="h2-display">Um show para cada tipo de evento</h2>
        </Reveal>
        <div className="mt-10 grid gap-5 md:grid-cols-2">
          <EventList title="Empresas e marcas" items={businessEvents} tone="lime" />
          <EventList title="Festas e celebrações" items={partyEvents} tone="teal" />
        </div>

        <Reveal className="mt-16">
          <p className="eyebrow">Formação de palco</p>
          <h3 className="font-display text-3xl font-semibold uppercase md:text-5xl">Harmonia, percussão, sopros e voz</h3>
        </Reveal>
        <Reveal className="mt-8 overflow-x-auto rounded-2xl bg-ink">
          <table className="w-full min-w-[34rem] text-left">
            <thead>
              <tr className="border-b border-white/10 text-sm uppercase tracking-wider text-lime">
                <th className="p-4">Seção</th><th className="p-4">Instrumentos</th><th className="p-4">O que entrega</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-white/5 text-soft">
              {formacao.map(([a, b, c]) => (
                <tr key={a}><td className="p-4 font-bold text-paper">{a}</td><td className="p-4">{b}</td><td className="p-4">{c}</td></tr>
              ))}
            </tbody>
          </table>
        </Reveal>

        <Reveal className="mt-16 rounded-3xl bg-lime p-8 text-ink md:p-12">
          <p className="eyebrow !text-[#2B3A12]">Estrutura do show</p>
          <h3 className="font-display text-3xl font-semibold uppercase leading-tight md:text-5xl">Chegamos com tudo pronto para tocar</h3>
          <div className="mt-8 grid gap-8 md:grid-cols-3">
            {stats.map(([n, t]) => (
              <div key={n}>
                <p className="font-display text-6xl font-bold leading-none md:text-7xl">{n}</p>
                <p className="mt-2 text-lg">{t}</p>
              </div>
            ))}
          </div>
          <p className="mt-8 border-t border-[#2B3A12]/40 pt-6 text-lg">
            Equipe de apoio com técnico de som e roadies para montagem, passagem de som e suporte durante todo o evento.
          </p>
        </Reveal>
      </div>
    </section>
  )
}
