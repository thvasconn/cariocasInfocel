import { useEffect, useState } from 'react'
import { Link, NavLink, useLocation } from 'react-router-dom'
import { motion, useScroll, useSpring } from 'framer-motion'
import { Menu, MessageCircle, X } from 'lucide-react'
import { Logo } from '../ui/Logo'
import { classesBotao } from '../ui/Button'
import { linkWhatsapp } from '../../lib/whatsapp'

const links = [
  { rotulo: 'Início', para: '/' },
  { rotulo: 'Loja', para: '/loja' },
  { rotulo: 'Conserto', para: '/conserto' },
  { rotulo: 'Sobre', para: '/#sobre' },
  { rotulo: 'Contato', para: '/contato' },
]

export function Header() {
  const [rolou, setRolou] = useState(false)
  const [aberto, setAberto] = useState(false)
  const { pathname, hash } = useLocation()
  const { scrollYProgress } = useScroll()
  const progresso = useSpring(scrollYProgress, { stiffness: 120, damping: 30, mass: 0.4 })

  useEffect(() => {
    const aoRolar = () => setRolou(window.scrollY > 16)
    aoRolar()
    window.addEventListener('scroll', aoRolar, { passive: true })
    return () => window.removeEventListener('scroll', aoRolar)
  }, [])

  useEffect(() => setAberto(false), [pathname, hash])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        rolou
          ? 'border-b border-white/10 bg-noite/70 backdrop-blur-2xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <div className="container-infocel flex h-20 items-center justify-between gap-4">
        <Logo />

        <nav aria-label="Navegação principal" className="hidden items-center gap-1 lg:flex">
          {links.map((link) => (
            <NavLink
              key={link.para}
              to={link.para}
              end={link.para === '/'}
              className={({ isActive }) =>
                `rounded-full px-4 py-2 text-sm font-semibold transition-colors ${
                  isActive && !link.para.includes('#')
                    ? 'text-azul-claro'
                    : 'text-cinza hover:text-white'
                }`
              }
            >
              {link.rotulo}
            </NavLink>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          {/* O wrapper evita o conflito entre `hidden` e o `inline-flex` da base do botão. */}
          <div className="hidden sm:block">
            <a
              href={linkWhatsapp('Olá! Vim pelo site da Cariocas Infocel e queria falar com um atendente.')}
              target="_blank"
              rel="noopener noreferrer"
              className={classesBotao('primario', 'md')}
            >
              <MessageCircle size={16} aria-hidden="true" />
              Fale no WhatsApp
            </a>
          </div>

          <button
            type="button"
            onClick={() => setAberto((v) => !v)}
            aria-expanded={aberto}
            aria-controls="menu-mobile"
            aria-label={aberto ? 'Fechar menu' : 'Abrir menu'}
            className="rounded-full border border-white/10 p-2.5 text-white transition-colors hover:border-azul hover:text-azul-claro lg:hidden"
          >
            {aberto ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      <motion.div
        style={{ scaleX: progresso }}
        className="absolute inset-x-0 bottom-0 h-px origin-left bg-gradient-to-r from-azul to-azul-claro"
        aria-hidden="true"
      />

      {aberto && (
        <div
          id="menu-mobile"
          className="border-t border-white/10 bg-noite/95 backdrop-blur-xl lg:hidden"
        >
          <nav aria-label="Navegação principal (celular)" className="container-infocel py-4">
            {links.map((link) => (
              <Link
                key={link.para}
                to={link.para}
                className="block border-b border-white/10 py-3.5 font-display text-lg font-bold uppercase last:border-0 hover:text-azul-claro"
              >
                {link.rotulo}
              </Link>
            ))}
            <div className="mt-4 sm:hidden">
              <a
                href={linkWhatsapp('Olá! Vim pelo site da Cariocas Infocel e queria falar com um atendente.')}
                target="_blank"
                rel="noopener noreferrer"
                className={classesBotao('primario', 'md', 'w-full')}
              >
                <MessageCircle size={16} aria-hidden="true" />
                Fale no WhatsApp
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  )
}
