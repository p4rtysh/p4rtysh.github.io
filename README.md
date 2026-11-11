# p4rty · portfólio

Site estático em pixel art feito com HTML, CSS e JavaScript puro (sem build).

## Estrutura

```
.
├── index.html            # conteúdo da página
├── css/
│   ├── tokens.css        # cores, tema claro/escuro, safe-areas
│   ├── base.css          # reset, tipografia, layout, borda pixelada
│   └── components.css    # nav, hero, botões, cards, rodapé
├── js/
│   ├── main.js           # ponto de entrada
│   ├── cat.js            # sprite do gatinho
│   ├── sfx.js            # som de clique e botão ♪
│   └── theme.js          # alternar tema
├── assets/
│   ├── favicon.svg
│   └── sounds/click.mp3  # som de clique
└── .github/workflows/
    └── deploy.yml        # deploy automático no GitHub Pages
```



Se o repositório se chamar `p4rtysh.github.io`, o site fica em `https://p4rtysh.github.io`.
Para outros nomes, fica em `https://p4rtysh.github.io/nome-do-repo/` (os caminhos relativos já funcionam).

## Para completar

Procure por `TODO` no `index.html`.
