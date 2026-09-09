import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { etapasConserto } from '../../data/servicos'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'
import { classesBotao } from '../ui/Button'
import { linkWhatsapp } from '../../lib/whatsapp'

export function Servicos() {
  return (
    <section className="relative isolate overflow-hidden border-y border-white/10 py-20 lg:py-28">
      <img
        src="/img/cidade-noite.webp"
        alt=""
        loading="lazy"
        decoding="async"
        className="absolute inset-0 -z-20 h-full w-full object-cover opacity-40"
      />
      <div
        className="absolute inset-0 -z-10 bg-gradient-to-b from-noite via-noite/75 to-noite"
        aria-hidden="true"
      />
      <div className="container-infocel">
        <Reveal>
          <SectionTitle
            sobretitulo="Assistência técnica"
            titulo={
              <>
                Do problema à garantia,{' '}
                <span className="texto-gradiente">em quatro passos</span>
              </>
            }
            descricao="Sem enrolação e sem surpresa no valor final. Você acompanha cada etapa."
            alinhamento="centro"
          />
        </Reveal>

        <ol className="mt-14 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {etapasConserto.map((etapa, i) => (
            <Reveal key={etapa.numero} delay={i * 0.08}>
              <li className="vidro group relative h-full rounded-2xl p-7 transition-all duration-300 hover:-translate-y-1.5 hover:border-azul/50 hover:bg-white/[0.08]">
                <span
                  className="titulo absolute top-5 right-6 text-5xl text-white/10 transition-colors duration-300 group-hover:text-azul/40"
                  aria-hidden="true"
                >
                  {etapa.numero}
                </span>
                <span
                  className="mb-6 block h-1 w-10 rounded-full bg-azul transition-all duration-300 group-hover:w-16"
                  aria-hidden="true"
                />
                <h3 className="font-display text-xl font-bold uppercase">{etapa.titulo}</h3>
                <p className="mt-3 text-sm leading-relaxed text-cinza">{etapa.texto}</p>
              </li>
            </Reveal>
          ))}
        </ol>

        <Reveal delay={0.15}>
          <div className="mt-12 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href={linkWhatsapp(
                'Olá! Quero um orçamento de conserto. Meu aparelho é um ___ e o problema é ___.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={classesBotao('primario', 'lg')}
            >
              <MessageCircle size={18} aria-hidden="true" />
              Orçamento na hora pelo WhatsApp
            </a>
            <Link to="/conserto" className={classesBotao('vidro', 'lg')}>
              Ver preços dos serviços
              <ArrowRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
