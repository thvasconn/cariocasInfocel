import { IconeInstagram } from '../ui/IconeInstagram'
import { site } from '../../data/site'
import { Arcos } from '../ui/Arcos'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'
import { classesBotao } from '../ui/Button'

/**
 * Grade de posts no estilo das artes da loja. Trocar por fotos reais (ou pelo
 * embed oficial do Instagram) quando o feed estiver disponível.
 */
const posts = [
  {
    id: 'p1',
    titulo: 'Power bank 20.000mAh',
    itens: ['Carrega o celular 4x', 'Carga rápida de 22,5W', 'Display de percentual'],
    tag: 'R$ 179,90',
  },
  {
    id: 'p2',
    titulo: 'Troca de tela em 1h',
    itens: ['Tela original ou premium', 'Orçamento antes do serviço', '90 dias de garantia'],
    tag: 'A partir de R$ 249',
  },
  {
    id: 'p3',
    titulo: 'Película 3D grátis',
    itens: ['Na compra de qualquer capa', 'Aplicação feita na hora', 'Garantia contra bolhas'],
    tag: 'Promoção',
  },
  {
    id: 'p4',
    titulo: 'iPhone 13 lacrado',
    itens: ['Lacrado de fábrica', '1 ano de garantia Apple', 'Nota fiscal inclusa'],
    tag: 'R$ 3.099',
  },
  {
    id: 'p5',
    titulo: 'Fone TWS Pro',
    itens: ['Cancelamento de ruído', '30h com o estojo', 'Pareia com iPhone e Android'],
    tag: 'R$ 199,90',
  },
  {
    id: 'p6',
    titulo: 'Celular molhou?',
    itens: ['Limpeza em ultrassônica', 'Diagnóstico honesto', 'Não teve conserto, não cobramos'],
    tag: 'Assistência',
  },
]

export function InstagramFeed() {
  return (
    <section className="container-infocel py-20 lg:py-24">
      <Reveal>
        <SectionTitle
          sobretitulo="Acompanhe a loja"
          titulo={
            <>
              Toda promoção sai primeiro no{' '}
              <span className="texto-gradiente">Instagram</span>
            </>
          }
          descricao={`Novidades de estoque, preço de conserto e sorteios em ${site.handleInstagram}.`}
          alinhamento="centro"
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, i) => (
          <Reveal key={post.id} delay={i * 0.05}>
            <a
              href={site.urlInstagram}
              target="_blank"
              rel="noopener noreferrer"
              className="group relative flex aspect-square flex-col overflow-hidden vidro rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1 hover:border-azul/60"
            >
              <Arcos className="pointer-events-none absolute -top-24 -right-24 h-64 w-64 opacity-50 transition-transform duration-700 group-hover:rotate-45" />

              <div className="relative my-auto">
                <span className="text-[0.65rem] font-bold tracking-[0.2em] text-azul uppercase">
                  {post.tag}
                </span>
                <h3 className="titulo mt-3 text-2xl text-balance">{post.titulo}</h3>

                <ul className="mt-5 space-y-2.5">
                  {post.itens.map((item) => (
                    <li key={item} className="flex gap-2.5 text-sm text-cinza">
                      <span
                        className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-azul"
                        aria-hidden="true"
                      />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <span className="relative flex items-center gap-2 border-t border-white/10 pt-4 text-xs font-semibold text-cinza">
                <IconeInstagram size={14} className="text-azul" />
                {site.handleInstagram}
              </span>
            </a>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.1}>
        <div className="mt-12 text-center">
          <a
            href={site.urlInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className={classesBotao('secundario', 'lg')}
          >
            <IconeInstagram size={18} />
            Seguir {site.handleInstagram}
          </a>
        </div>
      </Reveal>
    </section>
  )
}
