import { useMemo, useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import { Search, SlidersHorizontal } from 'lucide-react'
import { categorias, produtos } from '../data/produtos'
import type { CategoriaId } from '../data/produtos'
import { GradeProdutos } from '../components/ui/GradeProdutos'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { CTA } from '../components/sections/CTA'

const TODAS = 'todas'

/** Ninguém digita "película" com acento na busca. */
const semAcento = (texto: string) =>
  texto
    .normalize('NFD')
    .replace(/\p{Diacritic}/gu, '')
    .trim()
    .toLowerCase()

export default function Loja() {
  const [params, setParams] = useSearchParams()
  const [busca, setBusca] = useState('')

  const categoriaAtual = params.get('categoria') ?? TODAS

  const filtrados = useMemo(() => {
    const termo = semAcento(busca)
    return produtos.filter((p) => {
      const daCategoria = categoriaAtual === TODAS || p.categoria === categoriaAtual
      const casaBusca =
        termo === '' || semAcento(p.nome).includes(termo) || semAcento(p.resumo).includes(termo)
      return daCategoria && casaBusca
    })
  }, [busca, categoriaAtual])

  const selecionarCategoria = (id: CategoriaId | typeof TODAS) => {
    if (id === TODAS) setParams({}, { replace: true })
    else setParams({ categoria: id }, { replace: true })
  }

  return (
    <>
      <Seo
        titulo="Loja — Celulares e acessórios | Cariocas Infocel Rio de Janeiro"
        descricao="Celulares novos e originais, capas, películas, carregadores e fones. Compre pelo WhatsApp com entrega em todo o Rio de Janeiro."
      />

      <section className="container-infocel pt-14 pb-8 lg:pt-20">
        <Reveal>
          <SectionTitle
            sobretitulo="Nossa vitrine"
            titulo={
              <>
                A loja <span className="texto-gradiente">inteira</span>
              </>
            }
            descricao="Preços à vista. Parcelamos em até 12x no cartão e entregamos no mesmo dia em Botafogo, Vila Isabel e arredores."
          />
        </Reveal>
      </section>

      <section className="container-infocel pb-20">
        <div className="sticky top-20 z-30 -mx-5 mb-10 border-y border-white/10 bg-noite/90 px-5 py-4 backdrop-blur-xl lg:-mx-8 lg:px-8">
          <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
            <div className="relative w-full lg:max-w-xs">
              <Search
                size={18}
                className="absolute top-1/2 left-4 -translate-y-1/2 text-cinza"
                aria-hidden="true"
              />
              <input
                type="search"
                value={busca}
                onChange={(e) => setBusca(e.target.value)}
                placeholder="Buscar produto…"
                aria-label="Buscar produto pelo nome"
                className="w-full vidro rounded-full py-3 pr-4 pl-11 text-sm text-white placeholder:text-cinza focus:border-azul focus:outline-none"
              />
            </div>

            <div
              className="flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
              role="group"
              aria-label="Filtrar por categoria"
            >
              <SlidersHorizontal
                size={16}
                className="mt-2.5 mr-1 hidden shrink-0 text-cinza lg:block"
                aria-hidden="true"
              />
              <BotaoFiltro
                ativo={categoriaAtual === TODAS}
                aoClicar={() => selecionarCategoria(TODAS)}
              >
                Todas
              </BotaoFiltro>
              {categorias.map((c) => (
                <BotaoFiltro
                  key={c.id}
                  ativo={categoriaAtual === c.id}
                  aoClicar={() => selecionarCategoria(c.id)}
                >
                  {c.nome}
                </BotaoFiltro>
              ))}
            </div>
          </div>
        </div>

        <p className="mb-6 text-sm text-cinza" role="status" aria-live="polite">
          {filtrados.length}{' '}
          {filtrados.length === 1 ? 'produto encontrado' : 'produtos encontrados'}
        </p>

        {filtrados.length > 0 ? (
          <GradeProdutos key={`${categoriaAtual}-${busca}`} produtos={filtrados} />
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 px-6 py-20 text-center">
            <p className="font-display text-xl font-bold uppercase">Nada por aqui</p>
            <p className="mt-2 text-cinza">
              Não achamos nada com esse termo. Chame no WhatsApp que a gente procura no estoque.
            </p>
          </div>
        )}
      </section>

      <CTA
        sobretitulo="Não achou?"
        titulo="Procuramos no estoque para você"
        texto="Nem tudo que temos na loja está no site. Manda o modelo que você quer que a gente confere na hora."
        mensagemWhatsapp="Olá! Estou procurando um produto que não achei no site: ___"
      />
    </>
  )
}

function BotaoFiltro({
  children,
  ativo,
  aoClicar,
}: {
  children: React.ReactNode
  ativo: boolean
  aoClicar: () => void
}) {
  return (
    <button
      type="button"
      onClick={aoClicar}
      aria-pressed={ativo}
      className={`shrink-0 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${
        ativo
          ? 'border-azul bg-azul text-white'
          : 'border-white/10 bg-white/[0.05] text-cinza hover:border-azul/60 hover:text-white'
      }`}
    >
      {children}
    </button>
  )
}
