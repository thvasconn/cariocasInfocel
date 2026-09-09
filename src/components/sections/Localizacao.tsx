import { useState } from 'react'
import { motion } from 'framer-motion'
import { Clock, MapPin, MessageCircle, Navigation } from 'lucide-react'
import { lojas, mapaEmbed, mapaRota } from '../../data/site'
import type { Loja } from '../../data/site'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'
import { classesBotao } from '../ui/Button'
import { linkWhatsapp } from '../../lib/whatsapp'

export function Localizacao() {
  const [ativa, setAtiva] = useState<Loja>(lojas[0])

  return (
    <section id="localizacao" className="relative overflow-hidden py-20 lg:py-28">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azul/60 to-transparent"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute -left-40 top-1/3 h-[30rem] w-[30rem] rounded-full bg-[radial-gradient(circle,rgba(30,144,240,0.14),transparent_65%)] blur-2xl"
        aria-hidden="true"
      />

      <div className="container-infocel relative">
        <Reveal>
          <SectionTitle
            sobretitulo="Onde estamos"
            titulo={
              <>
                Três lojas, <span className="texto-gradiente">dois bairros</span>
              </>
            }
            descricao="Uma em Botafogo e duas em Vila Isabel. Escolha a mais perto de você para ver o mapa, o horário e falar direto com a equipe daquela loja."
            alinhamento="centro"
          />
        </Reveal>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {lojas.map((loja, i) => (
            <Reveal key={loja.id} delay={i * 0.08}>
              <CartaoLoja loja={loja} ativa={loja.id === ativa.id} aoEscolher={() => setAtiva(loja)} />
            </Reveal>
          ))}
        </div>

        <Reveal delay={0.12}>
          <div className="vidro mt-6 overflow-hidden rounded-3xl">
            <div className="grid lg:grid-cols-[0.9fr_1.1fr]">
              <div className="p-8 sm:p-10">
                <p className="text-xs font-bold tracking-[0.24em] text-azul uppercase">
                  Loja selecionada
                </p>
                <motion.div key={ativa.id} initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.4 }}>
                  <h3 className="titulo mt-3 text-3xl">{ativa.nome}</h3>
                  <p className="mt-4 flex gap-3 text-cinza">
                    <MapPin size={18} className="mt-0.5 shrink-0 text-azul" aria-hidden="true" />
                    <span>
                      {ativa.endereco}
                      <br />
                      {ativa.bairro}, Rio de Janeiro — RJ · CEP {ativa.cep}
                    </span>
                  </p>
                  <p className="mt-4 text-sm leading-relaxed text-cinza/80">{ativa.referencia}</p>

                  <div className="mt-7 flex gap-3">
                    <Clock size={18} className="mt-0.5 shrink-0 text-azul" aria-hidden="true" />
                    <dl className="w-full space-y-1.5">
                      {ativa.horarios.map((h) => (
                        <div key={h.dia} className="flex justify-between gap-4 text-sm">
                          <dt className="text-cinza">{h.dia}</dt>
                          <dd className="font-semibold text-white">{h.hora}</dd>
                        </div>
                      ))}
                    </dl>
                  </div>

                  <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                    <a
                      href={linkWhatsapp(
                        `Olá! Quero falar com a loja da Cariocas Infocel em ${ativa.nome} (${ativa.endereco}).`,
                      )}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classesBotao('primario', 'md')}
                    >
                      <MessageCircle size={16} aria-hidden="true" />
                      Falar com esta loja
                    </a>
                    <a
                      href={mapaRota(ativa)}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={classesBotao('vidro', 'md')}
                    >
                      <Navigation size={16} aria-hidden="true" />
                      Traçar rota
                    </a>
                  </div>
                </motion.div>
              </div>

              <div className="min-h-[20rem] border-t border-white/10 lg:border-t-0 lg:border-l">
                <iframe
                  key={ativa.id}
                  src={mapaEmbed(ativa)}
                  title={`Mapa da loja Cariocas Infocel em ${ativa.nome}`}
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="h-full min-h-[20rem] w-full grayscale-[0.55] contrast-125"
                />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function CartaoLoja({
  loja,
  ativa,
  aoEscolher,
}: {
  loja: Loja
  ativa: boolean
  aoEscolher: () => void
}) {
  return (
    <button
      type="button"
      onClick={aoEscolher}
      aria-pressed={ativa}
      className={`group relative h-full w-full overflow-hidden rounded-3xl border text-left transition-all duration-400 ${
        ativa
          ? 'border-azul/60 shadow-[0_20px_60px_-30px_rgba(30,144,240,0.9)]'
          : 'border-white/10 hover:-translate-y-1.5 hover:border-white/25'
      }`}
    >
      <img
        src={loja.imagem}
        alt={loja.imagemAlt}
        loading="lazy"
        decoding="async"
        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
          ativa
            ? 'scale-105 opacity-70'
            : 'opacity-40 grayscale group-hover:scale-105 group-hover:opacity-60 group-hover:grayscale-0'
        }`}
      />
      <span
        className="absolute inset-0 bg-gradient-to-t from-noite via-noite/80 to-noite/25"
        aria-hidden="true"
      />

      <span className="relative flex h-full min-h-[15rem] flex-col justify-end p-7">
        {loja.matriz && (
          <span className="vidro absolute top-5 right-5 rounded-full px-3 py-1 text-[0.6rem] font-bold tracking-[0.16em] text-azul-claro uppercase">
            Matriz
          </span>
        )}
        <span
          className={`mb-4 block h-1 rounded-full bg-azul transition-all duration-500 ${
            ativa ? 'w-16' : 'w-8 group-hover:w-14'
          }`}
          aria-hidden="true"
        />
        <span className="font-display block text-xl font-bold uppercase">{loja.bairro}</span>
        <span className="mt-1.5 block text-sm leading-relaxed text-cinza">{loja.endereco}</span>
      </span>
    </button>
  )
}
