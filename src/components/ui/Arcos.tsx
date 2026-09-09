type ArcosProps = {
  className?: string
}

/**
 * Anéis concêntricos em azul — o elemento gráfico recorrente da marca,
 * herdado das artes de Instagram da loja.
 */
export function Arcos({ className = '' }: ArcosProps) {
  return (
    <svg viewBox="0 0 400 400" fill="none" aria-hidden="true" className={className}>
      <defs>
        <linearGradient id="infocel-arco" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#5DC3FF" />
          <stop offset="45%" stopColor="#1E90F0" />
          <stop offset="100%" stopColor="#1E90F0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <g stroke="url(#infocel-arco)" strokeLinecap="round" fill="none">
        <circle cx="200" cy="200" r="196" strokeWidth="1" pathLength={100} strokeDasharray="62 38" />
        <circle
          cx="200"
          cy="200"
          r="162"
          strokeWidth="2"
          pathLength={100}
          strokeDasharray="34 66"
          transform="rotate(28 200 200)"
        />
        <circle
          cx="200"
          cy="200"
          r="126"
          strokeWidth="1"
          pathLength={100}
          strokeDasharray="48 52"
          transform="rotate(-64 200 200)"
        />
        <circle
          cx="200"
          cy="200"
          r="88"
          strokeWidth="3"
          pathLength={100}
          strokeDasharray="20 80"
          transform="rotate(140 200 200)"
        />
      </g>
    </svg>
  )
}

/** Divisor de seção: uma curva azul fina atravessando a largura da página. */
export function SeparadorArco({ className = '' }: ArcosProps) {
  return (
    <svg
      viewBox="0 0 1200 64"
      preserveAspectRatio="none"
      fill="none"
      aria-hidden="true"
      className={`h-10 w-full ${className}`}
    >
      <defs>
        <linearGradient id="infocel-separador" x1="0" y1="0" x2="1" y2="0">
          <stop offset="0%" stopColor="#1E90F0" stopOpacity="0" />
          <stop offset="50%" stopColor="#5DC3FF" />
          <stop offset="100%" stopColor="#1E90F0" stopOpacity="0" />
        </linearGradient>
      </defs>
      <path d="M0 62 Q600 -4 1200 62" stroke="url(#infocel-separador)" strokeWidth="1.5" />
      <path d="M0 62 Q600 20 1200 62" stroke="url(#infocel-separador)" strokeWidth="1" opacity="0.4" />
    </svg>
  )
}
