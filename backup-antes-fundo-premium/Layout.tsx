import { Suspense } from 'react'
import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Footer } from './Footer'
import { WhatsappFloatButton } from './WhatsappFloatButton'

export function Layout() {
  return (
    <div className="relative isolate flex min-h-dvh flex-col">
      {/* Atmosfera de fundo: é o que os painéis de vidro desfocam ao rolar. */}
      <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
        <div className="absolute -top-40 -left-32 h-[38rem] w-[38rem] rounded-full bg-[radial-gradient(circle,rgba(30,144,240,0.16),transparent_65%)] blur-3xl" />
        <div className="absolute top-1/3 -right-40 h-[42rem] w-[42rem] rounded-full bg-[radial-gradient(circle,rgba(93,195,255,0.1),transparent_65%)] blur-3xl animate-pulsar-suave" />
        <div className="absolute bottom-0 left-1/4 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(30,144,240,0.09),transparent_70%)] blur-3xl" />
      </div>

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
