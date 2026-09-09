import type { ReactNode } from 'react'

export const estiloCampo =
  'w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-white placeholder:text-cinza/70 focus:border-azul focus:outline-none'

type Props = {
  rotulo: string
  htmlFor: string
  erro?: string
  children: ReactNode
}

export function Campo({ rotulo, htmlFor, erro, children }: Props) {
  return (
    <div>
      <label htmlFor={htmlFor} className="mb-2 block text-sm font-semibold text-white">
        {rotulo}
      </label>
      {children}
      {erro && (
        <p id={`${htmlFor}-erro`} className="mt-2 text-sm text-azul-claro" role="alert">
          {erro}
        </p>
      )}
    </div>
  )
}
