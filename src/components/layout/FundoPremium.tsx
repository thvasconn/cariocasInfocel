/** Vídeo de fundo em loop (o mesmo efeito do exemplo MOTIONSITES/Aura), com o véu escuro que o site já usa sobre fotos para o texto continuar legível. */
export function FundoPremium() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden" aria-hidden="true">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="h-full w-full object-cover"
        src="https://d8j0ntlcm91z4.cloudfront.net/user_38xzZboKViGWJOttwIXH07lWA1P/hf_20260508_064122_c4750c0e-7476-4b44-94a2-a85a65c63bf2.mp4"
      />
      <div className="veu-foto absolute inset-0" />
    </div>
  )
}
