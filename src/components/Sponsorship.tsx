import { perks } from '../data'
import CountUp from './CountUp'
import Reveal from './Reveal'

export default function Sponsorship() {
  return (
    <section id="patrocinio" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal>
        <p className="eyebrow !text-teal">Para patrocinadores</p>
        <h2 className="h2-display">Sua marca no meio da festa</h2>
        <p className="mt-5 max-w-3xl text-lg text-soft">
          O S do Samba reúne público que canta junto, dança e compartilha. Associar a sua marca ao grupo é estar presente nos melhores momentos de quem está na festa.
        </p>
      </Reveal>
      <div className="mt-10 grid gap-4 sm:grid-cols-2">
        <Reveal className="rounded-2xl bg-ink2 p-7">
          <p className="font-display text-6xl font-bold leading-none text-lime"><CountUp to={100} /></p>
          <p className="mt-3 text-soft">pessoas, em média, por show</p>
        </Reveal>
        <Reveal delay={1} className="rounded-2xl bg-ink2 p-7">
          <p className="font-display text-6xl font-bold leading-none text-lime"><CountUp to={803} /></p>
          <p className="mt-3 text-soft">seguidores no Instagram @s_do_samba</p>
        </Reveal>
      </div>
      <Reveal className="mt-10">
        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Já passamos por</h3>
        <p className="mt-3 max-w-3xl text-lg text-soft">
          Amorin Alimentos e Produtos Coloniais (lanchonete), Rei do Espetinho (lanchonete e petiscaria), casamentos, aniversários e outros eventos particulares, entre outros lugares.
        </p>
      </Reveal>
      <Reveal className="mt-12">
        <h3 className="text-sm font-bold uppercase tracking-[0.25em] text-teal">Contrapartidas</h3>
      </Reveal>
      <ul className="mt-5 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {perks.map((p, i) => (
          <Reveal as="li" key={p.title} delay={i} className="rounded-2xl bg-ink2 p-6">
            <span className="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-teal/15 font-bold text-teal">{i + 1}</span>
            <h3 className="text-xl font-bold">{p.title}</h3>
            <p className="mt-2 text-soft">{p.text}</p>
          </Reveal>
        ))}
        <Reveal as="li" delay={perks.length} className="flex flex-col justify-center rounded-2xl bg-teal p-6 text-ink">
          <h3 className="text-xl font-bold">Cotas sob medida</h3>
          <p className="mt-2">Montamos o pacote de acordo com o objetivo e o investimento da sua marca.</p>
        </Reveal>
      </ul>
    </section>
  )
}
