export type Horario = { dia: string; hora: string }

export type Loja = {
  id: string
  /** Nome curto, usado nas abas e nos botões. */
  nome: string
  bairro: string
  endereco: string
  cep: string
  /** Endereço completo usado no Google Maps (iframe e botão de rota). */
  mapaQuery: string
  imagem: string
  /** Descrição da foto, para leitores de tela. */
  imagemAlt: string
  /** Frase curta de referência — o que tem por perto. */
  referencia: string
  horarios: Horario[]
  matriz?: boolean
}

/**
 * Dados institucionais da loja. É aqui que se troca telefone, endereço e horários.
 */
export const site = {
  nome: 'Cariocas Infocel',
  handleInstagram: '@cariocasinfocel',
  urlInstagram: 'https://www.instagram.com/cariocasinfocel/',
  /** Telefone em formato internacional, só dígitos — usado para montar os links do WhatsApp. */
  whatsapp: '5521999998888',
  whatsappExibicao: '(21) 99999-8888',
  telefoneFixo: '(21) 3333-2211',
  email: 'contato@infocel.com.br',
} as const

const horarioPadrao: Horario[] = [
  { dia: 'Segunda a sexta', hora: '09h — 19h' },
  { dia: 'Sábado', hora: '09h — 15h' },
  { dia: 'Domingo e feriados', hora: 'Fechado' },
]

export const lojas: Loja[] = [
  {
    id: 'botafogo',
    nome: 'Botafogo',
    bairro: 'Botafogo',
    endereco: 'Rua Voluntários da Pátria, 411',
    cep: '22270-000',
    mapaQuery: 'Rua Voluntários da Pátria, 411 - Botafogo, Rio de Janeiro - RJ',
    imagem: '/img/loja-botafogo.webp',
    imagemAlt: 'Casario histórico da Rua Voluntários da Pátria, em Botafogo',
    referencia: 'Perto do metrô Botafogo, entre a Real Grandeza e a São Clemente.',
    horarios: horarioPadrao,
    matriz: true,
  },
  {
    id: 'vila-isabel-boulevard',
    nome: 'Vila Isabel — Boulevard',
    bairro: 'Vila Isabel',
    endereco: 'Boulevard 28 de Setembro, 258',
    cep: '20551-030',
    mapaQuery: 'Boulevard Vinte e Oito de Setembro, 258 - Vila Isabel, Rio de Janeiro - RJ',
    imagem: '/img/loja-boulevard.webp',
    imagemAlt: 'Boulevard 28 de Setembro, avenida arborizada de Vila Isabel',
    referencia: 'No trecho de comércio do Boulevard, a poucos passos da Uerj.',
    horarios: horarioPadrao,
  },
  {
    id: 'vila-isabel-luis-barbosa',
    nome: 'Vila Isabel — Luís Barbosa',
    bairro: 'Vila Isabel',
    endereco: 'Rua Luís Barbosa, 29',
    cep: '20560-010',
    mapaQuery: 'Rua Luís Barbosa, 29 - Vila Isabel, Rio de Janeiro - RJ',
    imagem: '/img/loja-luis-barbosa.webp',
    imagemAlt: 'Igreja de Vila Isabel, referência do bairro',
    referencia: 'Rua tranquila, saindo do Boulevard na altura da igreja.',
    horarios: horarioPadrao,
  },
]

/** URL do iframe do Google Maps para uma loja. */
export function mapaEmbed(loja: Loja): string {
  return `https://www.google.com/maps?q=${encodeURIComponent(loja.mapaQuery)}&output=embed`
}

/** Link para abrir a rota no app de mapas. */
export function mapaRota(loja: Loja): string {
  return `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(loja.mapaQuery)}`
}
