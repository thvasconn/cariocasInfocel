import AnimatedGradient from '../ui/animated-gradient'

/** Fundo em gradiente animado (WebGL), variante de teste na branch staging. Preset Prism combina com o azul da marca. */
export function FundoPremium() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <AnimatedGradient config={{ preset: 'Prism' }} style={{ position: 'fixed' }} />
      <div className="veu-foto absolute inset-0" />
    </div>
  )
}
