// Dados do grupo (edite aqui para atualizar o site)
const members = [
  { name: 'Matias', inst: 'Cavaco, sax e sopros, voz' },
  { name: 'Abner', inst: 'Violão, guitarra, cavaco, voz' },
  { name: 'Cristian', inst: 'Tantã, pandeiro e percussões, voz' },
  { name: 'Jean', inst: 'Tantã, pandeiro e percussões, voz' },
];

const songs = [
  'Cheia de Manias', 'Deixa a Vida Me Levar', 'Anunciação', 'Coração Radiante', 'Trem das Onze',
  'Gostava Tanto de Você', 'Não Deixa o Samba Morrer', 'Madalena do Jucu', 'Essa Tal Liberdade',
];

const formacao = [
  ['Harmonia', 'Cavaco, violão e baixo', 'Base harmônica rica e condução rítmica'],
  ['Percussão', 'Tantã, pandeiro e bateria', 'Balanço autêntico, cadência e pressão de samba'],
  ['Sopros', 'Saxofone, trompete e trombone', 'Arranjos marcantes e brilho melódico'],
  ['Vocal', 'Voz principal e coro', 'Interação direta com o público e interpretação'],
];

const perks = [
  ['Marca no palco', 'Banner, backdrop ou telão com a sua logo durante todo o show.'],
  ['Citação ao vivo', 'Agradecimento e chamada da marca no microfone, para todo o público.'],
  ['Redes sociais', 'Posts, stories e vídeos dos shows marcando o patrocinador.'],
  ['Ativação no evento', 'Espaço para degustação, sorteios ou distribuição de brindes.'],
  ['Uniforme do grupo', 'Logo do patrocinador nas camisetas usadas nos shows.'],
  ['Cotas sob medida', 'Montamos o pacote de acordo com o objetivo e o investimento da sua marca.', true],
];

const $ = (s, r = document) => r.querySelector(s);
const el = (html) => { const t = document.createElement('template'); t.innerHTML = html.trim(); return t.content.firstChild; };

// Renderização das listas
members.forEach(m => $('#members').append(el(
  `<div class="reveal rounded-2xl bg-ink p-6"><h3 class="font-display text-3xl font-semibold uppercase">${m.name}</h3><p class="mt-2 text-soft">${m.inst}</p></div>`)));

songs.forEach(s => $('#songs').append(el(
  `<li class="rounded-full border border-lime/40 bg-ink2 px-4 py-2 text-sm text-paper md:text-base">${s}</li>`)));

formacao.forEach(([a, b, c]) => $('#formacao').append(el(
  `<tr><td class="p-4 font-bold text-paper">${a}</td><td class="p-4">${b}</td><td class="p-4">${c}</td></tr>`)));

perks.forEach(([t, d, hl], i) => $('#perks').append(el(hl
  ? `<div class="reveal flex flex-col justify-center rounded-2xl bg-teal p-6 text-ink"><h3 class="text-xl font-bold">${t}</h3><p class="mt-2">${d}</p></div>`
  : `<div class="reveal rounded-2xl bg-ink2 p-6"><span class="mb-3 flex h-9 w-9 items-center justify-center rounded-full bg-teal/15 font-bold text-teal">${i + 1}</span><h3 class="text-xl font-bold">${t}</h3><p class="mt-2 text-soft">${d}</p></div>`)));

// Menu mobile
const btn = $('#menuBtn'), menu = $('#mobileMenu');
btn.addEventListener('click', () => {
  const open = menu.classList.toggle('hidden') === false;
  btn.setAttribute('aria-expanded', String(open));
});
menu.querySelectorAll('a').forEach(a => a.addEventListener('click', () => { menu.classList.add('hidden'); btn.setAttribute('aria-expanded', 'false'); }));

// Barra de navegação ganha fundo ao rolar
const nav = $('[data-nav]');
const onScroll = () => nav.classList.toggle('bg-ink/90', window.scrollY > 40) || nav.classList.toggle('backdrop-blur', window.scrollY > 40);
onScroll(); window.addEventListener('scroll', onScroll, { passive: true });

// Aparecer ao rolar
const io = new IntersectionObserver((entries) => entries.forEach(e => {
  if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
}), { threshold: 0.12 });
document.querySelectorAll('.reveal').forEach(n => io.observe(n));

// Link ativo no menu
const links = [...document.querySelectorAll('.nav-link')];
const secs = links.map(l => document.querySelector(l.getAttribute('href'))).filter(Boolean);
const so = new IntersectionObserver((entries) => entries.forEach(e => {
  if (e.isIntersecting) links.forEach(l => l.classList.toggle('active', l.getAttribute('href') === '#' + e.target.id));
}), { rootMargin: '-45% 0px -50% 0px' });
secs.forEach(s => so.observe(s));

// Contagem dos números
const co = new IntersectionObserver((entries) => entries.forEach(e => {
  if (!e.isIntersecting) return;
  co.unobserve(e.target);
  const end = +e.target.dataset.count; const t0 = performance.now();
  if (matchMedia('(prefers-reduced-motion: reduce)').matches) return;
  const tick = (t) => { const p = Math.min((t - t0) / 1200, 1); e.target.textContent = Math.round(end * (1 - Math.pow(1 - p, 3))); if (p < 1) requestAnimationFrame(tick); };
  requestAnimationFrame(tick);
}), { threshold: 0.6 });
document.querySelectorAll('[data-count]').forEach(n => co.observe(n));

// Copiar e-mail
const copy = $('#copyMail');
copy.addEventListener('click', async () => {
  try { await navigator.clipboard.writeText('sdosamba1@gmail.com'); copy.textContent = 'Copiado!'; }
  catch { copy.textContent = 'Selecione e copie'; }
  setTimeout(() => (copy.textContent = 'Copiar'), 2000);
});

$('#year').textContent = new Date().getFullYear();
