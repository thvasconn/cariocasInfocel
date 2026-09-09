import { site } from '../data/site'

/** Monta um link do WhatsApp já com a mensagem preenchida. */
export function linkWhatsapp(mensagem: string): string {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(mensagem)}`
}

export const brl = new Intl.NumberFormat('pt-BR', {
  style: 'currency',
  currency: 'BRL',
})
