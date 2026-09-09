import type { ReactNode } from 'react'

type Props = {
  /** Texto pequeno em caixa alta acima do título. */
  sobretitulo?: string
  titulo: ReactNode
  descricao?: string
  alinhamento?: 'esquerda' | 'centro'
  className?: string
}

export function SectionTitle({
  sobretitulo,
  titulo,
  descricao,
  alinhamento = 'esquerda',
  className = '',
}: Props) {
  const centro = alinhamento === 'centro'
  return (
    <div className={`${centro ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {sobretitulo && (
        <p
          className={`mb-4 flex items-center gap-2 text-xs font-bold tracking-[0.28em] text-azul uppercase ${
            centro ? 'justify-center' : ''
          }`}
        >
          <span className="h-px w-6 bg-azul" aria-hidden="true" />
          {sobretitulo}
        </p>
      )}
      <h2 className="titulo text-3xl text-balance sm:text-4xl lg:text-5xl">{titulo}</h2>
      {descricao && <p className="mt-5 text-base leading-relaxed text-cinza">{descricao}</p>}
    </div>
  )
}
