import { useEffect, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { asset, navLinks } from '../data'
import Button from './Button'

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' },
    )
    navLinks.forEach((l) => {
      const el = document.getElementById(l.id)
      if (el) obs.observe(el)
    })
    return () => obs.disconnect()
  }, [])
  return active
}

export default function Header() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const active = useActiveSection()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    if (!open) return
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 bg-ink backdrop-blur-xl transition-shadow duration-300 md:bg-ink/80 ${
        scrolled ? 'shadow-[0_1px_0_rgba(255,255,255,.08)]' : ''
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-3" aria-label="S do Samba, início">
          <img src={asset('logo.png')} alt="" className="h-11 w-11" />
          <span className="font-display text-xl font-semibold uppercase tracking-wide">S do Samba</span>
        </a>
        <ul className="hidden items-center gap-7 text-sm font-medium md:flex">
          {navLinks.map((l) => (
            <li key={l.id}>
              <a
                href={`#${l.id}`}
                className={`relative py-1 transition-colors hover:text-lime ${active === l.id ? 'text-lime' : ''}`}
              >
                {l.label}
                {active === l.id && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 bg-lime"
                    transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                  />
                )}
              </a>
            </li>
          ))}
          <li>
            <Button href="#contato" className="!px-5 !py-2 text-sm">Orçamento</Button>
          </li>
        </ul>
        <button
          type="button"
          className="rounded-lg p-2 md:hidden"
          aria-label={open ? 'Fechar menu' : 'Abrir menu'}
          aria-expanded={open}
          aria-controls="mobileMenu"
          onClick={() => setOpen((o) => !o)}
        >
          <svg className="h-7 w-7" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" aria-hidden="true">
            {open ? <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" /> : <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobileMenu"
            className="overflow-hidden bg-ink/95 backdrop-blur md:hidden"
            initial={{ height: 0 }}
            animate={{ height: 'auto', transition: { duration: 0.25, ease: 'easeOut' } }}
            exit={{ height: 0, transition: { duration: 0.15 } }}
          >
            <ul className="flex flex-col gap-1 px-5 pb-5 text-lg font-medium">
              {navLinks.map((l) => (
                <li key={l.id}>
                  <a className="block py-2" href={`#${l.id}`} onClick={() => setOpen(false)}>{l.label}</a>
                </li>
              ))}
              <li>
                <Button href="#contato" className="mt-2 block !py-3" onClick={() => setOpen(false)}>Pedir orçamento</Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}
