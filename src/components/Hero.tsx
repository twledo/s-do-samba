import { motion } from 'motion/react'
import { asset } from '../data'
import Button from './Button'

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] as const } },
}

export default function Hero() {
  return (
    <section id="inicio" className="relative flex flex-col bg-ink pt-[68px] md:min-h-screen md:flex-row md:items-end md:overflow-hidden md:pt-0">
      <div className="relative mt-1.5 w-full shrink-0 md:absolute md:inset-x-0 md:bottom-0 md:top-[76px] md:mt-0">
        <img
          src={asset('integrantes.png')}
          alt="Os quatro integrantes do S do Samba com seus instrumentos em um show"
          width={610}
          height={452}
          className="block h-auto w-full md:h-full md:object-cover md:object-top"
        />
        <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-ink to-transparent md:hidden" />
      </div>
      <div className="absolute inset-x-0 bottom-0 top-[76px] hidden bg-gradient-to-t from-ink via-ink/70 to-ink/20 md:block" />
      <motion.div
        className="relative mx-auto w-full max-w-6xl px-5 pb-12 md:pb-24 md:pt-32"
        initial="hidden"
        animate="show"
        transition={{ staggerChildren: 0.07 }}
      >
        <motion.p variants={item} className="eyebrow">Portfólio artístico 2026</motion.p>
        <motion.h1 variants={item} className="font-display text-6xl font-bold uppercase leading-none sm:text-8xl md:text-9xl">
          S do Samba
        </motion.h1>
        <motion.p variants={item} className="mt-5 max-w-xl text-lg text-soft md:text-2xl">
          Samba de raiz e pagode para shows, eventos e marcas que querem a festa cheia.
        </motion.p>
        <motion.div variants={item} className="mt-8 flex flex-wrap gap-3">
          <Button href="#contato">Pedir orçamento</Button>
          <Button href="#quem-somos" variant="ghost">Conhecer o grupo</Button>
        </motion.div>
      </motion.div>
    </section>
  )
}
