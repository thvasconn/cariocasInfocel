import { Link } from 'react-router-dom'
import { Clock, Mail, MapPin, Phone } from 'lucide-react'
import { IconeInstagram } from '../ui/IconeInstagram'
import { Logo } from '../ui/Logo'
import { lojas, site } from '../../data/site'
import { categorias } from '../../data/produtos'
import { creditosFotos } from '../../data/creditos'

export function Footer() {
  return (
    <footer className="relative mt-24 border-t border-white/10 bg-white/[0.02]">
      <div
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-azul to-transparent"
        aria-hidden="true"
      />

      <div className="container-infocel grid gap-12 py-16 md:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-1">
          <Logo />
          <p className="mt-5 max-w-xs text-sm leading-relaxed text-cinza">
            Celulares, acessórios e assistência técnica em Botafogo e Vila Isabel. Atendimento de
            gente, preço combinado antes e garantia por escrito.
          </p>
          <a
            href={site.urlInstagram}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-6 inline-flex items-center gap-2 rounded-full border border-white/10 px-4 py-2 text-sm font-semibold text-cinza transition-colors hover:border-azul hover:text-azul-claro"
          >
            <IconeInstagram size={16} />
            {site.handleInstagram}
          </a>
        </div>

        <nav aria-label="Links rápidos">
          <h2 className="mb-5 text-xs font-bold tracking-[0.24em] text-azul uppercase">Navegue</h2>
          <ul className="space-y-3 text-sm">
            {[
              { rotulo: 'Início', para: '/' },
              { rotulo: 'Loja', para: '/loja' },
              { rotulo: 'Conserto de celular', para: '/conserto' },
              { rotulo: 'Sobre a Cariocas Infocel', para: '/#sobre' },
              { rotulo: 'Contato', para: '/contato' },
            ].map((link) => (
              <li key={link.para}>
                <Link to={link.para} className="text-cinza transition-colors hover:text-white">
                  {link.rotulo}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Categorias">
          <h2 className="mb-5 text-xs font-bold tracking-[0.24em] text-azul uppercase">
            Categorias
          </h2>
          <ul className="space-y-3 text-sm">
            {categorias.map((c) => (
              <li key={c.id}>
                <Link
                  to={`/loja?categoria=${c.id}`}
                  className="text-cinza transition-colors hover:text-white"
                >
                  {c.nome}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <div>
          <h2 className="mb-5 text-xs font-bold tracking-[0.24em] text-azul uppercase">
            Nossas lojas
          </h2>
          <ul className="space-y-4 text-sm text-cinza">
            {lojas.map((loja) => (
              <li key={loja.id} className="flex gap-3">
                <MapPin size={16} className="mt-0.5 shrink-0 text-azul" aria-hidden="true" />
                <span>
                  <strong className="block font-semibold text-white">{loja.bairro}</strong>
                  {loja.endereco}
                </span>
              </li>
            ))}
            <li className="flex gap-3 border-t border-white/10 pt-4">
              <Phone size={16} className="mt-0.5 shrink-0 text-azul" aria-hidden="true" />
              <a href={`tel:+${site.whatsapp}`} className="hover:text-white">
                {site.whatsappExibicao}
              </a>
            </li>
            <li className="flex gap-3">
              <Mail size={16} className="mt-0.5 shrink-0 text-azul" aria-hidden="true" />
              <a href={`mailto:${site.email}`} className="hover:text-white">
                {site.email}
              </a>
            </li>
            <li className="flex gap-3">
              <Clock size={16} className="mt-0.5 shrink-0 text-azul" aria-hidden="true" />
              <span>{lojas[0].horarios[0].dia}: {lojas[0].horarios[0].hora}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-infocel py-6 text-xs text-cinza">
          <details className="group mb-4">
            <summary className="cursor-pointer list-none text-cinza/70 transition-colors hover:text-white">
              <span className="underline decoration-white/20 underline-offset-4">
                Créditos das fotos
              </span>
              <span className="ml-1 inline-block transition-transform group-open:rotate-90" aria-hidden="true">
                ›
              </span>
            </summary>
            <ul className="mt-3 space-y-1.5 text-cinza/60">
              {creditosFotos.map((c) => (
                <li key={c.arquivo}>
                  <a
                    href={c.pagina}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-white"
                  >
                    {c.titulo}
                  </a>{' '}
                  — {c.autor}, {c.licenca}, via Wikimedia Commons.
                </li>
              ))}
            </ul>
          </details>

          <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.nome}. Todos os direitos reservados.
          </p>
            <p>Botafogo · Vila Isabel — Rio de Janeiro · CNPJ 00.000.000/0001-00</p>
          </div>
        </div>
      </div>
    </footer>
  )
}
