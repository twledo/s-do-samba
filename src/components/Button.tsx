import type { AnchorHTMLAttributes } from 'react'
import { motion } from 'motion/react'

const variants = {
  primary: 'bg-lime text-ink hover:brightness-110',
  ghost: 'border border-paper/30 hover:border-lime hover:text-lime',
} as const

type Props = AnchorHTMLAttributes<HTMLAnchorElement> & { variant?: keyof typeof variants }

export default function Button({ variant = 'primary', className = '', ...props }: Props) {
  return (
    <motion.a
      whileTap={{ scale: 0.97 }}
      transition={{ type: 'spring', stiffness: 500, damping: 30 }}
      className={`inline-block rounded-full px-7 py-3 text-center font-bold ${variants[variant]} ${className}`}
      {...(props as object)}
    />
  )
}
