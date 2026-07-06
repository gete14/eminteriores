# EM Interiores

Site institucional da EM Interiores — projetos de design de interiores conduzidos por Eduarda Silva Prado, do briefing ao tour virtual do ambiente pronto.

Produção: [eminteriores.com.br](https://eminteriores.com.br)

## Stack

- [React 19](https://react.dev/) + [Vite](https://vitejs.dev/)
- [React Router](https://reactrouter.com/) (`HashRouter`) para navegação entre páginas
- [react-slick](https://react-slick.neostack.com/) + [GLightbox](https://biati-digital.github.io/glightbox/) para os carrosséis e a galeria em lightbox do Portfólio
- [react-icons](https://react-icons.github.io/react-icons/) e [lucide-react](https://lucide.dev/) para ícones
- Deploy estático no GitHub Pages (domínio próprio via `CNAME`)

## Estrutura do projeto

```
src/
  main.jsx            # bootstrap da aplicação (StrictMode + render)
  App.jsx              # rotas da aplicação
  pages/                # uma pasta por página, com JSX, CSS e imagens co-localizados
    LandingPage/         # rota /home
    ComoFunciona/         # rota /como-funciona
    Portfolio/            # rota /portfolio
    Contato/              # rota /contato
    LinkBridge/           # rota / (link-in-bio)
  common/               # componentes compartilhados entre páginas
    NavBar/
    Footer/
    WhatsAppButton/
    ScrollToTop.jsx
  assets/               # imagens compartilhadas entre features (logos, fundo)
  styles/
    global.css           # reset, fonte e variáveis CSS globais
```

Cada página em `src/pages/<Nome>` concentra o que só ela usa (subcomponentes, CSS e imagens). Recursos usados por mais de uma página (logos, fundo compartilhado) ficam em `src/assets/`.

## Rodando localmente

```bash
npm install
npm run dev
```

## Scripts

| Script            | Descrição                                              |
| ----------------- | ------------------------------------------------------- |
| `npm run dev`      | Servidor de desenvolvimento com hot reload               |
| `npm run build`    | Build de produção em `dist/`                             |
| `npm run preview`  | Serve o build de produção localmente                      |
| `npm run lint`     | Roda o ESLint                                              |
| `npm run deploy`   | Build + publica `dist/` no branch `gh-pages` (fallback manual) |

## Deploy

O deploy para o GitHub Pages é automático: todo push em `main` dispara o workflow `.github/workflows/deploy.yml`, que builda o projeto e publica `dist/` (incluindo o `CNAME` do domínio próprio) no branch `gh-pages`. O script `npm run deploy` continua disponível como alternativa manual.
