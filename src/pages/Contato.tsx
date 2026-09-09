import { useState } from 'react'
import { CheckCircle2, Clock, Mail, MessageCircle, Phone , Navigation } from 'lucide-react'
import { IconeInstagram } from '../components/ui/IconeInstagram'
import { lojas, mapaEmbed, mapaRota, site } from '../data/site'
import { linkWhatsapp } from '../lib/whatsapp'
import { formatarTelefone, validarContato } from '../lib/validacao'
import type { CamposContato, ErrosContato } from '../lib/validacao'
import { SectionTitle } from '../components/ui/SectionTitle'
import { Reveal } from '../components/ui/Reveal'
import { Seo } from '../components/ui/Seo'
import { Campo, estiloCampo } from '../components/ui/Campo'
import { classesBotao } from '../components/ui/Button'
import { Arcos } from '../components/ui/Arcos'

const vazio: CamposContato = { nome: '', telefone: '', mensagem: '' }

export default function Contato() {
  return (
    <>
      <Seo
        titulo="Contato — Cariocas Infocel Rio de Janeiro"
        descricao="Fale com a Cariocas Infocel por WhatsApp, telefone ou e-mail. Três lojas no Rio — Botafogo e Vila Isabel — de segunda a sábado."
      />

      <section className="relative overflow-hidden">
        <Arcos className="pointer-events-none absolute -top-40 -left-40 h-[32rem] w-[32rem] opacity-30" />
        <div className="container-infocel relative grid gap-14 pt-14 pb-20 lg:grid-cols-2 lg:pt-20">
          <Reveal>
            <SectionTitle
              sobretitulo="Contato"
              titulo={
                <>
                  Chama a gente. <span className="texto-gradiente">Sem robô.</span>
                </>
              }
              descricao="Quem responde é a equipe da loja, de segunda a sábado. Se for urgente, WhatsApp é o caminho mais rápido — e você fala direto com a unidade que preferir."
            />

            <div className="mt-10 space-y-4">
              <Contato_Item Icone={MessageCircle} titulo="WhatsApp" destaque>
                <a
                  href={linkWhatsapp('Olá! Vim pelo site da Cariocas Infocel.')}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-azul-claro"
                >
                  {site.whatsappExibicao}
                </a>
              </Contato_Item>

              <Contato_Item Icone={Phone} titulo="Telefone da loja">
                <a href={`tel:+55${site.telefoneFixo.replace(/\D/g, '')}`} className="hover:text-white">
                  {site.telefoneFixo}
                </a>
              </Contato_Item>

              <Contato_Item Icone={Mail} titulo="E-mail">
                <a href={`mailto:${site.email}`} className="hover:text-white">
                  {site.email}
                </a>
              </Contato_Item>

              <Contato_Item Icone={IconeInstagram} titulo="Instagram">
                <a
                  href={site.urlInstagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  {site.handleInstagram}
                </a>
              </Contato_Item>

            </div>

            <div className="mt-10">
              <h2 className="font-display text-sm font-bold tracking-wider uppercase">
                Nossas três lojas
              </h2>
              <ul className="mt-5 space-y-4">
                {lojas.map((loja) => (
                  <li key={loja.id} className="vidro overflow-hidden rounded-2xl">
                    <div className="flex gap-4 p-5">
                      <img
                        src={loja.imagem}
                        alt={loja.imagemAlt}
                        loading="lazy"
                        decoding="async"
                        className="h-20 w-20 shrink-0 rounded-xl object-cover opacity-70"
                      />
                      <div className="min-w-0">
                        <h3 className="font-display font-bold uppercase">{loja.bairro}</h3>
                        <p className="mt-1 text-sm text-cinza">
                          {loja.endereco} — CEP {loja.cep}
                        </p>
                        <div className="mt-2 flex flex-wrap gap-x-4 gap-y-1 text-xs">
                          <a
                            href={mapaRota(loja)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-azul-claro hover:text-white"
                          >
                            <Navigation size={12} aria-hidden="true" />
                            Traçar rota
                          </a>
                          <a
                            href={linkWhatsapp(
                              `Olá! Quero falar com a loja da Cariocas Infocel em ${loja.nome}.`,
                            )}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-flex items-center gap-1.5 font-semibold text-azul-claro hover:text-white"
                          >
                            <MessageCircle size={12} aria-hidden="true" />
                            WhatsApp
                          </a>
                        </div>
                      </div>
                    </div>
                  </li>
                ))}
              </ul>
              <p className="mt-5 flex gap-2.5 text-sm text-cinza">
                <Clock size={16} className="mt-0.5 shrink-0 text-azul" aria-hidden="true" />
                <span>
                  {lojas[0].horarios
                    .map((h) => `${h.dia}: ${h.hora}`)
                    .join(' · ')}
                </span>
              </p>
            </div>
          </Reveal>

          <Reveal delay={0.1}>
            <FormularioContato />
            <div className="vidro mt-6 overflow-hidden rounded-2xl">
              <iframe
                src={mapaEmbed(lojas[0])}
                title={`Mapa da loja Cariocas Infocel em ${lojas[0].bairro}`}
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-64 w-full grayscale-[0.55] contrast-125"
              />
            </div>
          </Reveal>
        </div>
      </section>
    </>
  )
}

function FormularioContato() {
  const [campos, setCampos] = useState<CamposContato>(vazio)
  const [erros, setErros] = useState<ErrosContato>({})
  const [enviado, setEnviado] = useState(false)

  const atualizar = (chave: keyof CamposContato, valor: string) => {
    setCampos((c) => ({ ...c, [chave]: chave === 'telefone' ? formatarTelefone(valor) : valor }))
    setErros((e) => ({ ...e, [chave]: undefined }))
  }

  // ponytail: sem backend por enquanto — valida, mostra o recibo e oferece o WhatsApp
  const enviar = (e: React.FormEvent) => {
    e.preventDefault()
    const encontrados = validarContato(campos)
    setErros(encontrados)
    if (Object.keys(encontrados).length === 0) setEnviado(true)
  }

  if (enviado) {
    return (
      <div className="vidro rounded-3xl border-azul/40 bg-azul/8 p-9 text-center">
        <CheckCircle2 size={44} className="mx-auto text-azul" aria-hidden="true" />
        <h2 className="titulo mt-5 text-2xl">Mensagem registrada</h2>
        <p className="mt-4 leading-relaxed text-cinza">
          Obrigado, {campos.nome.trim().split(' ')[0]}. Retornamos no {campos.telefone} em até um
          dia útil. Se preferir falar agora, é só chamar no WhatsApp.
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <a
            href={linkWhatsapp(
              `Olá! Sou ${campos.nome.trim()} e acabei de mandar uma mensagem pelo site: ${campos.mensagem.trim()}`,
            )}
            target="_blank"
            rel="noopener noreferrer"
            className={classesBotao('primario', 'lg')}
          >
            <MessageCircle size={18} aria-hidden="true" />
            Falar agora no WhatsApp
          </a>
          <button
            type="button"
            onClick={() => {
              setCampos(vazio)
              setEnviado(false)
            }}
            className={classesBotao('secundario', 'lg')}
          >
            Enviar outra mensagem
          </button>
        </div>
      </div>
    )
  }

  return (
    <form
      noValidate
      onSubmit={enviar}
      className="vidro rounded-3xl p-7 sm:p-9"
    >
      <h2 className="font-display text-xl font-bold uppercase">Mande uma mensagem</h2>
      <p className="mt-2 text-sm text-cinza">Respondemos em até um dia útil.</p>

      <div className="mt-7 space-y-5">
        <Campo rotulo="Nome" htmlFor="nome" erro={erros.nome}>
          <input
            id="nome"
            value={campos.nome}
            onChange={(e) => atualizar('nome', e.target.value)}
            autoComplete="name"
            placeholder="Como podemos te chamar?"
            aria-invalid={Boolean(erros.nome)}
            aria-describedby={erros.nome ? 'nome-erro' : undefined}
            className={estiloCampo}
          />
        </Campo>

        <Campo rotulo="Telefone / WhatsApp" htmlFor="telefone" erro={erros.telefone}>
          <input
            id="telefone"
            value={campos.telefone}
            onChange={(e) => atualizar('telefone', e.target.value)}
            inputMode="tel"
            autoComplete="tel"
            placeholder="(21) 99999-8888"
            aria-invalid={Boolean(erros.telefone)}
            aria-describedby={erros.telefone ? 'telefone-erro' : undefined}
            className={estiloCampo}
          />
        </Campo>

        <Campo rotulo="Mensagem" htmlFor="mensagem" erro={erros.mensagem}>
          <textarea
            id="mensagem"
            value={campos.mensagem}
            onChange={(e) => atualizar('mensagem', e.target.value)}
            rows={5}
            placeholder="Conte o que você precisa: um produto, um orçamento de conserto, uma dúvida…"
            aria-invalid={Boolean(erros.mensagem)}
            aria-describedby={erros.mensagem ? 'mensagem-erro' : undefined}
            className={`${estiloCampo} resize-y`}
          />
        </Campo>
      </div>

      <button type="submit" className={classesBotao('primario', 'lg', 'mt-7 w-full')}>
        Enviar mensagem
      </button>
    </form>
  )
}

function Contato_Item({
  Icone,
  titulo,
  children,
  destaque = false,
}: {
  Icone: React.ComponentType<{ size?: number; className?: string }>
  titulo: string
  children: React.ReactNode
  destaque?: boolean
}) {
  return (
    <div
      className={`flex gap-4 rounded-2xl border p-5 transition-colors ${
        destaque ? 'border-azul/40 bg-azul/8' : 'vidro'
      }`}
    >
      <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-azul">
        <Icone size={18} />
      </span>
      <div>
        <h3 className="font-display text-sm font-bold tracking-wider uppercase">{titulo}</h3>
        <div className="mt-1 text-cinza">{children}</div>
      </div>
    </div>
  )
}
