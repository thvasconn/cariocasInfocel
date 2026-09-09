export type Servico = {
  id: string
  nome: string
  descricao: string
  /** Preço "a partir de", em reais. Varia conforme o modelo do aparelho. */
  precoBase: number
  prazo: string
}

export const servicos: Servico[] = [
  {
    id: 'troca-de-tela',
    nome: 'Troca de tela',
    descricao:
      'Display trincado, manchado ou sem toque. Trabalhamos com telas originais e compatíveis premium — você escolhe, sabendo o preço de cada uma antes.',
    precoBase: 249,
    prazo: 'A partir de 1h',
  },
  {
    id: 'troca-de-bateria',
    nome: 'Troca de bateria',
    descricao:
      'Aparelho descarregando rápido ou desligando sozinho. Testamos a saúde da bateria antes de vender a troca — se o problema for outro, a gente avisa.',
    precoBase: 149,
    prazo: '40 minutos',
  },
  {
    id: 'conector-de-carga',
    nome: 'Conector de carga',
    descricao:
      'Celular que só carrega em certa posição, ou não carrega mais. Muitas vezes é só limpeza do conector, e nesse caso não cobramos troca de peça.',
    precoBase: 129,
    prazo: '1 hora',
  },
  {
    id: 'camera',
    nome: 'Câmera traseira ou frontal',
    descricao:
      'Foto embaçada, tremida, com mancha ou câmera que não abre. Substituímos o módulo e conferimos o foco automático na saída.',
    precoBase: 179,
    prazo: '1 a 2 horas',
  },
  {
    id: 'alto-falante-microfone',
    nome: 'Alto-falante e microfone',
    descricao:
      'Ninguém te escuta na ligação, ou o som saiu chiado depois de um tombo. Troca de auricular, campainha ou microfone.',
    precoBase: 119,
    prazo: '1 hora',
  },
  {
    id: 'oxidacao',
    nome: 'Aparelho molhado (oxidação)',
    descricao:
      'Caiu na água ou tomou chuva. Fazemos limpeza da placa em ultrassônica e diagnóstico honesto — se não tiver conserto viável, dizemos na hora.',
    precoBase: 199,
    prazo: '24 a 72 horas',
  },
  {
    id: 'botoes',
    nome: 'Botões e flex de power',
    descricao:
      'Botão de volume, power ou biometria lateral sem resposta. Troca do flex completo com teste de todos os botões.',
    precoBase: 139,
    prazo: '1 hora',
  },
  {
    id: 'placa',
    nome: 'Reparo de placa',
    descricao:
      'Aparelho que não liga, esquenta demais ou entra em loop. Microssoldagem feita na nossa bancada, com orçamento fechado antes de qualquer intervenção.',
    precoBase: 299,
    prazo: '2 a 5 dias',
  },
]

export const etapasConserto = [
  {
    numero: '01',
    titulo: 'Diagnóstico',
    texto:
      'Você traz o aparelho ou manda o problema pelo WhatsApp. Testamos na bancada e identificamos a causa real, não só o sintoma.',
  },
  {
    numero: '02',
    titulo: 'Orçamento',
    texto:
      'Preço fechado, com a peça e o prazo definidos. Se você desistir, não cobramos nada pelo diagnóstico.',
  },
  {
    numero: '03',
    titulo: 'Reparo',
    texto:
      'Serviço feito aqui mesmo, na loja — nada de mandar seu celular para fora. A maioria dos consertos sai no mesmo dia.',
  },
  {
    numero: '04',
    titulo: 'Garantia',
    texto:
      '90 dias de garantia sobre a peça e a mão de obra, registrados na nota. Deu problema no mesmo reparo, você volta e resolve.',
  },
]
