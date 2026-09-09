import type { ReactNode } from 'react'

type Tom = 'azul' | 'neutro' | 'alerta'

const tons: Record<Tom, string> = {
  azul: 'bg-azul text-white',
  neutro: 'vidro/80 text-cinza',
  alerta: 'bg-azul-claro text-noite',
}

export function Badge({ children, tom = 'azul' }: { children: ReactNode; tom?: Tom }) {
  return (
    <span
      className={`inline-flex items-center rounded-full px-3 py-1 text-[0.68rem] font-bold tracking-[0.14em] uppercase ${tons[tom]}`}
    >
      {children}
    </span>
  )
}
