import { motion } from 'motion/react'
import { ArrowDown } from 'lucide-react'
import { asset, contact } from '@/data'
import { ButtonLink } from '@/components/ui/button'

const ease = [0.22, 1, 0.36, 1] as const
const item = {
  hidden: { opacity: 0, y: 24 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease } },
}

const facts = ['2h30 de show', 'Até 500 pessoas', 'Som e luz próprios', 'NF e contrato']

export function Hero() {
  return (
    <section id="inicio" aria-labelledby="hero-title" className="relative overflow-hidden pt-16">
      <div className="mx-auto grid max-w-6xl gap-8 px-4 pb-12 pt-6 sm:px-6 md:grid-cols-12 md:items-end md:pb-20 md:pt-14">
        <motion.div
          className="md:col-span-7"
          initial="hidden"
          animate="show"
          transition={{ staggerChildren: 0.08 }}
        >
          <motion.p variants={item} className="kicker">
            Samba e pagode · {contact.base.split(',')[0]}
          </motion.p>
          <motion.h1 id="hero-title" variants={item} className="display-xl mt-5">
            <span className="text-outline">S</span> do Samba
            <span className="mt-2 block text-lime">para a festa cheia.</span>
          </motion.h1>
          <motion.p variants={item} className="mt-6 max-w-lg text-lg text-soft md:text-xl">
            Samba de raiz e pagode para shows, eventos e marcas. Quatro amigos, repertório ensaiado e estrutura própria.
          </motion.p>
          <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
            <ButtonLink href="#contato" size="lg">Pedir orçamento</ButtonLink>
            <ButtonLink href="#quem-somos" size="lg" variant="outline">
              Conhecer o grupo <ArrowDown />
            </ButtonLink>
          </motion.div>
        </motion.div>

        <motion.figure
          className="relative md:col-span-5"
          initial={{ opacity: 0, scale: 0.96, rotate: 0 }}
          animate={{ opacity: 1, scale: 1, rotate: -1.5 }}
          transition={{ duration: 0.6, ease, delay: 0.15 }}
        >
          <div className="overflow-hidden rounded-[1.75rem] bg-paper ring-1 ring-border">
            <img
              src={asset('integrantes.png')}
              alt="Os quatro integrantes do S do Samba com violão, saxofone, tantã e pandeiro"
              width={610}
              height={452}
              className="aspect-[4/3] w-full object-cover object-top"
            />
          </div>
          <figcaption className="absolute -bottom-4 left-4 rotate-2 rounded-full bg-teal px-4 py-1.5 text-sm font-bold text-ink">
            Abner, Matias, Cristian e Jean
          </figcaption>
        </motion.figure>
      </div>

      <div className="border-y border-border bg-ink2">
        <ul className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-4 py-4 text-sm font-medium text-soft sm:px-6">
          {facts.map((f) => (
            <li key={f} className="flex items-center gap-2">
              <span className="size-1.5 rounded-full bg-lime" aria-hidden="true" />
              {f}
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
