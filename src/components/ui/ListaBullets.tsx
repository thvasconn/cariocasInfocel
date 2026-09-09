type Props = {
  itens: string[]
  className?: string
}

/** Lista com bullets azuis, como nas artes de produto da loja. */
export function ListaBullets({ itens, className = '' }: Props) {
  return (
    <ul className={`space-y-3 ${className}`}>
      {itens.map((item) => (
        <li key={item} className="flex gap-3 text-cinza">
          <span
            className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-azul shadow-[0_0_10px_2px_rgba(30,144,240,0.7)]"
            aria-hidden="true"
          />
          <span className="leading-relaxed">{item}</span>
        </li>
      ))}
    </ul>
  )
}
