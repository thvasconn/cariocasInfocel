import { Hero } from '../components/sections/Hero'
import { Categorias } from '../components/sections/Categorias'
import { Destaques } from '../components/sections/Destaques'
import { Sobre } from '../components/sections/Sobre'
import { Servicos } from '../components/sections/Servicos'
import { Depoimentos } from '../components/sections/Depoimentos'
import { Localizacao } from '../components/sections/Localizacao'
import { InstagramFeed } from '../components/sections/InstagramFeed'
import { CTA } from '../components/sections/CTA'
import { SeparadorArco } from '../components/ui/Arcos'
import { Seo } from '../components/ui/Seo'

export default function Home() {
  return (
    <>
      <Seo
        titulo="Cariocas Infocel — Celulares, Acessórios e Assistência Técnica no Rio de Janeiro"
        descricao="Loja de celulares em Botafogo e Vila Isabel. Aparelhos novos e originais, capas, películas, carregadores e fones. Conserto com garantia e orçamento na hora pelo WhatsApp."
      />
      <Hero />
      <SeparadorArco />
      <Categorias />
      <Destaques />
      <Sobre />
      <Servicos />
      <Depoimentos />
      <Localizacao />
      <InstagramFeed />
      <CTA />
    </>
  )
}
