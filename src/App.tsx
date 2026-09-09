import { lazy, useEffect } from 'react'
import { BrowserRouter, Link, Route, Routes, useLocation } from 'react-router-dom'
import { Layout } from './components/layout/Layout'
import Home from './pages/Home'
import { classesBotao } from './components/ui/Button'
import { Seo } from './components/ui/Seo'
import { lenis } from './lib/lenis'

// Cada rota interna vira um chunk próprio; a Home entra no bundle inicial.
const Loja = lazy(() => import('./pages/Loja'))
const ProdutoDetalhe = lazy(() => import('./pages/ProdutoDetalhe'))
const Conserto = lazy(() => import('./pages/Conserto'))
const Contato = lazy(() => import('./pages/Contato'))

export default function App() {
  return (
    <BrowserRouter>
      <GerenciarScroll />
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="loja" element={<Loja />} />
          <Route path="produto/:id" element={<ProdutoDetalhe />} />
          <Route path="conserto" element={<Conserto />} />
          <Route path="contato" element={<Contato />} />
          <Route path="*" element={<PaginaNaoEncontrada />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

/** Volta ao topo a cada navegação e leva até a âncora quando a URL tem hash. */
function GerenciarScroll() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      if (lenis) lenis.scrollTo(hash)
      else document.getElementById(hash.slice(1))?.scrollIntoView({ behavior: 'smooth' })
      return
    }
    if (lenis) lenis.scrollTo(0, { immediate: true })
    else window.scrollTo({ top: 0 })
  }, [pathname, hash])

  return null
}

function PaginaNaoEncontrada() {
  return (
    <div className="container-infocel py-32 text-center">
      <Seo
        titulo="Página não encontrada — Cariocas Infocel"
        descricao="A página que você procurou não existe no site da Cariocas Infocel."
      />
      <p className="titulo texto-gradiente text-7xl">404</p>
      <h1 className="titulo mt-4 text-2xl">Essa página não existe</h1>
      <p className="mt-3 text-cinza">O link pode estar velho ou ter sido digitado errado.</p>
      <Link to="/" className={classesBotao('primario', 'lg', 'mt-8')}>
        Ir para a página inicial
      </Link>
    </div>
  )
}
