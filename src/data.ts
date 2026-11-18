// Dados do grupo: edite aqui para atualizar o site.
export const asset = (name: string) => `${import.meta.env.BASE_URL}assets/${name}`

export const contact = {
  name: 'Matias',
  phoneLabel: '(42) 9131-5396',
  whatsapp:
    'https://wa.me/554291315396?text=Ol%C3%A1!%20Vim%20pelo%20site%20do%20S%20do%20Samba%20e%20gostaria%20de%20um%20or%C3%A7amento.',
  email: 'sdosamba1@gmail.com',
  instagram: 'https://instagram.com/s_do_samba',
  instagramHandle: '@s_do_samba',
  base: 'Laranjeiras do Sul (PR), shows em toda a região',
}

export const navLinks = [
  { id: 'quem-somos', label: 'Quem somos' },
  { id: 'repertorio', label: 'Repertório' },
  { id: 'shows', label: 'Shows' },
  { id: 'patrocinio', label: 'Patrocínio' },
] as const

export const members = [
  { name: 'Matias', inst: 'Cavaco, sax e sopros, voz' },
  { name: 'Abner', inst: 'Violão, guitarra, cavaco, voz' },
  { name: 'Cristian', inst: 'Tantã, pandeiro e percussões, voz' },
  { name: 'Jean', inst: 'Tantã, pandeiro e percussões, voz' },
]

export const styles = [
  { title: 'Samba de raiz', text: 'Os clássicos que todo mundo canta junto.' },
  { title: 'Pagode retrô', text: 'Os pagodes que marcaram gerações.' },
  { title: 'Pagode atual', text: 'Os sucessos de agora, com a nossa assinatura.' },
  { title: 'Samba-enredo', text: 'Enredos marcantes para levantar a pista.' },
]

export const songs = [
  'Cheia de Manias', 'Deixa a Vida Me Levar', 'Anunciação', 'Coração Radiante', 'Trem das Onze',
  'Gostava Tanto de Você', 'Não Deixa o Samba Morrer', 'Madalena do Jucu', 'Essa Tal Liberdade',
]

export const businessEvents = [
  'Inaugurações de lojas e estabelecimentos',
  'Ações promocionais e lançamentos de produtos',
  'Feiras, feijoadas corporativas e eventos de marca',
  'Bares, restaurantes e casas de show',
]
export const partyEvents = [
  'Aniversários e festas privadas',
  'Casamentos e recepções',
  'Confraternizações de fim de ano',
  'Celebrações de pequeno, médio e grande porte',
]

export const formacao = [
  ['Harmonia', 'Cavaco, violão e baixo', 'Base harmônica rica e condução rítmica'],
  ['Percussão', 'Tantã, pandeiro e bateria', 'Balanço autêntico, cadência e pressão de samba'],
  ['Sopros', 'Saxofone, trompete e trombone', 'Arranjos marcantes e brilho melódico'],
  ['Vocal', 'Voz principal e coro', 'Interação direta com o público e interpretação'],
]

export const perks = [
  { title: 'Marca no palco', text: 'Banner, backdrop ou telão com a sua logo durante todo o show.' },
  { title: 'Citação ao vivo', text: 'Agradecimento e chamada da marca no microfone, para todo o público.' },
  { title: 'Redes sociais', text: 'Posts, stories e vídeos dos shows marcando o patrocinador.' },
  { title: 'Ativação no evento', text: 'Espaço para degustação, sorteios ou distribuição de brindes.' },
  { title: 'Uniforme do grupo', text: 'Logo do patrocinador nas camisetas usadas nos shows.' },
]

export const differentials = [
  { title: 'Entrosamento de palco', text: 'Amigos de longa data, com estrada para animar qualquer tipo de evento.' },
  { title: 'Repertório que acompanha o público', text: 'Do samba tradicional ao pagode de hoje, no clima que a festa pedir.' },
  { title: 'Show que enche o olho e o ouvido', text: 'Presença de palco, conversa com a plateia e som afinado.' },
  { title: 'Combinado é combinado', text: 'Pontualidade e alinhamento prévio com quem contrata, sem surpresa no dia.' },
]
