import { Link } from 'react-router-dom'
import { motion, useScroll, useTransform } from 'framer-motion'
import { ArrowRight, ShieldCheck, Wrench } from 'lucide-react'
import { classesBotao } from '../ui/Button'
import { linkWhatsapp } from '../../lib/whatsapp'

const provas = ['12 anos no Rio', 'Garantia por escrito', 'Conserto no mesmo dia']

export function Hero() {
  const { scrollY } = useScroll()
  const fotoY = useTransform(scrollY, [0, 800], [0, -70])
  const detalheY = useTransform(scrollY, [0, 800], [0, 60])

  return (
    <section className="relative isolate -mt-20 overflow-hidden pt-48 pb-28 lg:pt-56 lg:pb-32">
      <div
        className="pointer-events-none absolute top-0 right-0 h-[42rem] w-[42rem] translate-x-1/4 -translate-y-1/4 rounded-full bg-[radial-gradient(circle,rgba(30,144,240,0.2),transparent_62%)] blur-3xl"
        aria-hidden="true"
      />

      <div className="container-infocel relative grid items-center gap-20 lg:grid-cols-[1fr_1fr] lg:gap-14">
        <div>
          <h1 className="titulo-fino text-[3rem] text-balance sm:text-[4.2rem] lg:text-[5rem]">
            {['Celulares novos,', 'seminovos e'].map((linha, i) => (
              <motion.span
                key={linha}
                className="block"
                initial={{ opacity: 0, y: 26 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: i * 0.1, ease: [0.22, 1, 0.36, 1] }}
              >
                {linha}
              </motion.span>
            ))}
            <motion.span
              className="texto-gradiente block font-medium"
              initial={{ opacity: 0, y: 26 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            >
              consertados.
            </motion.span>
          </h1>

          <motion.p
            className="mt-8 max-w-lg text-lg leading-relaxed font-light text-cinza"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35 }}
          >
            Três lojas no Rio, com nota fiscal em tudo que sai daqui e uma bancada de assistência
            que devolve o orçamento antes de mexer em qualquer parafuso.
          </motion.p>

          <motion.div
            className="mt-10 flex flex-col gap-3 sm:flex-row"
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.45 }}
          >
            <Link to="/loja" className={classesBotao('primario', 'lg')}>
              Ver produtos
              <ArrowRight size={18} aria-hidden="true" />
            </Link>
            <a
              href={linkWhatsapp(
                'Olá! Quero um orçamento de conserto. Meu aparelho é um ___ e o problema é ___.',
              )}
              target="_blank"
              rel="noopener noreferrer"
              className={classesBotao('vidro', 'lg')}
            >
              <Wrench size={18} aria-hidden="true" />
              Orçamento de conserto
            </a>
          </motion.div>

          <motion.ul
            className="mt-12 flex flex-wrap gap-x-7 gap-y-3 border-t border-white/10 pt-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.55 }}
          >
            {provas.map((prova) => (
              <li key={prova} className="flex items-center gap-2 text-sm font-light text-cinza">
                <ShieldCheck size={15} className="shrink-0 text-azul-claro" aria-hidden="true" />
                {prova}
              </li>
            ))}
          </motion.ul>
        </div>

        {/* Duas fotos reais de aparelhos, em profundidade. */}
        <div className="relative mx-auto w-full max-w-xl lg:mx-0 lg:self-start lg:-mt-4">
          <motion.figure
            style={{ y: fotoY }}
            className="relative overflow-hidden rounded-[1.75rem] border border-white/15 shadow-[0_50px_90px_-40px_rgba(0,0,0,1)]"
            initial={{ opacity: 0, y: 40, rotate: -1.5 }}
            animate={{ opacity: 1, y: 0, rotate: -1.5 }}
            transition={{ duration: 1, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/img/hero-lineup.webp"
              alt="Quatro iPhone 15 lado a lado, nas cores rosa, lavanda e verde"
              fetchPriority="high"
              decoding="async"
              width={1300}
              height={900}
              className="w-full object-cover"
            />
          </motion.figure>

          <motion.figure
            style={{ y: detalheY }}
            className="absolute -bottom-16 -left-4 w-36 overflow-hidden rounded-2xl border border-white/15 shadow-[0_30px_60px_-20px_rgba(0,0,0,1)] sm:-bottom-20 sm:-left-12 sm:w-48"
            initial={{ opacity: 0, y: 30, rotate: 5 }}
            animate={{ opacity: 1, y: 0, rotate: 5 }}
            transition={{ duration: 1, delay: 0.45, ease: [0.22, 1, 0.36, 1] }}
          >
            <img
              src="/img/hero-detalhe.webp"
              alt="Detalhe do módulo de câmeras de um smartphone dourado"
              loading="lazy"
              decoding="async"
              width={900}
              height={900}
              className="w-full object-cover"
            />
          </motion.figure>
        </div>
      </div>
    </section>
  )
}
