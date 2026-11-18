import { SiteHeader } from '@/components/SiteHeader'
import { Hero } from '@/components/Hero'
import { About } from '@/components/About'
import { Repertoire } from '@/components/Repertoire'
import { Shows } from '@/components/Shows'
import { Sponsorship } from '@/components/Sponsorship'
import { Differentials } from '@/components/Differentials'
import { Contact } from '@/components/Contact'
import { SiteFooter } from '@/components/SiteFooter'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <SiteHeader />
      <main id="conteudo" tabIndex={-1} className="outline-none">
        <Hero />
        <About />
        <Repertoire />
        <Shows />
        <Sponsorship />
        <Differentials />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
