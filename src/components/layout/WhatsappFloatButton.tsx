import { MessageCircle } from 'lucide-react'
import { linkWhatsapp } from '../../lib/whatsapp'

export function WhatsappFloatButton() {
  return (
    <a
      href={linkWhatsapp('Olá! Vim pelo site da Cariocas Infocel e gostaria de um atendimento.')}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar com a Cariocas Infocel no WhatsApp"
      className="fixed right-5 bottom-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-azul text-white shadow-[0_12px_36px_-8px_rgba(30,144,240,0.8)] transition-all duration-300 hover:scale-105 hover:bg-azul-claro hover:text-noite sm:right-8 sm:bottom-8"
    >
      <span
        className="absolute inset-0 animate-ping rounded-full bg-azul/40 [animation-duration:2.6s]"
        aria-hidden="true"
      />
      <MessageCircle size={26} className="relative" aria-hidden="true" />
    </a>
  )
}
