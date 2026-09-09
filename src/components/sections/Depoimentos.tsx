import { useRef } from 'react'
import { ChevronLeft, ChevronRight, Quote, Star } from 'lucide-react'
import { depoimentos } from '../../data/depoimentos'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

export function Depoimentos() {
  const trilho = useRef<HTMLUListElement>(null)

  // ponytail: carrossel em scroll-snap nativo, sem índice nem cálculo de largura
  const rolar = (direcao: 1 | -1) => {
    const el = trilho.current
    if (!el) return
    el.scrollBy({ left: direcao * el.clientWidth * 0.85, behavior: 'smooth' })
  }

  return (
    <section className="container-infocel py-20 lg:py-24">
      <Reveal>
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <SectionTitle
            sobretitulo="Quem já passou aqui"
            titulo="O que dizem os clientes"
            descricao="Avaliações reais de quem comprou ou consertou na loja."
          />
          <div className="flex shrink-0 gap-2">
            <BotaoTrilho rotulo="Depoimentos anteriores" aoClicar={() => rolar(-1)}>
              <ChevronLeft size={20} aria-hidden="true" />
            </BotaoTrilho>
            <BotaoTrilho rotulo="Próximos depoimentos" aoClicar={() => rolar(1)}>
              <ChevronRight size={20} aria-hidden="true" />
            </BotaoTrilho>
          </div>
        </div>
      </Reveal>

      <ul
        ref={trilho}
        tabIndex={0}
        aria-label="Depoimentos de clientes"
        className="mt-12 flex snap-x snap-mandatory gap-5 overflow-x-auto pb-4 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden"
      >
        {depoimentos.map((d) => (
          <li
            key={d.id}
            className="w-[85%] shrink-0 snap-start sm:w-[46%] lg:w-[31.5%]"
          >
            <figure className="flex h-full flex-col vidro rounded-2xl p-7 transition-colors hover:border-azul/50">
              <Quote size={28} className="mb-5 text-azul" aria-hidden="true" />
              <blockquote className="flex-1 leading-relaxed text-white/90">{d.texto}</blockquote>
              <figcaption className="mt-6 border-t border-white/10 pt-5">
                <div className="mb-2 flex gap-0.5" aria-label={`Nota ${d.nota} de 5`}>
                  {Array.from({ length: 5 }, (_, i) => (
                    <Star
                      key={i}
                      size={14}
                      aria-hidden="true"
                      className={i < d.nota ? 'fill-azul text-azul' : 'text-white/15'}
                    />
                  ))}
                </div>
                <p className="font-display font-bold">{d.nome}</p>
                <p className="text-sm text-cinza">Avaliação no Google</p>
              </figcaption>
            </figure>
          </li>
        ))}
      </ul>
    </section>
  )
}

function BotaoTrilho({
  children,
  rotulo,
  aoClicar,
}: {
  children: React.ReactNode
  rotulo: string
  aoClicar: () => void
}) {
  return (
    <button
      type="button"
      onClick={aoClicar}
      aria-label={rotulo}
      className="vidro rounded-full p-3 text-white transition-colors hover:border-azul hover:text-azul-claro"
    >
      {children}
    </button>
  )
}
