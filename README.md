# Infocel — site institucional e vitrine

Site da Infocel, loja de celulares, acessórios e assistência técnica no Rio de Janeiro — três
unidades, uma em Botafogo e duas em Vila Isabel. Vitrine de produtos, tabela de serviços de
conserto e captação de contato, tudo levando para o WhatsApp.

Feito com **Vite + React 19 + TypeScript + Tailwind CSS v4**, sem backend: os dados moram em
arquivos TypeScript dentro de `src/data/`.

## Rodando o projeto

```bash
npm install
npm run dev      # abre em http://localhost:5173
```

Outros comandos:

| Comando           | O que faz                                                       |
| ----------------- | --------------------------------------------------------------- |
| `npm run build`   | Checa os tipos e gera a versão de produção em `dist/`             |
| `npm run preview` | Serve o `dist/` localmente, para conferir antes de publicar       |
| `npm run lint`    | Roda o oxlint                                                     |
| `npm run check`   | Roda o autoteste da validação do formulário (`src/lib/validacao`) |

## Onde editar o conteúdo

Todo o conteúdo do site sai de quatro arquivos. Não é preciso mexer em componente nenhum para
trocar preço, produto ou endereço.

### `src/data/site.ts` — a loja e as unidades

Dividido em duas partes.

**`site`** guarda o que é comum a todas as unidades: WhatsApp, telefone fixo, e-mail e Instagram.
O campo `whatsapp` vai em formato internacional e **só dígitos** (`5521999998888`) — é dele que
todos os botões de WhatsApp do site são montados.

**`lojas`** é a lista de unidades. Hoje são três:

| Unidade | Endereço |
| ------- | -------- |
| Botafogo (matriz) | Rua Voluntários da Pátria, 411 |
| Vila Isabel — Boulevard | Boulevard 28 de Setembro, 258 |
| Vila Isabel — Luís Barbosa | Rua Luís Barbosa, 29 |

Cada uma tem `endereco`, `cep`, `mapaQuery` (o texto que vai para o Google Maps), `imagem`,
`referencia` (a frase de "fica perto de…") e os próprios `horarios`. Para abrir uma quarta loja,
basta acrescentar um item no array: a seção de localização, o rodapé e a página de contato passam
a mostrá-la sozinhos.

As funções `mapaEmbed(loja)` e `mapaRota(loja)` montam a URL do iframe e a do botão "traçar rota".

### `src/data/produtos.ts` — vitrine

Cada produto é um objeto com:

```ts
{
  id: 'iphone-15-128gb',        // vira a URL: /produto/iphone-15-128gb
  nome: 'iPhone 15 128GB',
  categoria: 'celulares',        // celulares | capas | peliculas | carregadores | acessorios
  preco: 4299,
  precoAntigo: 4799,             // opcional — mostra o preço riscado
  badge: 'Novo',                 // opcional — 'Novo' | 'Promoção' | 'Últimas unidades'
  resumo: 'Uma linha no card.',
  descricao: 'Texto da página de detalhe.',
  specs: [{ label: 'Tela', valor: '6.1" OLED' }],
  destaque: true,                // opcional — entra na seção "Produtos em destaque" da Home
  imagens: ['/produtos/iphone-15.jpg'],  // opcional — veja "Fotos" abaixo
}
```

Para criar uma categoria nova, acrescente o id no tipo `CategoriaId`, adicione a entrada em
`categorias` e um desenho correspondente em `src/components/ui/ProdutoImagem.tsx`.

### `src/data/servicos.ts` — conserto

Lista de serviços com `precoBase` (o "a partir de") e `prazo`, além de `etapasConserto`, que é o
passo a passo mostrado na Home e na página de conserto.

### `src/data/depoimentos.ts` — avaliações

Nome, bairro, nota de 1 a 5 e texto. O carrossel usa scroll horizontal nativo.

## Fotos

### Do topo e das seções (`public/img/`)

O topo usa duas fotos reais de aparelhos: `hero-lineup.webp` (a fileira de iPhone 15) e
`hero-detalhe.webp` (o macro do módulo de câmeras). As demais são de ambiente — o Rio à noite na
faixa de chamada, a foto urbana na seção de assistência — e uma de referência por unidade.

Todas vêm do Wikimedia Commons em licença livre, e por isso o rodapé traz um bloco "Créditos das
fotos"; a lista fica em `src/data/creditos.ts`.

Ao substituir por fotos próprias da loja, troque os arquivos em `public/img/` mantendo os nomes
(ou ajuste os caminhos em `site.ts` e nas seções) e **esvazie o array `creditosFotos`** — o bloco
de créditos some junto.

### Dos produtos

Cinco produtos já têm foto real em `public/img/produtos/` — iPhone 15, iPhone 13, Galaxy S24 Ultra,
Galaxy A55 e o power bank. São só esses porque cada foto precisa ser **do modelo que a ficha
anuncia**: pôr uma foto de Galaxy numa listagem de iPhone seria anunciar um produto que não é
aquele. Os demais mostram o ícone desenhado da categoria sobre o brilho azul, e nenhuma imagem
quebrada aparece.

Para usar fotos suas:

1. Coloque os arquivos em `public/img/produtos/`.
2. Preencha `imagens: ['/img/produtos/nome-do-arquivo.webp']` no produto.

A primeira imagem é a principal; com duas ou mais, a página de detalhe mostra as miniaturas.

O feed do Instagram na Home é **mockado** em `src/components/sections/InstagramFeed.tsx`, no
estilo das artes da loja. Troque pelos posts reais (ou por um embed) quando quiser.

## Estrutura

```
src/
  components/
    layout/      Header, Footer, botão flutuante do WhatsApp, Layout das rotas
    ui/          Button, Badge, Card, SectionTitle, Arcos, Reveal, Campo,
                 ProdutoCard, GradeProdutos…
    sections/    Blocos da Home: Hero, Categorias, Destaques, Sobre, Servicos,
                 Depoimentos, Localizacao, InstagramFeed, CTA
  data/          produtos.ts, servicos.ts, depoimentos.ts, site.ts
  lib/           whatsapp.ts (links e formatação de R$), validacao.ts (formulário)
  pages/         Home, Loja, ProdutoDetalhe, Conserto, Contato
  styles/        index.css — tema do Tailwind e utilitários da marca
```

## Identidade visual

O tema fica em `src/styles/index.css`, no bloco `@theme` (Tailwind v4 configura por CSS, não por
`tailwind.config.js`):

| Token                 | Valor     | Uso                                  |
| --------------------- | --------- | ------------------------------------ |
| `--color-noite`       | `#0A0A0A` | Fundo da página                      |
| `--color-grafite`     | `#141414` | Fundo dos cards                      |
| `--color-borda`       | `#262626` | Bordas                               |
| `--color-azul`        | `#1E90F0` | Cor primária da marca                |
| `--color-azul-claro`  | `#5DC3FF` | Hover e ponta do gradiente           |
| `--color-cinza`       | `#B3B3B3` | Texto secundário                     |

Use como qualquer classe do Tailwind: `bg-noite`, `text-azul`, `border-borda`.

Utilitários próprios:

- `titulo` — Archivo 900 condensado em caixa alta, para os títulos de impacto das seções.
- `titulo-fino` — Archivo 200 em caixa mista, com entrelinha fechada. É a voz do topo da Home e
  dos preços nos cards: mesma família, peso oposto.
- `texto-gradiente` — o gradiente azul aplicado ao texto.
- `container-infocel` — largura máxima e respiro lateral padrão do site.
- `vidro` — o painel de vidro fosco (fundo translúcido + `backdrop-filter`) usado em praticamente
  todos os cards. É ele que deixa a atmosfera de fundo atravessar borrada.
- `vidro-forte` — a mesma ideia com mais opacidade, para painéis sobre foto.
- `veu-foto` — o degradê que garante contraste do texto sobre qualquer fotografia.

A camada de atmosfera (as manchas azuis que o vidro desfoca) fica em `Layout.tsx`, num `div`
fixo atrás de tudo.

Os arcos azuis (`src/components/ui/Arcos.tsx`) são o elemento gráfico recorrente da marca:
`<Arcos />` para os anéis concêntricos e `<SeparadorArco />` para o divisor entre seções.

Tipografia: **Archivo** (títulos) e **Manrope** (texto), carregadas do Google Fonts no
`index.html`.

## Card de produto

`ProdutoCard` é centralizado: foto (ou ícone) no topo com brilho azul atrás, nome, resumo, preço
grande e uma tarja de oferta. A tarja mostra o desconto quando existe `precoAntigo` (`11% off`,
com o valor cheio riscado ao lado) e, quando não existe, o parcelamento em 12x — a lógica está na
função `textoOferta`, no próprio arquivo.

O hover levanta o card com uma mola (`whileHover={{ y: -6 }}`) e amplia a foto. As grades usam
`GradeProdutos`, que faz os cards entrarem escalonados ao aparecer na tela — é o mesmo componente
na Home, na Loja e nos relacionados da página de produto.

## O que ainda não existe

Não há backend, carrinho, pagamento nem login — por decisão de escopo. Os pontos que um dia vão
conversar com uma API já estão isolados:

- `src/data/*.ts` — trocar os arrays por `fetch` não muda nenhum componente. Vale para produtos,
  serviços, depoimentos e também para a lista de lojas.
- `src/pages/Contato.tsx`, função `enviar` — hoje valida e mostra o recibo na tela; é onde entra
  o POST.
- `src/pages/Conserto.tsx`, formulário de orçamento — monta a mensagem e abre o WhatsApp.

## Publicação

É um SPA: o servidor precisa devolver o `index.html` para qualquer rota, senão `/loja` dá 404 ao
recarregar. Na Vercel e na Netlify isso já vem configurado; no Nginx, use
`try_files $uri $uri/ /index.html;`.
