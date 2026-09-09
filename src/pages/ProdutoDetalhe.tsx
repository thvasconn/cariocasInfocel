import { useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import { ArrowLeft, Check, MessageCircle, ShieldCheck, Truck } from 'lucide-react'
import { categorias, produtoPorId, produtos } from '../data/produtos'
import { brl, linkWhatsapp } from '../lib/whatsapp'
import { ProdutoImagem } from '../components/ui/ProdutoImagem'
import { GradeProdutos } from '../components/ui/GradeProdutos'
import { Badge } from '../components/ui/Badge'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { classesBotao } from '../components/ui/Button'

const garantias = [
  { Icone: ShieldCheck, texto: 'Garantia e nota fiscal inclusas' },
  { Icone: Truck, texto: 'Entrega no mesmo dia em Botafogo e Vila Isabel' },
  { Icone: Check, texto: 'Parcelamos em até 12x no cartão' },
]

export default function ProdutoDetalhe() {
  const { id } = useParams<{ id: string }>()
  const produto = id ? produtoPorId(id) : undefined
  const [imagemAtiva, setImagemAtiva] = useState(0)

  if (!produto) return <NaoEncontrado />

  const categoria = categorias.find((c) => c.id === produto.categoria)
  const relacionados = produtos
    .filter((p) => p.categoria === produto.categoria && p.id !== produto.id)
    .slice(0, 4)

  return (
    <>
      <Seo
        titulo={`${produto.nome} — Cariocas Infocel Rio de Janeiro`}
        descricao={produto.resumo}
      />

      <div className="container-infocel pt-8 pb-20 lg:pt-12">
        <nav aria-label="Você está em" className="mb-8 flex flex-wrap gap-2 text-sm text-cinza">
          <Link to="/loja" className="inline-flex items-center gap-1.5 hover:text-azul-claro">
            <ArrowLeft size={14} aria-hidden="true" />
            Loja
          </Link>
          <span aria-hidden="true">/</span>
          <Link to={`/loja?categoria=${produto.categoria}`} className="hover:text-azul-claro">
            {categoria?.nome}
          </Link>
          <span aria-hidden="true">/</span>
          <span className="text-white">{produto.nome}</span>
        </nav>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <Reveal>
            <div className="overflow-hidden vidro rounded-3xl">
              <ProdutoImagem
                categoria={produto.categoria}
                nome={produto.nome}
                src={produto.imagens?.[imagemAtiva]}
                ajuste="contain"
                className="aspect-square w-full bg-noite p-8"
              />
            </div>

            {produto.imagens && produto.imagens.length > 1 && (
              <div className="mt-4 flex gap-3">
                {produto.imagens.map((img, i) => (
                  <button
                    key={img}
                    type="button"
                    onClick={() => setImagemAtiva(i)}
                    aria-label={`Ver imagem ${i + 1} de ${produto.nome}`}
                    aria-pressed={i === imagemAtiva}
                    className={`h-20 w-20 overflow-hidden rounded-xl border transition-colors ${
                      i === imagemAtiva ? 'border-azul' : 'border-white/10 hover:border-azul/60'
                    }`}
                  >
                    <img
                      src={img}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="h-full w-full object-cover"
                    />
                  </button>
                ))}
              </div>
            )}
          </Reveal>

          <Reveal delay={0.08}>
            <div className="flex flex-wrap items-center gap-3">
              {produto.badge && (
                <Badge tom={produto.badge === 'Promoção' ? 'alerta' : 'azul'}>
                  {produto.badge}
                </Badge>
              )}
              <Badge tom="neutro">{categoria?.nome}</Badge>
            </div>

            <h1 className="titulo mt-5 text-3xl text-balance sm:text-5xl">{produto.nome}</h1>
            <p className="mt-5 leading-relaxed text-cinza">{produto.descricao}</p>

            <div className="mt-8 flex flex-wrap items-end gap-4 border-y border-white/10 py-7">
              <div>
                {produto.precoAntigo && (
                  <p className="text-sm text-cinza line-through">
                    {brl.format(produto.precoAntigo)}
                  </p>
                )}
                <p className="titulo texto-gradiente text-4xl sm:text-5xl">
                  {brl.format(produto.preco)}
                </p>
              </div>
              <p className="pb-1 text-sm text-cinza">
                ou 12x de {brl.format(produto.preco / 12)} no cartão
              </p>
            </div>

            <a
              href={linkWhatsapp(
                `Olá! Tenho interesse no ${produto.nome} (${brl.format(
                  produto.preco,
                )}) que vi no site da Cariocas Infocel. Ainda tem disponível?`,
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={classesBotao('primario', 'lg', 'mt-8 w-full sm:w-auto')}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Comprar via WhatsApp
            </a>

            <ul className="mt-8 space-y-3">
              {garantias.map(({ Icone, texto }) => (
                <li key={texto} className="flex items-center gap-3 text-sm text-cinza">
                  <Icone size={16} className="shrink-0 text-azul" aria-hidden="true" />
                  {texto}
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h2 className="font-display text-lg font-bold uppercase">Especificações</h2>
              <dl className="mt-4 divide-y divide-white/10 overflow-hidden rounded-2xl border border-white/10">
                {produto.specs.map((spec) => (
                  <div
                    key={spec.label}
                    className="flex flex-col gap-1 bg-white/[0.05] px-5 py-4 sm:flex-row sm:justify-between sm:gap-6"
                  >
                    <dt className="text-sm text-cinza">{spec.label}</dt>
                    <dd className="text-sm font-semibold text-white sm:text-right">{spec.valor}</dd>
                  </div>
                ))}
              </dl>
            </div>
          </Reveal>
        </div>

        {relacionados.length > 0 && (
          <section className="mt-24">
            <h2 className="titulo text-2xl sm:text-3xl">Quem viu isso, levou também</h2>
            <div className="mt-8">
              <GradeProdutos produtos={relacionados} />
            </div>
          </section>
        )}
      </div>
    </>
  )
}

function NaoEncontrado() {
  return (
    <div className="container-infocel py-32 text-center">
      <Seo titulo="Produto não encontrado — Cariocas Infocel" descricao="Este produto não está mais no site." />
      <p className="titulo texto-gradiente text-6xl">404</p>
      <h1 className="titulo mt-4 text-2xl">Produto não encontrado</h1>
      <p className="mt-3 text-cinza">
        Esse item pode ter saído do estoque. Dá uma olhada no resto da vitrine.
      </p>
      <Link to="/loja" className={classesBotao('primario', 'lg', 'mt-8')}>
        Voltar para a loja
      </Link>
    </div>
  )
}
