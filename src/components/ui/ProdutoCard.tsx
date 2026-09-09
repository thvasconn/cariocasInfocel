import { forwardRef } from 'react'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import type { Produto } from '../../data/produtos'
import { brl } from '../../lib/whatsapp'
import { Badge } from './Badge'
import { ProdutoImagem } from './ProdutoImagem'

/** Texto da tarja de oferta: desconto quando existe, senão o parcelamento. */
function textoOferta(produto: Produto): string {
  if (produto.precoAntigo) {
    const desconto = Math.round((1 - produto.preco / produto.precoAntigo) * 100)
    return `${desconto}% off`
  }
  return `12x de ${brl.format(produto.preco / 12)}`
}

export const ProdutoCard = forwardRef<HTMLDivElement, { produto: Produto; className?: string }>(
  ({ produto, className = '' }, ref) => (
    <motion.div
      ref={ref}
      whileHover={{ y: -6 }}
      transition={{ type: 'spring', stiffness: 300, damping: 22 }}
      className={`vidro group relative flex h-full w-full flex-col items-center overflow-hidden rounded-2xl text-center transition-colors duration-300 hover:border-azul/50 hover:bg-white/[0.08] ${className}`}
    >
      <Link to={`/produto/${produto.id}`} className="flex h-full w-full flex-col p-5">
        {produto.badge && (
          <div className="absolute top-3 left-3 z-10">
            <Badge tom={produto.badge === 'Promoção' ? 'alerta' : 'azul'}>{produto.badge}</Badge>
          </div>
        )}

        <div className="relative mb-3 flex h-28 w-full items-center justify-center">
          <span
            className="absolute inset-6 rounded-full bg-azul/30 opacity-40 blur-3xl transition-opacity duration-300 group-hover:opacity-100"
            aria-hidden="true"
          />
          <ProdutoImagem
            categoria={produto.categoria}
            nome={produto.nome}
            src={produto.imagens?.[0]}
            ajuste="contain"
            className="h-full w-full transform-gpu will-change-transform transition-transform duration-300 ease-out group-hover:scale-[1.06]"
          />
        </div>

        <div className="flex flex-grow flex-col items-center gap-1">
          <h3 className="font-display text-base leading-tight font-bold text-white transition-colors group-hover:text-azul-claro">
            {produto.nome}
          </h3>
          <p className="line-clamp-1 text-sm leading-relaxed font-light text-cinza">
            {produto.resumo}
          </p>
        </div>

        <div className="mt-3 flex flex-col items-center gap-2">
          <div className="flex flex-col items-center">
            <span className="titulo-fino text-2xl font-medium text-white">
              {brl.format(produto.preco)}
            </span>
            <span className="mt-0.5 text-[0.68rem] tracking-[0.14em] text-cinza/70 uppercase">
              à vista
            </span>
          </div>

          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 text-xs">
            {produto.precoAntigo && (
              <span className="text-cinza/70 line-through">{brl.format(produto.precoAntigo)}</span>
            )}
            <span className="font-semibold text-azul-claro">{textoOferta(produto)}</span>
          </div>
        </div>
      </Link>
    </motion.div>
  ),
)

ProdutoCard.displayName = 'ProdutoCard'
