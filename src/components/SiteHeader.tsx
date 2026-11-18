import { useEffect, useState } from 'react'
import { motion } from 'motion/react'
import { Menu } from 'lucide-react'
import { asset, navLinks } from '@/data'
import { cn } from '@/lib/utils'
import { Button, ButtonLink } from '@/components/ui/button'
import { Sheet, SheetClose, SheetContent, SheetDescription, SheetTitle, SheetTrigger } from '@/components/ui/sheet'

function useActiveSection() {
  const [active, setActive] = useState('')
  useEffect(() => {
    const obs = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-40% 0px -55% 0px' },
    )
    for (const id of [...navLinks.map((l) => l.id), 'inicio', 'contato']) {
      const el = document.getElementById(id)
      if (el) obs.observe(el)
    }
    return () => obs.disconnect()
  }, [])
  return active
}

function useScrolled() {
  const [scrolled, setScrolled] = useState(false)
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])
  return scrolled
}

export function SiteHeader() {
  const active = useActiveSection()
  const scrolled = useScrolled()

  return (
    <header
      className={cn(
        'fixed inset-x-0 top-0 z-40 transition-[background-color,box-shadow] duration-300',
        scrolled ? 'bg-ink/90 shadow-[0_1px_0_rgb(242_244_236/0.08)] backdrop-blur-lg' : 'bg-transparent',
      )}
    >
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6" aria-label="Principal">
        <a href="#inicio" className="flex items-center gap-2.5 rounded-md" aria-label="S do Samba, voltar ao início">
          <img src={asset('logo.png')} alt="" width={40} height={40} className="size-10" />
          <span className="font-display text-lg font-semibold uppercase tracking-wide">S do Samba</span>
        </a>

        <ul className="hidden items-center gap-1 text-sm font-medium md:flex">
          {navLinks.map((l) => {
            const isActive = active === l.id
            return (
              <li key={l.id}>
                <a
                  href={`#${l.id}`}
                  aria-current={isActive ? 'location' : undefined}
                  className={cn(
                    'relative block rounded-full px-3.5 py-2 transition-colors',
                    isActive ? 'text-ink' : 'text-soft hover:text-paper',
                  )}
                >
                  {isActive && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-lime"
                      transition={{ type: 'spring', stiffness: 500, damping: 40 }}
                    />
                  )}
                  {l.label}
                </a>
              </li>
            )
          })}
          <li className="ml-3">
            <ButtonLink href="#contato" size="sm">Pedir orçamento</ButtonLink>
          </li>
        </ul>

        <Sheet>
          <SheetTrigger asChild>
            <Button variant="ghost" size="icon" className="md:hidden" aria-label="Abrir menu">
              <Menu className="size-6" />
            </Button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[85vw] max-w-xs border-border bg-ink2 px-6 pt-16">
            <SheetTitle className="sr-only">Menu</SheetTitle>
            <SheetDescription className="sr-only">Navegue pelas seções do site</SheetDescription>
            <ul className="flex flex-col">
              {navLinks.map((l, i) => (
                <li key={l.id} className="border-b border-border">
                  <SheetClose asChild>
                    <a href={`#${l.id}`} className="flex items-baseline gap-3 rounded-md py-4 font-display text-2xl uppercase">
                      <span className="text-sm text-lime">{String(i + 1).padStart(2, '0')}</span>
                      {l.label}
                    </a>
                  </SheetClose>
                </li>
              ))}
            </ul>
            <SheetClose asChild>
              <ButtonLink href="#contato" size="lg" className="mt-6 w-full">Pedir orçamento</ButtonLink>
            </SheetClose>
          </SheetContent>
        </Sheet>
      </nav>
    </header>
  )
}
