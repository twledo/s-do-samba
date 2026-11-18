import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Members from './components/Members'
import Repertoire from './components/Repertoire'
import Shows from './components/Shows'
import Sponsorship from './components/Sponsorship'
import Differentials from './components/Differentials'
import Contact from './components/Contact'
import Footer from './components/Footer'

export default function App() {
  return (
    <>
      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:fixed focus:left-3 focus:top-3 focus:z-[60] focus:rounded-full focus:bg-lime focus:px-4 focus:py-2 focus:font-bold focus:text-ink"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo">
        <Hero />
        <About />
        <Members />
        <Repertoire />
        <Shows />
        <Sponsorship />
        <Differentials />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
