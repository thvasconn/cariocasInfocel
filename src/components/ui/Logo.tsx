import { Link } from 'react-router-dom'

type Props = {
  /** Renderiza como texto puro, sem link — para o rodapé de páginas. */
  comoTexto?: boolean
  className?: string
}

export function Logo({ comoTexto = false, className = '' }: Props) {
  const conteudo = (
    <img
      src="/logo-cariocas-infocel.png"
      alt="Cariocas Infocel"
      className={`h-8 w-auto shrink-0 ${className}`}
    />
  )

  if (comoTexto) return conteudo

  return (
    <Link to="/" aria-label="Cariocas Infocel — página inicial" className="shrink-0">
      {conteudo}
    </Link>
  )
}
