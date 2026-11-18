import { useEffect, useRef } from 'react'
import { animate, useInView, useReducedMotion } from 'motion/react'

export default function CountUp({ to }: { to: number }) {
  const ref = useRef<HTMLSpanElement>(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const reduce = useReducedMotion()

  useEffect(() => {
    if (!inView || reduce || !ref.current) return
    const node = ref.current
    const controls = animate(0, to, {
      duration: 1.2,
      ease: 'easeOut',
      onUpdate: (v) => { node.textContent = String(Math.round(v)) },
    })
    return () => controls.stop()
  }, [inView, reduce, to])

  // O valor final já está no HTML: sem JS ou com movimento reduzido, o número aparece certo.
  return <span ref={ref}>{to}</span>
}
