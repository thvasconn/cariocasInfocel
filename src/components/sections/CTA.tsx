import { Link } from 'react-router-dom'
import { ArrowRight, MessageCircle } from 'lucide-react'
import { Arcos } from '../ui/Arcos'
import { Reveal } from '../ui/Reveal'
import { classesBotao } from '../ui/Button'
import { linkWhatsapp } from '../../lib/whatsapp'

type Props = {
  sobretitulo?: string
  titulo?: string
  texto?: string
  mensagemWhatsapp?: string
}

export function CTA({
  sobretitulo = 'Bora resolver',
  titulo = 'Fale com a gente agora',
  texto = 'Manda o modelo do aparelho e o que está acontecendo. A gente responde com preço e prazo, sem compromisso.',
  mensagemWhatsapp = 'Olá! Vim pelo site da Cariocas Infocel e queria tirar uma dúvida.',
}: Props) {
  return (
    <section className="container-infocel py-20 lg:py-24">
      <Reveal>
        <div className="group relative isolate overflow-hidden rounded-[2rem] border border-white/10 px-7 py-16 text-center sm:px-14 lg:py-24">
          <img
            src="/img/rio-noite.webp"
            alt=""
            loading="lazy"
            decoding="async"
            className="absolute inset-0 -z-20 h-full w-full object-cover opacity-45 transition-transform duration-[2s] group-hover:scale-105"
          />
          <div
            className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_center,rgba(10,10,10,0.55),rgba(10,10,10,0.92))]"
            aria-hidden="true"
          />
          <Arcos className="pointer-events-none absolute -top-40 -left-32 h-[30rem] w-[30rem] opacity-50" />
          <Arcos className="pointer-events-none absolute -right-32 -bottom-40 h-[30rem] w-[30rem] opacity-50" />

          <div className="relative mx-auto max-w-2xl">
            <p className="mb-5 text-xs font-bold tracking-[0.28em] text-azul uppercase">
              {sobretitulo}
            </p>
            <h2 className="titulo text-3xl text-balance drop-shadow-[0_4px_24px_rgba(0,0,0,0.8)] sm:text-5xl">{titulo}</h2>
            <p className="mx-auto mt-6 max-w-xl leading-relaxed text-white/70">{texto}</p>

            <div className="mt-9 flex flex-col justify-center gap-3 sm:flex-row">
              <a
                href={linkWhatsapp(mensagemWhatsapp)}
                target="_blank"
                rel="noopener noreferrer"
                className={classesBotao('primario', 'lg')}
              >
                <MessageCircle size={18} aria-hidden="true" />
                Chamar no WhatsApp
              </a>
              <Link to="/contato" className={classesBotao('vidro', 'lg')}>
                Outras formas de contato
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  )
}
