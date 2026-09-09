export type Depoimento = {
  id: string
  nome: string
  nota: 1 | 2 | 3 | 4 | 5
  texto: string
}

/** Avaliações reais copiadas do perfil da loja no Google — atualize à mão quando quiser trocar. */
export const depoimentos: Depoimento[] = [
  {
    id: 'g1',
    nome: 'Rogerio Marcio Brito',
    nota: 5,
    texto: 'Show de bola, produtos excelentes, pessoal da loja muitos atenciosos.',
  },
  {
    id: 'g2',
    nome: 'Priscila Chauvet',
    nota: 5,
    texto: 'Excelente atendimento, boa variedade de produto e preço muito bom.',
  },
  {
    id: 'g3',
    nome: 'Oswaldir William',
    nota: 5,
    texto:
      'Atendeu as minhas expectativas. Muito bom atendimento, preços compatíveis a qualidade do produto e variedade desses. Coloquei a película de hidrogel em meu celular e ficou ótimo, destreza e zelo de quem aplicou. Recomendo a loja bem como os serviços prestados.',
  },
  {
    id: 'g4',
    nome: 'Edson Lima',
    nota: 4,
    texto: 'Loja com grande variedades de produtos e bom atendimento, com ótimo atendimento e com garantia.',
  },
]
