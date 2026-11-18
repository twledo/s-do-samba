import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type Props = { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' | 'section' }

// Entrada curta ao rolar: um bloco por vez, nunca item a item em listas longas.
export function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.4, ease: 'easeOut', delay: Math.min(delay, 2) * 0.08 }}
    >
      {children}
    </Tag>
  )
}
