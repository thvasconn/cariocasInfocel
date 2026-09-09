import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsappFloatButton } from './WhatsappFloatButton'
import { FundoPremium } from './FundoPremium'

export function Layout() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col">
      <FundoPremium />

      <a
        href="#conteudo"
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-[60] focus:rounded-full focus:bg-azul focus:px-5 focus:py-2.5 focus:font-semibold"
      >
        Pular para o conteúdo
      </a>
      <Header />
      <main id="conteudo" className="flex-1">
        <Suspense fallback={<TelaCarregando />}>
          <Outlet />
        </Suspense>
      </main>
      <Footer />
      <WhatsappFloatButton />
    </div>
  )
}

function TelaCarregando() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status">
      <span className="h-10 w-10 animate-spin rounded-full border-2 border-white/10 border-t-azul" />
      <span className="sr-only">Carregando…</span>
    </div>
  )
}
