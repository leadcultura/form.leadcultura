# form.leadcultura.com.br

Formulário de qualificação Leadcultura × CHA. Página estática (um único `index.html`), sem build.

## Atualizar
Edite `index.html` e faça commit na branch `main`. O GitHub Pages publica sozinho em ~1 minuto.

Ajustes comuns (no topo do `<script>`):
- `RD_TOKEN` e `RD_ID`: token público do RD Station (o mesmo do site da CHA) e os identificadores das conversões de e-mail e contato. A conversão final usa o `id` de cada formato em `FORMATOS`.
- `t.js`: GTM, GA4, Pixel do Facebook e Clarity (copiado do site da CHA, sem o loader de monitoramento do RD).
- `THRESH_HIGH` / `THRESH_MID`: cortes da nota (alta / média).
- `S_CARGO`, `S_RAMO`, `S_VEND`, `S_TEMPO`: pontos de cada opção.
- `DESQ_CARGO` / `DESQ_RAMO`: opções desqualificadas.
- `FORMATOS`: texto, faixa de preço e link da agenda (`ag`) de cada formato.
- `RD_KEYS`: identificadores dos campos no RD Station.

Modo teste: abra a página com `#teste` no final para ver a nota e o payload.

## Domínio
Arquivo `CNAME` = `form.leadcultura.com.br`. No DNS do domínio leadcultura.com.br,
crie um registro **CNAME** `form` apontando para `leadcultura.github.io`.
Depois, em Settings > Pages do repositório, marque **Enforce HTTPS**.

## Logos
Pasta `img/`: versões clara e escura da Leadcultura e da CHA. O tema (claro/escuro) troca a versão automaticamente.
