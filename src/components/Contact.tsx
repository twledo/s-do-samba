import { useEffect, useRef, useState } from 'react'
import { asset, contact } from '../data'
import Button from './Button'
import Reveal from './Reveal'

const labelCls = 'w-28 text-sm font-bold uppercase tracking-wider text-lime'
const linkCls = 'underline-offset-4 hover:text-lime hover:underline'

type CopyState = 'idle' | 'ok' | 'fail'
const copyText: Record<CopyState, string> = { idle: 'Copiar e-mail', ok: 'E-mail copiado!', fail: 'Não deu, copie na mão' }

export default function Contact() {
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

  return (
    <section id="contato" className="mx-auto max-w-6xl px-5 py-20 md:py-28">
      <Reveal className="grid items-center gap-10 rounded-3xl bg-card p-8 md:grid-cols-[16rem_1fr] md:gap-14 md:p-12">
        <img src={asset('logo.png')} alt="Logo S do Samba Pagode" className="mx-auto w-44 md:w-64" loading="lazy" />
        <div>
          <p className="eyebrow">Contato e orçamentos</p>
          <h2 className="font-display text-4xl font-semibold uppercase leading-tight md:text-5xl">Vamos fazer o seu evento sambar?</h2>
          <dl className="mt-6 space-y-3 text-lg">
            <div className="flex flex-wrap gap-x-4"><dt className={labelCls}>Contato</dt><dd>{contact.name}</dd></div>
            <div className="flex flex-wrap gap-x-4">
              <dt className={labelCls}>WhatsApp</dt>
              <dd><a className={linkCls} href={contact.whatsapp} target="_blank" rel="noopener noreferrer">{contact.phoneLabel}</a></dd>
            </div>
            <div className="flex flex-wrap items-center gap-x-4">
              <dt className={labelCls}>E-mail</dt>
              <dd>
                <a className={`break-all ${linkCls}`} href={`mailto:${contact.email}`}>{contact.email}</a>
                <button
                  type="button"
                  onClick={copy}
                  aria-live="polite"
                  className="ml-2 rounded-full border border-white/20 px-3 py-1 text-xs transition-colors hover:border-lime hover:text-lime active:scale-95"
                >
                  {copyText[state]}
                </button>
              </dd>
            </div>
            <div className="flex flex-wrap gap-x-4">
              <dt className={labelCls}>Instagram</dt>
              <dd><a className={linkCls} href={contact.instagram} target="_blank" rel="noopener noreferrer">{contact.instagramHandle}</a></dd>
            </div>
            <div className="flex flex-wrap gap-x-4"><dt className={labelCls}>Base</dt><dd>{contact.base}</dd></div>
          </dl>
          <Button href={contact.whatsapp} target="_blank" rel="noopener noreferrer" className="mt-8 !px-8">Chamar no WhatsApp</Button>
          <p className="mt-5 text-sm text-muted">Nota fiscal (MEI) e contrato formal em todas as apresentações.</p>
        </div>
      </Reveal>
    </section>
  )
}
