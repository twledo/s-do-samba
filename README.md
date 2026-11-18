# Site S do Samba

React + Vite + Tailwind v4 + Motion. Publicado no GitHub Pages por GitHub Actions.

## Rodar
```
npm install
npm run dev
```

## Editar
- Integrantes, músicas, formação, contrapartidas e contatos: `src/data.ts`
- Textos das seções: `src/components/`
- Fotos: `public/assets/`

## Publicar
1. No GitHub: Settings > Pages > Build and deployment > Source: **GitHub Actions**.
2. Faça push na `main`. O workflow `.github/workflows/deploy.yml` roda lint, build e publica.
