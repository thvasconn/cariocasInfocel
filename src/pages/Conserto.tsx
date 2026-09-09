import { useState } from 'react'
import { MessageCircle, Wrench } from 'lucide-react'
import { etapasConserto, servicos } from '../data/servicos'
import { brl, linkWhatsapp } from '../lib/whatsapp'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { Arcos, SeparadorArco } from '../components/ui/Arcos'
import { ListaBullets } from '../components/ui/ListaBullets'
import { classesBotao } from '../components/ui/Button'
import { Campo, estiloCampo } from '../components/ui/Campo'
import { Depoimentos } from '../components/sections/Depoimentos'

const promessas = [
  'Diagnóstico gratuito: se você não fechar o serviço, não paga nada.',
  'Preço fechado antes do reparo, com a peça e o prazo definidos.',
  'Serviço feito na loja. Seu aparelho não é enviado para terceiros.',
  '90 dias de garantia sobre peça e mão de obra, registrados na nota.',
]

export default function Conserto() {
  return (
    <>
      <Seo
        titulo="Conserto de celular em Botafogo e Vila Isabel — Cariocas Infocel"
        descricao="Troca de tela, bateria, conector de carga, câmera e reparo de placa nas nossas três lojas do Rio. Orçamento na hora pelo WhatsApp e 90 dias de garantia."
      />

      <section className="relative overflow-hidden">
        <Arcos className="pointer-events-none absolute -top-48 -right-40 h-[34rem] w-[34rem] opacity-40" />
        <div className="container-infocel relative grid gap-12 pt-14 pb-16 lg:grid-cols-2 lg:pt-20">
          <Reveal>
            <SectionTitle
              sobretitulo="Assistência técnica"
              titulo={
                <>
                  Conserto de celular <span className="texto-gradiente">com garantia</span>
                </>
              }
              descricao="Bancada própria nas três lojas, em Botafogo e Vila Isabel. A maioria dos reparos sai no mesmo dia, e você sabe o preço antes da gente abrir o aparelho."
            />
            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <a
                href={linkWhatsapp(
                  'Olá! Quero um orçamento de conserto. Meu aparelho é um ___ e o problema é ___.',
                )}
                target="_blank"
                rel="noopener noreferrer"
                className={classesBotao('primario', 'lg')}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Orçamento pelo WhatsApp
              </a>
              <a href="#orcamento" className={classesBotao('secundario', 'lg')}>
                <Wrench size={18} aria-hidden="true" />
                Preencher formulário
              </a>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <div className="vidro rounded-2xl p-7 sm:p-9">
              <h2 className="font-display text-lg font-bold uppercase">O nosso combinado</h2>
              <ListaBullets itens={promessas} className="mt-6" />
            </div>
          </Reveal>
        </div>
      </section>

      <SeparadorArco />

      <section className="container-infocel py-16 lg:py-20">
        <Reveal>
          <SectionTitle
            sobretitulo="Tabela de serviços"
            titulo="Quanto custa o seu reparo"
            descricao="Os valores partem do modelo mais simples de cada serviço. O preço final depende do aparelho e da peça escolhida — e é sempre confirmado antes do conserto."
          />
        </Reveal>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {servicos.map((servico, i) => (
            <Reveal key={servico.id} delay={Math.min(i, 5) * 0.05}>
              <article className="flex h-full flex-col vidro rounded-2xl p-7 transition-colors hover:border-azul/60">
                <div className="flex items-start justify-between gap-5">
                  <h3 className="font-display text-xl font-bold uppercase">{servico.nome}</h3>
                  <div className="shrink-0 text-right">
                    <p className="text-[0.65rem] font-bold tracking-[0.16em] text-cinza uppercase">
                      A partir de
                    </p>
                    <p className="titulo text-2xl text-azul-claro">{brl.format(servico.precoBase)}</p>
                  </div>
                </div>
                <p className="mt-4 flex-1 leading-relaxed text-cinza">{servico.descricao}</p>
                <p className="mt-6 flex items-center gap-2 border-t border-white/10 pt-5 text-sm text-cinza">
                  <span className="h-1.5 w-1.5 rounded-full bg-azul" aria-hidden="true" />
                  Prazo médio: {servico.prazo}
                </p>
              </article>
            </Reveal>
          ))}
        </div>
      </section>

      <section className="border-y border-white/10 bg-white/[0.02] py-16 lg:py-20">
        <div className="container-infocel">
          <Reveal>
            <SectionTitle
              sobretitulo="Como funciona"
              titulo="Quatro passos, nenhuma surpresa"
              alinhamento="centro"
            />
          </Reveal>
          <ol className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {etapasConserto.map((etapa, i) => (
              <Reveal key={etapa.numero} delay={i * 0.08}>
                <li className="h-full rounded-2xl vidro p-7">
                  <p className="titulo text-4xl text-azul/40">{etapa.numero}</p>
                  <h3 className="mt-4 font-display text-lg font-bold uppercase">{etapa.titulo}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-cinza">{etapa.texto}</p>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>
      </section>

      <FormularioOrcamento />
      <Depoimentos />
    </>
  )
}

function FormularioOrcamento() {
  const [aparelho, setAparelho] = useState('')
  const [servicoId, setServicoId] = useState(servicos[0].id)
  const [detalhes, setDetalhes] = useState('')

  const servico = servicos.find((s) => s.id === servicoId)
  const mensagem = [
    'Olá! Quero um orçamento de conserto na Cariocas Infocel.',
    `Aparelho: ${aparelho || '(não informado)'}`,
    `Serviço: ${servico?.nome ?? ''}`,
    detalhes.trim() ? `Detalhes: ${detalhes.trim()}` : null,
  ]
    .filter(Boolean)
    .join('\n')

  return (
    <section id="orcamento" className="container-infocel py-16 lg:py-20">
      <Reveal>
        <div className="relative overflow-hidden rounded-3xl border border-azul/30 bg-gradient-to-br from-grafite via-noite to-grafite p-7 sm:p-12">
          <Arcos className="pointer-events-none absolute -right-32 -bottom-40 h-[28rem] w-[28rem] opacity-40" />

          <div className="relative grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <SectionTitle
                sobretitulo="Orçamento rápido"
                titulo="Monte sua mensagem em 30 segundos"
                descricao="Preencha os campos ao lado e nós abrimos o WhatsApp com tudo escrito. Você só aperta enviar."
              />
            </div>

            <form
              className="space-y-5"
              onSubmit={(e) => {
                e.preventDefault()
                window.open(linkWhatsapp(mensagem), '_blank', 'noopener,noreferrer')
              }}
            >
              <Campo rotulo="Qual é o aparelho?" htmlFor="aparelho">
                <input
                  id="aparelho"
                  value={aparelho}
                  onChange={(e) => setAparelho(e.target.value)}
                  required
                  placeholder="Ex.: iPhone 13, Galaxy A55, Moto G84"
                  className={estiloCampo}
                />
              </Campo>

              <Campo rotulo="O que precisa ser feito?" htmlFor="servico">
                <select
                  id="servico"
                  value={servicoId}
                  onChange={(e) => setServicoId(e.target.value)}
                  className={estiloCampo}
                >
                  {servicos.map((s) => (
                    <option key={s.id} value={s.id} className="bg-noite">
                      {s.nome}
                    </option>
                  ))}
                </select>
              </Campo>

              <Campo rotulo="Quer detalhar alguma coisa? (opcional)" htmlFor="detalhes">
                <textarea
                  id="detalhes"
                  value={detalhes}
                  onChange={(e) => setDetalhes(e.target.value)}
                  rows={3}
                  placeholder="Ex.: caiu no chão ontem, a tela acende mas não responde ao toque"
                  className={`${estiloCampo} resize-y`}
                />
              </Campo>

              <button type="submit" className={classesBotao('primario', 'lg', 'w-full')}>
                <MessageCircle size={18} aria-hidden="true" />
                Enviar no WhatsApp
              </button>
              <p className="text-center text-xs text-cinza">
                Abrimos o WhatsApp com a mensagem pronta. Nada é enviado sem você confirmar.
              </p>
            </form>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
