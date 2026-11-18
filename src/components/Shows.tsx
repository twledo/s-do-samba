import { businessEvents, formacao, partyEvents } from '@/data'
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const stats = [
  ['2h30', 'de show contínuo, com roteiro montado para o seu público'],
  ['500', 'pessoas: até esse porte com som e luz próprios, do bar ao salão'],
  ['NF', 'emitida (MEI) e contrato formal de prestação de serviço'],
] as const

export function Shows() {
  return (
    <section id="shows" aria-labelledby="shows-title" className="mx-auto max-w-6xl px-4 py-20 sm:px-6 md:py-28">
      <SectionHeading id="shows-title" track="03" kicker="Onde tocamos" title="Um show para cada tipo de evento" />

      <div className="mt-12 grid gap-4 md:grid-cols-12">
        <Reveal className="rounded-[1.75rem] bg-lime p-7 text-ink md:col-span-7 md:p-10">
          <h3 className="font-display text-3xl font-semibold uppercase md:text-4xl">Empresas e marcas</h3>
          <ul className="mt-6 space-y-3 text-lg">
            {businessEvents.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-ink" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal delay={1} className="rounded-[1.75rem] border border-border p-7 md:col-span-5 md:mt-16 md:p-10">
          <h3 className="font-display text-3xl font-semibold uppercase text-teal md:text-4xl">Festas e celebrações</h3>
          <ul className="mt-6 space-y-3 text-lg text-soft">
            {partyEvents.map((t) => (
              <li key={t} className="flex gap-3">
                <span className="mt-2.5 size-2 shrink-0 rounded-full bg-teal" aria-hidden="true" />
                {t}
              </li>
            ))}
          </ul>
        </Reveal>
      </div>

      <div className="mt-20 grid gap-8 md:grid-cols-12 md:gap-12">
        <Reveal className="md:col-span-5">
          <p className="kicker">Formação de palco</p>
          <h3 className="display-md mt-4">Harmonia, percussão, sopros e voz</h3>
          <p className="mt-4 text-soft">Toque em cada seção para ver os instrumentos e o que ela entrega no show.</p>
        </Reveal>
        <Reveal delay={1} className="md:col-span-7">
          <Accordion type="single" collapsible defaultValue={formacao[0][0]} className="border-t border-border">
            {formacao.map(([secao, instrumentos, entrega]) => (
              <AccordionItem key={secao} value={secao}>
                <AccordionTrigger className="py-5 font-display text-2xl font-semibold uppercase hover:no-underline data-[state=open]:text-lime [&>svg]:size-5">
                  {secao}
                </AccordionTrigger>
                <AccordionContent className="grid gap-1 text-base sm:grid-cols-2 sm:gap-6">
                  <p className="font-bold text-paper">{instrumentos}</p>
                  <p className="text-soft">{entrega}</p>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </Reveal>
      </div>

      <Reveal className="mt-20 rounded-[1.75rem] bg-card p-7 md:p-12">
        <p className="kicker">Estrutura do show</p>
        <h3 className="display-md mt-4 max-w-2xl">Chegamos com tudo pronto para tocar</h3>
        <dl className="mt-10 grid gap-8 sm:grid-cols-3">
          {stats.map(([n, t]) => (
            <div key={n} className="border-t-2 border-lime pt-4">
              <dt className="font-display text-6xl font-bold leading-none text-lime md:text-7xl">{n}</dt>
              <dd className="mt-3 text-soft">{t}</dd>
            </div>
          ))}
        </dl>
        <p className="mt-10 border-t border-border pt-6 text-lg text-paper">
          Equipe de apoio com técnico de som e roadies para montagem, passagem de som e suporte durante todo o evento.
        </p>
      </Reveal>
    </section>
  )
}
