import { Link } from 'react-router-dom'

type Props = {
  /** Renderiza como texto puro, sem link — para o rodapé de páginas. */
  comoTexto?: boolean
  className?: string
}

export function Logo({ comoTexto = false, className = '' }: Props) {
  const conteudo = (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <svg viewBox="0 0 32 32" className="h-8 w-8 shrink-0" aria-hidden="true" fill="none">
        <path
          d="M16 3a13 13 0 0 1 13 13"
          stroke="#1E90F0"
          strokeWidth="2.6"
          strokeLinecap="round"
        />
        <path
          d="M16 9a7 7 0 0 1 7 7"
          stroke="#5DC3FF"
          strokeWidth="2.2"
          strokeLinecap="round"
          opacity="0.7"
        />
        <rect x="13" y="13" width="6" height="16" rx="2.4" fill="#1E90F0" />
      </svg>
      <span className="flex flex-col items-end leading-none">
        <span className="titulo text-2xl tracking-tight">Cariocas</span>
        <span className="text-xs font-medium tracking-wide text-azul-claro lowercase">infocel</span>
      </span>
    </span>
  )

  if (comoTexto) return conteudo

  return (
    <Link to="/" aria-label="Cariocas Infocel — página inicial" className="shrink-0">
      {conteudo}
    </Link>
  )
}
