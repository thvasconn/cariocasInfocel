import type { ReactElement } from 'react'
import type { CategoriaId } from '../../data/produtos'

type Props = {
  categoria: CategoriaId
  nome: string
  src?: string
  className?: string
  /** `cover` preenche a moldura; `contain` mostra o produto inteiro. */
  ajuste?: 'cover' | 'contain'
}

/**
 * Mostra a foto do produto quando existe. Sem foto, desenha um ícone da
 * categoria sobre o brilho azul — mesmo enquadramento das artes da loja.
 */
export function ProdutoImagem({
  categoria,
  nome,
  src,
  className = '',
  ajuste = 'contain',
}: Props) {
  return (
    <div className={`relative flex items-center justify-center ${className}`}>
      {src ? (
        <img
          src={src}
          alt={nome}
          loading="lazy"
          decoding="async"
          className={`h-full w-full drop-shadow-[0_18px_30px_rgba(0,0,0,0.55)] ${ajuste === 'cover' ? 'object-cover' : 'object-contain'}`}
        />
      ) : (
        <DesenhoCategoria categoria={categoria} />
      )}
    </div>
  )
}

function DesenhoCategoria({ categoria }: { categoria: CategoriaId }) {
  return (
    <svg
      viewBox="0 0 120 120"
      fill="none"
      aria-hidden="true"
      className="relative h-3/5 w-3/5 text-azul-claro/80 drop-shadow-[0_0_18px_rgba(30,144,240,0.55)]"
    >
      {desenhos[categoria]}
    </svg>
  )
}

const traco = {
  stroke: 'currentColor',
  strokeWidth: 2.5,
  strokeLinecap: 'round' as const,
  strokeLinejoin: 'round' as const,
}

const desenhos: Record<CategoriaId, ReactElement> = {
  celulares: (
    <g {...traco}>
      <rect x="38" y="12" width="44" height="96" rx="9" />
      <path d="M53 20h14" />
      <path d="M46 34h28M46 46h20" opacity="0.5" />
      <circle cx="60" cy="98" r="3" />
    </g>
  ),
  capas: (
    <g {...traco}>
      <rect x="36" y="14" width="48" height="92" rx="11" />
      <rect x="44" y="22" width="32" height="76" rx="6" opacity="0.35" />
      <circle cx="52" cy="32" r="5" />
      <circle cx="52" cy="46" r="5" opacity="0.6" />
    </g>
  ),
  peliculas: (
    <g {...traco}>
      <path d="M38 14h44a6 6 0 0 1 6 6v80a6 6 0 0 1-6 6H38a6 6 0 0 1-6-6V20a6 6 0 0 1 6-6Z" />
      <path d="M62 14 88 40" opacity="0.45" />
      <path d="M74 14 88 28" opacity="0.3" />
      <path d="M44 92h20" opacity="0.5" />
    </g>
  ),
  carregadores: (
    <g {...traco}>
      <rect x="30" y="40" width="60" height="52" rx="12" />
      <path d="M46 40V22M74 40V22" />
      <path d="M62 54 52 70h16l-10 16" />
    </g>
  ),
  acessorios: (
    <g {...traco}>
      <path d="M28 74V60a32 32 0 0 1 64 0v14" />
      <rect x="20" y="70" width="18" height="30" rx="9" />
      <rect x="82" y="70" width="18" height="30" rx="9" />
    </g>
  ),
}
