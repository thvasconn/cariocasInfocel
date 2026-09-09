import type { ButtonHTMLAttributes } from 'react'

export type VarianteBotao = 'primario' | 'secundario' | 'vidro' | 'fantasma'
export type TamanhoBotao = 'md' | 'lg'

const base =
  'inline-flex items-center justify-center gap-2 rounded-full font-semibold transition-all duration-200 disabled:cursor-not-allowed disabled:opacity-50'

const variantes: Record<VarianteBotao, string> = {
  primario:
    'bg-azul text-white shadow-[0_10px_34px_-10px_rgba(30,144,240,0.95)] hover:-translate-y-0.5 hover:bg-azul-claro hover:text-noite hover:shadow-glow',
  secundario:
    'border border-white/10 bg-white/[0.04] text-white hover:border-azul/60 hover:bg-white/[0.08] hover:text-azul-claro',
  vidro: 'vidro text-white hover:border-azul/60 hover:bg-white/[0.1] hover:text-azul-claro',
  fantasma: 'text-cinza hover:text-azul-claro',
}

const tamanhos: Record<TamanhoBotao, string> = {
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-7 py-3.5 text-base',
}

/**
 * Classes do botão. Use em `<Link>` e `<a>`, onde um `<button>` não serve.
 */
export function classesBotao(
  variante: VarianteBotao = 'primario',
  tamanho: TamanhoBotao = 'md',
  extra = '',
): string {
  return `${base} ${variantes[variante]} ${tamanhos[tamanho]} ${extra}`.trim()
}

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variante?: VarianteBotao
  tamanho?: TamanhoBotao
}

export function Button({
  variante = 'primario',
  tamanho = 'md',
  className = '',
  ...props
}: Props) {
  return <button className={classesBotao(variante, tamanho, className)} {...props} />
}
