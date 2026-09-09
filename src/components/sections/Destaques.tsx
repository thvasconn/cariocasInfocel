import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { produtosDestaque } from '../../data/produtos'
import { GradeProdutos } from '../ui/GradeProdutos'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'
import { classesBotao } from '../ui/Button'

export function Destaques() {
  return (
    <section className="relative z-0 border-y border-white/10 bg-noite py-20 lg:py-24">
      <div className="container-infocel">
        <Reveal>
          <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
            <SectionTitle
              sobretitulo="Saindo da vitrine"
              titulo="Produtos em destaque"
              descricao="Uma seleção do que mais sai nas três lojas neste mês."
            />
            <Link
              to="/loja"
              className={classesBotao('secundario', 'md', 'shrink-0 self-start sm:self-auto')}
            >
              Ver a loja inteira
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>

        <div className="mt-12">
          <GradeProdutos produtos={produtosDestaque.slice(0, 8)} />
        </div>
      </div>
    </section>
  )
}
