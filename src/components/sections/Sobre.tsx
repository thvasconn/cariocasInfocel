import { Arcos } from '../ui/Arcos'
import { ListaBullets } from '../ui/ListaBullets'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

const diferenciais = [
  'Garantia por escrito na nota — 90 dias no conserto e no seminovo, 1 ano nos aparelhos lacrados.',
  'Entrega rápida no Rio: mesmo dia para Botafogo, Vila Isabel e arredores.',
  'Assistência técnica própria, com bancada nas três lojas. Seu aparelho não vai para lugar nenhum.',
  'Produtos originais e homologados pela Anatel. Nada de carregador genérico que queima bateria.',
  'Orçamento fechado antes do serviço. Se você desistir, o diagnóstico sai de graça.',
  'Atendimento pelo WhatsApp de segunda a sábado, respondido por quem trabalha na loja.',
]

const numeros = [
  { valor: '3', rotulo: 'lojas: Botafogo e Vila Isabel' },
  { valor: '18k+', rotulo: 'aparelhos consertados' },
  { valor: '4,9', rotulo: 'de média no Google' },
  { valor: '90', rotulo: 'dias de garantia' },
]

export function Sobre() {
  return (
    <section id="sobre" className="relative overflow-hidden py-20 lg:py-24">
      <Arcos className="pointer-events-none absolute -top-32 -left-40 h-[32rem] w-[32rem] opacity-30" />

      <div className="container-infocel relative grid gap-14 lg:grid-cols-2 lg:items-center">
        <Reveal>
          <SectionTitle
            sobretitulo="Por que a Cariocas Infocel"
            titulo={
              <>
                Loja de rua, com <span className="texto-gradiente">cara de gente</span>
              </>
            }
            descricao="A Cariocas Infocel abriu em 2013 numa loja pequena em Vila Isabel. Hoje são três endereços — um em Botafogo e dois em Vila Isabel — e a mesma bancada de sempre, só que maior."
          />
          <ListaBullets itens={diferenciais} className="mt-9" />
        </Reveal>

        <Reveal delay={0.1}>
          <figure className="group relative mb-4 overflow-hidden rounded-2xl border border-white/10">
            <img
              src="/img/vila-isabel-antiga.webp"
              alt="Bonde e casario de Vila Isabel no começo do século XX"
              loading="lazy"
              decoding="async"
              className="h-56 w-full object-cover opacity-45 grayscale transition-all duration-700 group-hover:scale-105 group-hover:opacity-65"
            />
            <div
              className="absolute inset-0 bg-gradient-to-t from-noite via-noite/40 to-transparent"
              aria-hidden="true"
            />
            <figcaption className="absolute bottom-0 p-6 text-sm text-cinza">
              <span className="font-display block font-bold uppercase text-white">
                Vila Isabel, onde tudo começou
              </span>
              O bairro do bonde e do Boulevard — e da nossa primeira loja.
            </figcaption>
          </figure>

          <div className="grid grid-cols-2 gap-4">
            {numeros.map((n) => (
              <div
                key={n.rotulo}
                className="vidro rounded-2xl p-6 text-center transition-all duration-300 hover:-translate-y-1 hover:border-azul/50 sm:p-8"
              >
                <p className="titulo texto-gradiente text-4xl sm:text-5xl">{n.valor}</p>
                <p className="mt-2 text-sm leading-snug text-cinza">{n.rotulo}</p>
              </div>
            ))}
          </div>

          <blockquote className="vidro mt-4 rounded-2xl border-azul/30 bg-azul/8 p-6 sm:p-8">
            <p className="text-lg leading-relaxed text-white italic">
              “A gente prefere perder uma venda a empurrar uma peça que você não precisa. É por isso
              que o cliente volta.”
            </p>
            <footer className="mt-4 text-sm text-cinza">
              — Equipe Cariocas Infocel, bancada de assistência
            </footer>
          </blockquote>
        </Reveal>
      </div>
    </section>
  )
}
