export type Credito = {
  arquivo: string
  titulo: string
  autor: string
  licenca: string
  pagina: string
}

/**
 * Fotos de fundo do site, todas do Wikimedia Commons. As licenças CC BY e
 * CC BY-SA exigem crédito — é por isso que esta lista aparece no rodapé.
 * Ao trocar por fotos próprias da loja, esvazie este array.
 */
export const creditosFotos: Credito[] = [
  {
    arquivo: 'cidade-noite.webp',
    titulo: "Nighttime iPhone photo (Unsplash)",
    autor: "Trent Yarnell tyarnell",
    licenca: "CC0",
    pagina: "https://commons.wikimedia.org/wiki/File:Nighttime_iPhone_photo_(Unsplash).jpg",
  },
  {
    arquivo: 'rio-noite.webp',
    titulo: "Rio de Janeiro at night from above, Rio de Janeiro",
    autor: "Wilfredor",
    licenca: "CC0",
    pagina: "https://commons.wikimedia.org/wiki/File:Rio_de_Janeiro_at_night_from_above,_Rio_de_Janeiro.jpg",
  },
  {
    arquivo: 'loja-botafogo.webp',
    titulo: "Imóvel da rua Voluntários da Pátria, n.º 457 - Rio de Janeiro - 20230914153702",
    autor: "Donatas Dabravolskas",
    licenca: "CC BY-SA 4.0",
    pagina: "https://commons.wikimedia.org/wiki/File:Im%C3%B3vel_da_rua_Volunt%C3%A1rios_da_P%C3%A1tria,_n.%C2%BA_457_-_Rio_de_Janeiro_-_20230914153702.jpg",
  },
  {
    arquivo: 'loja-boulevard.webp',
    titulo: "Boulevard 28 de Setembro",
    autor: "Junius",
    licenca: "CC BY-SA 3.0",
    pagina: "https://commons.wikimedia.org/wiki/File:Boulevard_28_de_Setembro.JPG",
  },
  {
    arquivo: 'loja-luis-barbosa.webp',
    titulo: "Rio-de-Janeiro-Igreja-Nossa-Senhora-de-Lourdes-Imagem-Inepac",
    autor: "autor desconhecido",
    licenca: "CC BY 4.0",
    pagina: "https://commons.wikimedia.org/wiki/File:Rio-de-Janeiro-Igreja-Nossa-Senhora-de-Lourdes-Imagem-Inepac.jpg",
  },
  {
    arquivo: 'vila-isabel-antiga.webp',
    titulo: "Bonde da Villa Isabel - Tiradentes com rua Espirito Santo",
    autor: "autor desconhecido",
    licenca: "Public domain",
    pagina: "https://commons.wikimedia.org/wiki/File:Bonde_da_Villa_Isabel_-_Tiradentes_com_rua_Espirito_Santo.jpg",
  },
  {
    arquivo: 'hero-lineup.webp',
    titulo: "IPhone (Plus)",
    autor: "Ka Kit Pang",
    licenca: "CC BY-SA 4.0",
    pagina: "https://commons.wikimedia.org/wiki/File:IPhone_(Plus).jpg",
  },
  {
    arquivo: 'hero-detalhe.webp',
    titulo: "Xiaomi Redmi Note 10 Pro",
    autor: "Petar Milošević",
    licenca: "CC BY-SA 4.0",
    pagina: "https://commons.wikimedia.org/wiki/File:Xiaomi_Redmi_Note_10_Pro.jpg",
  },
  {
    arquivo: 'produtos/iphone-15.webp',
    titulo: "Back of iPhone 15",
    autor: "ThePhotoGraphIc",
    licenca: "CC BY-SA 4.0",
    pagina: "https://commons.wikimedia.org/wiki/File:Back_of_iPhone_15.jpg",
  },
  {
    arquivo: 'produtos/iphone-13.webp',
    titulo: "IPhone 13 camera lens group",
    autor: "人工知能",
    licenca: "CC BY-SA 4.0",
    pagina: "https://commons.wikimedia.org/wiki/File:IPhone_13_camera_lens_group.jpg",
  },
  {
    arquivo: 'produtos/galaxy-a55.webp',
    titulo: "Samsung Galaxy A55 5G 2024 (cropped)",
    autor: "Captainmorlypogi1959",
    licenca: "CC BY-SA 4.0",
    pagina: "https://commons.wikimedia.org/wiki/File:Samsung_Galaxy_A55_5G_2024_(cropped).jpg",
  },
  {
    arquivo: 'produtos/galaxy-s24-ultra.webp',
    titulo: "SAMSUNG Galaxy S24 Ultra (2)",
    autor: "Dinkun Chen",
    licenca: "CC BY-SA 4.0",
    pagina: "https://commons.wikimedia.org/wiki/File:SAMSUNG_Galaxy_S24_Ultra_(2).jpg",
  },
  {
    arquivo: 'produtos/power-bank.webp',
    titulo: "Power bank",
    autor: "Ilya Plekhanov",
    licenca: "CC BY-SA 3.0",
    pagina: "https://commons.wikimedia.org/wiki/File:Power_bank.JPG",
  },
]
