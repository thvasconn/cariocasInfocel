import { Link } from 'react-router-dom'
import { BatteryCharging, Headphones, ShieldHalf, Smartphone, Sparkles, Wrench } from 'lucide-react'
import type { LucideIcon } from 'lucide-react'
import { Reveal } from '../ui/Reveal'
import { SectionTitle } from '../ui/SectionTitle'

const cards: { nome: string; descricao: string; para: string; Icone: LucideIcon }[] = [
  {
    nome: 'Celulares',
    descricao: 'Novos, originais e com nota fiscal',
    para: '/loja?categoria=celulares',
    Icone: Smartphone,
  },
  {
    nome: 'Capas',
    descricao: 'Anti-impacto, silicone e MagSafe',
    para: '/loja?categoria=capas',
    Icone: ShieldHalf,
  },
  {
    nome: 'Películas',
    descricao: 'Vidro 3D, hidrogel e privacidade',
    para: '/loja?categoria=peliculas',
    Icone: Sparkles,
  },
  {
    nome: 'Carregadores',
    descricao: 'Turbo, sem fio e power banks',
    para: '/loja?categoria=carregadores',
    Icone: BatteryCharging,
  },
  {
    nome: 'Fones e acessórios',
    descricao: 'Bluetooth, cabos e suportes',
    para: '/loja?categoria=acessorios',
    Icone: Headphones,
  },
  {
    nome: 'Conserto',
    descricao: 'Tela, bateria, carga e placa',
    para: '/conserto',
    Icone: Wrench,
  },
]

export function Categorias() {
  return (
    <section className="container-infocel py-20 lg:py-24">
      <Reveal>
        <SectionTitle
          sobretitulo="O que você procura"
          titulo={
            <>
              Tudo para o seu <span className="texto-gradiente">celular</span>
            </>
          }
          descricao="Seis frentes de atendimento nas três lojas. Escolha por onde começar."
        />
      </Reveal>

      <div className="mt-12 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-3">
        {cards.map(({ nome, descricao, para, Icone }, i) => (
          <Reveal key={nome} delay={i * 0.06}>
            <Link
              to={para}
              className="vidro group relative flex h-full flex-col justify-between overflow-hidden rounded-2xl p-5 transition-all duration-500 hover:-translate-y-1.5 hover:border-azul/50 hover:bg-white/[0.09] sm:p-7"
            >
              <span
                className="pointer-events-none absolute -top-16 -right-16 h-44 w-44 rounded-full bg-azul/0 blur-2xl transition-all duration-500 group-hover:bg-azul/25"
                aria-hidden="true"
              />
              <span
                className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-azul to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                aria-hidden="true"
              />
              <span className="relative mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-azul transition-all duration-400 group-hover:-translate-y-0.5 group-hover:border-azul/60 group-hover:bg-azul/15 group-hover:text-azul-claro">
                <Icone size={22} aria-hidden="true" />
              </span>
              <span className="relative">
                <span className="font-display block text-lg font-bold text-white sm:text-xl">
                  {nome}
                </span>
                <span className="mt-1.5 block text-sm leading-relaxed text-cinza">{descricao}</span>
              </span>
            </Link>
          </Reveal>
        ))}
      </div>
    </section>
  )
}
