import { useEffect, useRef, useState } from 'react'
import { Check, Copy, MessageCircle } from 'lucide-react'
import { asset, contact } from '@/data'
import { Button, ButtonLink } from '@/components/ui/button'
import { Reveal } from './Reveal'

type CopyState = 'idle' | 'ok' | 'fail'
const copyText: Record<CopyState, string> = { idle: 'Copiar', ok: 'Copiado', fail: 'Copie manualmente' }

const linkCls = 'rounded-sm underline decoration-paper/30 underline-offset-4 transition-colors hover:text-lime hover:decoration-lime'

export function Contact() {
  const [state, setState] = useState<CopyState>('idle')
  const timer = useRef<number>(undefined)
  useEffect(() => () => window.clearTimeout(timer.current), [])

  async function copy() {
    try {
      await navigator.clipboard.writeText(contact.email)
      setState('ok')
    } catch {
      setState('fail')
    }
    window.clearTimeout(timer.current)
    timer.current = window.setTimeout(() => setState('idle'), 2000)
  }

  const rows = [
    { label: 'Contato', value: <span>{contact.name}</span> },
    {
      label: 'WhatsApp',
      value: <a className={linkCls} href={contact.whatsapp} target="_blank" rel="noopener noreferrer">{contact.phoneLabel}</a>,
    },
    {
      label: 'E-mail',
      value: (
        <span className="flex flex-wrap items-center gap-2">
          <a className={`break-all ${linkCls}`} href={`mailto:${contact.email}`}>{contact.email}</a>
          <Button type="button" variant="outline" size="sm" onClick={copy} className="h-8 px-3 text-xs">
            {state === 'ok' ? <Check /> : <Copy />}
            <span aria-live="polite">{copyText[state]}</span>
          </Button>
        </span>
      ),
    },
    {
      label: 'Instagram',
      value: <a className={linkCls} href={contact.instagram} target="_blank" rel="noopener noreferrer">{contact.instagramHandle}</a>,
    },
    { label: 'Base', value: <span>{contact.base}</span> },
  ]

  return (
    <section id="contato" aria-labelledby="contato-title" className="relative overflow-hidden bg-lime text-ink [&_*:focus-visible]:outline-ink">
      <img
        src={asset('logo.png')}
        alt=""
        aria-hidden="true"
        loading="lazy"
        className="pointer-events-none absolute -right-16 -top-10 w-72 opacity-15 mix-blend-multiply md:w-[28rem]"
      />
      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-20 sm:px-6 md:grid-cols-12 md:py-28">
        <Reveal className="md:col-span-6">
          <p className="kicker text-ink">
            <span className="font-display text-base tracking-normal">Bis</span>
            <span className="h-px w-8 bg-current" aria-hidden="true" />
            Contato e orçamentos
          </p>
          <h2 id="contato-title" className="display-xl mt-5">Vamos fazer o seu evento sambar?</h2>
          <ButtonLink
            href={contact.whatsapp}
            target="_blank"
            rel="noopener noreferrer"
            variant="dark"
            size="lg"
            className="mt-8"
          >
            <MessageCircle /> Chamar no WhatsApp
          </ButtonLink>
        </Reveal>

        <Reveal delay={1} className="md:col-span-6 md:pt-4">
          <div className="rounded-[1.75rem] bg-ink p-6 text-paper sm:p-8 [&_*:focus-visible]:outline-lime">
            <dl className="divide-y divide-border">
              {rows.map((r) => (
                <div key={r.label} className="grid gap-1 py-3.5 first:pt-0 last:pb-0 sm:grid-cols-[7rem_1fr] sm:gap-4">
                  <dt className="text-xs font-bold uppercase tracking-[0.2em] text-lime sm:pt-1">{r.label}</dt>
                  <dd className="text-lg">{r.value}</dd>
                </div>
              ))}
            </dl>
          </div>
          <p className="mt-5 text-sm font-medium">Nota fiscal (MEI) e contrato formal em todas as apresentações.</p>
        </Reveal>
      </div>
    </section>
  )
}
