import { perks } from '@/data'
import { Badge } from '@/components/ui/badge'
import { Reveal } from './Reveal'
import { SectionHeading } from './SectionHeading'

const numbers = [
  ['100', 'pessoas, em média, por show'],
  ['803', 'seguidores no Instagram @s_do_samba'],
] as const

export function Sponsorship() {
  return (
    <section id="patrocinio" aria-labelledby="patrocinio-title" className="bg-ink2 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-10 md:grid-cols-12 md:items-end">
          <div className="md:col-span-7">
            <SectionHeading id="patrocinio-title" track="04" kicker="Para patrocinadores" tone="teal" title="Sua marca no meio da festa" />
            <Reveal className="mt-6 text-lg text-soft">
              <p>
                O S do Samba reúne público que canta junto, dança e compartilha. Associar a sua marca ao grupo é estar presente nos melhores momentos de quem está na festa.
              </p>
            </Reveal>
          </div>
          <Reveal delay={1} className="md:col-span-5">
            <dl className="grid grid-cols-2 gap-6">
              {numbers.map(([n, t]) => (
                <div key={n}>
                  <dt className="font-display text-6xl font-bold leading-none text-teal md:text-7xl">{n}</dt>
                  <dd className="mt-2 text-sm text-soft">{t}</dd>
                </div>
              ))}
            </dl>
          </Reveal>
        </div>

        <Reveal className="mt-14 border-l-2 border-teal pl-5">
          <h3 className="kicker text-teal">Já passamos por</h3>
          <p className="mt-3 max-w-3xl text-lg text-soft">
            Amorin Alimentos e Produtos Coloniais (lanchonete), Rei do Espetinho (lanchonete e petiscaria), casamentos, aniversários e outros eventos particulares, entre outros lugares.
          </p>
        </Reveal>

        <div className="mt-16 grid gap-10 md:grid-cols-12">
          <Reveal className="md:col-span-8">
            <h3 className="kicker text-teal">Contrapartidas</h3>
            <ol className="mt-5 grid gap-x-10 sm:grid-cols-2">
              {perks.map((p, i) => (
                <li key={p.title} className="flex gap-4 border-t border-border py-5">
                  <Badge variant="teal" className="mt-0.5">{i + 1}</Badge>
                  <div>
                    <h4 className="text-lg font-bold">{p.title}</h4>
                    <p className="mt-1 text-soft">{p.text}</p>
                  </div>
                </li>
              ))}
            </ol>
          </Reveal>
          <Reveal delay={1} className="self-start rounded-[1.75rem] bg-teal p-7 text-ink md:col-span-4 md:mt-10">
            <h3 className="font-display text-3xl font-semibold uppercase">Cotas sob medida</h3>
            <p className="mt-3 text-lg">Montamos o pacote de acordo com o objetivo e o investimento da sua marca.</p>
          </Reveal>
        </div>
      </div>
    </section>
  )
}
