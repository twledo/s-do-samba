import type { ReactNode } from 'react'
import { cn } from '@/lib/utils'
import { Reveal } from './Reveal'

type Props = {
  track: string
  kicker: string
  title: ReactNode
  tone?: 'lime' | 'teal'
  className?: string
  id?: string
}

// Cada seção é uma "faixa" do setlist do show.
export function SectionHeading({ track, kicker, title, tone = 'lime', className, id }: Props) {
  return (
    <Reveal className={cn('max-w-3xl', className)}>
      <p className={cn('kicker', tone === 'teal' && 'text-teal')}>
        <span className="font-display text-base tracking-normal">{track}</span>
        <span className="h-px w-8 bg-current" aria-hidden="true" />
        {kicker}
      </p>
      <h2 id={id} className="display-md mt-4 text-balance">{title}</h2>
    </Reveal>
  )
}
