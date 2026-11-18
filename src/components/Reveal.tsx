import type { ReactNode } from 'react'
import { motion } from 'motion/react'

type Props = { children: ReactNode; className?: string; delay?: number; as?: 'div' | 'li' | 'article' }

// Entrada curta ao rolar. O delay é limitado para listas longas não demorarem.
export default function Reveal({ children, className, delay = 0, as = 'div' }: Props) {
  const Tag = motion[as]
  return (
    <Tag
      className={className}
      initial={{ opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: Math.min(delay, 4) * 0.06 }}
    >
      {children}
    </Tag>
  )
}
