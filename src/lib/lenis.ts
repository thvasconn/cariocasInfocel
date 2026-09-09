import Lenis from 'lenis'

/** Instância única, viva pela duração da SPA (nunca desmonta). */
export const lenis = window.matchMedia('(prefers-reduced-motion: reduce)').matches
  ? null
  : new Lenis()

if (lenis) {
  const raf = (tempo: number) => {
    lenis.raf(tempo)
    requestAnimationFrame(raf)
  }
  requestAnimationFrame(raf)
}
