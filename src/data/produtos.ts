export type CategoriaId =
  | 'celulares'
  | 'capas'
  | 'peliculas'
  | 'carregadores'
  | 'acessorios'

export type Produto = {
  id: string
  nome: string
  categoria: CategoriaId
  preco: number
  /** Preço cheio, quando o produto está em promoção. */
  precoAntigo?: number
  badge?: 'Novo' | 'Promoção' | 'Últimas unidades'
  resumo: string
  descricao: string
  specs: { label: string; valor: string }[]
  destaque?: boolean
  /** Caminho das fotos reais. Sem isso, o site desenha um placeholder da categoria. */
  imagens?: string[]
}

export const categorias: { id: CategoriaId; nome: string; descricao: string }[] = [
  { id: 'celulares', nome: 'Celulares', descricao: 'Novos e seminovos com garantia' },
  { id: 'capas', nome: 'Capas', descricao: 'Anti-impacto, silicone e MagSafe' },
  { id: 'peliculas', nome: 'Películas', descricao: 'Vidro 3D, hidrogel e privacidade' },
  { id: 'carregadores', nome: 'Carregadores', descricao: 'Turbo, sem fio e power banks' },
  { id: 'acessorios', nome: 'Acessórios', descricao: 'Fones, suportes e cabos' },
]

export const produtos: Produto[] = [
  {
    id: 'iphone-15-128gb',
    nome: 'iPhone 15 128GB',
    categoria: 'celulares',
    preco: 4299,
    badge: 'Novo',
    destaque: true,
    resumo: 'Lacrado, nota fiscal e 1 ano de garantia Apple.',
    descricao:
      'iPhone 15 lacrado de fábrica, com porta USB-C, Dynamic Island e câmera principal de 48MP. Sai da loja configurado, com película e capa instaladas na hora, sem custo adicional.',
    specs: [
      { label: 'Tela', valor: '6.1" Super Retina XDR OLED' },
      { label: 'Chip', valor: 'A16 Bionic' },
      { label: 'Câmera', valor: '48MP + 12MP ultra-angular' },
      { label: 'Bateria', valor: 'Até 20h de vídeo' },
      { label: 'Garantia', valor: '12 meses Apple' },
    ],
    imagens: ['/img/produtos/iphone-15.png'],
  },
  {
    id: 'iphone-13-128gb',
    nome: 'iPhone 13 128GB',
    categoria: 'celulares',
    preco: 3099,
    precoAntigo: 3499,
    badge: 'Promoção',
    destaque: true,
    resumo: 'Seminovo vitrine, bateria acima de 90%.',
    descricao:
      'iPhone 13 seminovo revisado na nossa bancada: bateria testada, câmeras, alto-falantes e conector conferidos item a item. Acompanha cabo novo e 90 dias de garantia da loja.',
    specs: [
      { label: 'Tela', valor: '6.1" Super Retina XDR OLED' },
      { label: 'Chip', valor: 'A15 Bionic' },
      { label: 'Saúde da bateria', valor: 'Acima de 90%' },
      { label: 'Estado', valor: 'Seminovo — grade A' },
      { label: 'Garantia', valor: '90 dias Cariocas Infocel' },
    ],
    imagens: ['/img/produtos/iphone-13.png'],
  },
  {
    id: 'galaxy-s24-ultra-256gb',
    nome: 'Samsung Galaxy S24 Ultra 256GB',
    categoria: 'celulares',
    preco: 5499,
    badge: 'Novo',
    destaque: true,
    resumo: 'O topo de linha da Samsung, com caneta S Pen.',
    descricao:
      'Galaxy S24 Ultra nacional, lacrado, com garantia Samsung. Corpo em titânio, tela Dynamic AMOLED 2X de 120Hz, S Pen embutida e sete anos de atualização de sistema.',
    specs: [
      { label: 'Tela', valor: '6.8" AMOLED 120Hz' },
      { label: 'Processador', valor: 'Snapdragon 8 Gen 3' },
      { label: 'Memória', valor: '12GB RAM / 256GB' },
      { label: 'Câmera', valor: '200MP + 50MP + 12MP + 10MP' },
      { label: 'Garantia', valor: '12 meses Samsung' },
    ],
    imagens: ['/img/produtos/galaxy-s24-ultra.png'],
  },
  {
    id: 'galaxy-a55-256gb',
    nome: 'Samsung Galaxy A55 5G 256GB',
    categoria: 'celulares',
    preco: 2199,
    resumo: 'O intermediário mais pedido da loja.',
    descricao:
      'Galaxy A55 5G com corpo em metal, tela Super AMOLED de 120Hz e bateria de 5000mAh. Entrega no mesmo dia para Botafogo e Vila Isabel.',
    specs: [
      { label: 'Tela', valor: '6.6" Super AMOLED 120Hz' },
      { label: 'Memória', valor: '8GB RAM / 256GB' },
      { label: 'Bateria', valor: '5000mAh — 25W' },
      { label: 'Rede', valor: '5G' },
      { label: 'Garantia', valor: '12 meses Samsung' },
    ],
    imagens: ['/img/produtos/galaxy-a55.webp'],
  },
  {
    id: 'moto-g84-256gb',
    nome: 'Motorola Moto G84 5G 256GB',
    categoria: 'celulares',
    preco: 1399,
    precoAntigo: 1699,
    badge: 'Promoção',
    resumo: 'Custo-benefício de 2024 com tela pOLED.',
    descricao:
      'Moto G84 5G com tela pOLED de 120Hz, 256GB de armazenamento e bateria de 5000mAh com carregamento TurboPower de 30W.',
    specs: [
      { label: 'Tela', valor: '6.5" pOLED 120Hz' },
      { label: 'Memória', valor: '8GB RAM / 256GB' },
      { label: 'Bateria', valor: '5000mAh — 30W' },
      { label: 'Rede', valor: '5G' },
      { label: 'Garantia', valor: '12 meses Motorola' },
    ],
  },
  {
    id: 'redmi-note-13-pro',
    nome: 'Xiaomi Redmi Note 13 Pro 256GB',
    categoria: 'celulares',
    preco: 1699,
    badge: 'Últimas unidades',
    resumo: 'Versão global com câmera de 200MP.',
    descricao:
      'Redmi Note 13 Pro versão global, já com Play Store e português. Câmera principal de 200MP com estabilização óptica e carregamento de 67W.',
    specs: [
      { label: 'Tela', valor: '6.67" AMOLED 120Hz' },
      { label: 'Memória', valor: '8GB RAM / 256GB' },
      { label: 'Câmera', valor: '200MP com OIS' },
      { label: 'Carregamento', valor: '67W turbo' },
      { label: 'Garantia', valor: '90 dias Cariocas Infocel' },
    ],
  },
  {
    id: 'capa-anti-impacto',
    nome: 'Capa Anti-Impacto Transparente',
    categoria: 'capas',
    preco: 49.9,
    destaque: true,
    resumo: 'Bordas reforçadas e proteção de câmera.',
    descricao:
      'Capa em TPU com cantos air-cushion, borda elevada na tela e na câmera. Material tratado contra amarelamento. Disponível para as linhas iPhone, Galaxy, Motorola e Xiaomi.',
    specs: [
      { label: 'Material', valor: 'TPU + policarbonato' },
      { label: 'Proteção', valor: 'Quedas de até 1,5m' },
      { label: 'Compatível', valor: 'iPhone, Galaxy, Moto, Redmi' },
    ],
    imagens: ['/img/produtos/capa-anti-impacto.png'],
  },
  {
    id: 'capa-silicone-aveludada',
    nome: 'Capa Silicone Aveludada',
    categoria: 'capas',
    preco: 69.9,
    resumo: 'Toque macio, interior em microfibra.',
    descricao:
      'Capa de silicone líquido com forro interno em microfibra, que evita riscos na traseira do aparelho. Doze cores disponíveis na loja.',
    specs: [
      { label: 'Material', valor: 'Silicone líquido' },
      { label: 'Interior', valor: 'Microfibra' },
      { label: 'Cores', valor: '12 opções' },
    ],
  },
  {
    id: 'capa-magsafe-fosca',
    nome: 'Capa MagSafe Fosca',
    categoria: 'capas',
    preco: 99.9,
    badge: 'Novo',
    resumo: 'Ímãs alinhados, aceita carregador sem fio.',
    descricao:
      'Capa com anel magnético compatível com MagSafe, acabamento fosco antidigital e botões metalizados. Funciona com carregadores e suportes magnéticos.',
    specs: [
      { label: 'Compatível', valor: 'MagSafe / carregador sem fio' },
      { label: 'Acabamento', valor: 'Fosco antidigital' },
      { label: 'Linhas', valor: 'iPhone 12 ao 16' },
    ],
  },
  {
    id: 'pelicula-3d-vidro',
    nome: 'Película 3D de Vidro Temperado',
    categoria: 'peliculas',
    preco: 39.9,
    destaque: true,
    resumo: 'Aplicação grátis na loja, sem bolhas.',
    descricao:
      'Película 9H com bordas curvas, cobertura total da tela e camada oleofóbica. A aplicação é feita por nós, na hora, com garantia contra bolhas.',
    specs: [
      { label: 'Dureza', valor: '9H' },
      { label: 'Cobertura', valor: 'Tela inteira (3D)' },
      { label: 'Aplicação', valor: 'Grátis na loja' },
    ],
    imagens: ['/img/produtos/pelicula-3d-vidro.png'],
  },
  {
    id: 'pelicula-privacidade',
    nome: 'Película de Privacidade',
    categoria: 'peliculas',
    preco: 59.9,
    resumo: 'Ninguém vê sua tela de lado.',
    descricao:
      'Película com filtro de privacidade a 28°: a tela só é legível de frente. Indicada para quem usa o celular em transporte público e ambientes cheios.',
    specs: [
      { label: 'Ângulo de visão', valor: '28°' },
      { label: 'Dureza', valor: '9H' },
      { label: 'Aplicação', valor: 'Grátis na loja' },
    ],
  },
  {
    id: 'pelicula-hidrogel-fosca',
    nome: 'Película Hidrogel Fosca',
    categoria: 'peliculas',
    preco: 44.9,
    resumo: 'Antirreflexo, ideal para jogos.',
    descricao:
      'Película de hidrogel com acabamento fosco: reduz reflexo, disfarça marcas de dedo e melhora o deslize em jogos. Se autorregenera de micro-riscos.',
    specs: [
      { label: 'Tipo', valor: 'Hidrogel autorregenerativo' },
      { label: 'Acabamento', valor: 'Fosco antirreflexo' },
      { label: 'Aplicação', valor: 'Grátis na loja' },
    ],
  },
  {
    id: 'carregador-turbo-30w',
    nome: 'Carregador Turbo 30W USB-C',
    categoria: 'carregadores',
    preco: 89.9,
    destaque: true,
    resumo: 'Certificado pela Anatel, com cabo incluso.',
    descricao:
      'Fonte de 30W com Power Delivery e proteção contra sobrecarga. Acompanha cabo USB-C de 1 metro trançado. Certificação Anatel — nada de carregador genérico que estraga bateria.',
    specs: [
      { label: 'Potência', valor: '30W PD' },
      { label: 'Saída', valor: 'USB-C' },
      { label: 'Acompanha', valor: 'Cabo trançado 1m' },
      { label: 'Certificação', valor: 'Anatel' },
    ],
    imagens: ['/img/produtos/carregador-turbo-30w.png'],
  },
  {
    id: 'power-bank-20000',
    nome: 'Power Bank 20.000mAh 22.5W',
    categoria: 'carregadores',
    preco: 179.9,
    precoAntigo: 219.9,
    badge: 'Promoção',
    destaque: true,
    resumo: 'Carrega o celular quatro vezes.',
    descricao:
      'Bateria externa de 20.000mAh com carregamento rápido de 22,5W, display de carga e duas saídas USB. Cabe na mochila e aguenta o dia inteiro fora de casa.',
    specs: [
      { label: 'Capacidade', valor: '20.000mAh' },
      { label: 'Potência', valor: '22,5W' },
      { label: 'Portas', valor: '2x USB-A + 1x USB-C' },
      { label: 'Display', valor: 'Percentual digital' },
    ],
    imagens: ['/img/produtos/power-bank.png'],
  },
  {
    id: 'carregador-magsafe-15w',
    nome: 'Carregador Sem Fio Magnético 15W',
    categoria: 'carregadores',
    preco: 149.9,
    badge: 'Novo',
    resumo: 'Encaixa por ímã e carrega sem cabo.',
    descricao:
      'Base magnética de 15W compatível com MagSafe. Encaixa sozinha na traseira do aparelho e mantém o celular em pé na mesa enquanto carrega.',
    specs: [
      { label: 'Potência', valor: '15W' },
      { label: 'Padrão', valor: 'Qi / MagSafe' },
      { label: 'Cabo', valor: 'USB-C de 1,5m incluso' },
    ],
  },
  {
    id: 'fone-tws-pro',
    nome: 'Fone Bluetooth TWS Pro',
    categoria: 'acessorios',
    preco: 199.9,
    destaque: true,
    resumo: 'Cancelamento de ruído e 30h de bateria.',
    descricao:
      'Fone sem fio com cancelamento ativo de ruído, modo transparência e estojo com carga para 30 horas de uso. Pareia com Android e iPhone.',
    specs: [
      { label: 'Bluetooth', valor: '5.3' },
      { label: 'Bateria', valor: '6h + 24h no estojo' },
      { label: 'Recursos', valor: 'ANC e modo transparência' },
      { label: 'Resistência', valor: 'IPX4' },
    ],
    imagens: ['/img/produtos/fone-tws-pro.png'],
  },
  {
    id: 'fone-usb-c',
    nome: 'Fone com Fio USB-C',
    categoria: 'acessorios',
    preco: 59.9,
    resumo: 'Para quem não abre mão do cabo.',
    descricao:
      'Fone intra-auricular com conector USB-C, microfone embutido e controle de volume no cabo. Compatível com iPhone 15 em diante e Androids modernos.',
    specs: [
      { label: 'Conector', valor: 'USB-C' },
      { label: 'Microfone', valor: 'Embutido com controle' },
      { label: 'Cabo', valor: '1,2m emborrachado' },
    ],
  },
  {
    id: 'suporte-veicular-magnetico',
    nome: 'Suporte Veicular Magnético',
    categoria: 'acessorios',
    preco: 79.9,
    resumo: 'Ímã forte, não solta em rua esburacada.',
    descricao:
      'Suporte de carro com ímãs de neodímio e base para saída de ar ou painel. Segura o aparelho firme mesmo com capa mais grossa.',
    specs: [
      { label: 'Fixação', valor: 'Saída de ar ou painel' },
      { label: 'Ímã', valor: 'Neodímio N52' },
      { label: 'Rotação', valor: '360°' },
    ],
  },
]

export const produtosDestaque = produtos.filter((p) => p.destaque)

export function produtoPorId(id: string): Produto | undefined {
  return produtos.find((p) => p.id === id)
}
