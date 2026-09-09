import type { ReactNode } from 'react'

type Props = {
  children: ReactNode
  className?: string
  /** Acende a borda e levanta o card no hover. */
  interativo?: boolean
}

export function Card({ children, className = '', interativo = false }: Props) {
  return (
    <div
      className={`vidro relative overflow-hidden rounded-2xl ${
        interativo
          ? 'transition-all duration-300 hover:-translate-y-1.5 hover:border-azul/50 hover:bg-white/[0.07] hover:shadow-card'
          : ''
      } ${className}`}
    >
      {children}
    </div>
  )
}
