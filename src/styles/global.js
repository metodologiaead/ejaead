import { createGlobalStyle } from "styled-components"

const GlobalStyles = createGlobalStyle`

  html, body, div, span, applet, object, iframe,
  h1, h2, h3, h4, h5, h6, p, blockquote, pre,
  a, abbr, acronym, address, big, cite, code,
  del, dfn, em, img, ins, kbd, q, s, samp,
  small, strike, strong, sub, sup, tt, var,
  b, u, i, center,
  dl, dt, dd, ol, ul, li,
  fieldset, form, label, legend,
  table, caption, tbody, tfoot, thead, tr, th, td,
  article, aside, canvas, details, embed,
  figure, figcaption, footer, header, hgroup,
  menu, nav, output, ruby, section, summary,
  time, mark, audio, video {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
  }
  /* HTML5 display-role reset for older browsers */
  article, aside, details, figcaption, figure,
  footer, header, hgroup, menu, nav, section {
    display: block;
  }
  body {
    line-height: 1;
  }
  ol, ul {
    list-style: none;
  }
  blockquote, q {
    quotes: none;
  }
  blockquote:before, blockquote:after,
  q:before, q:after {
    content: '';
    content: none;
  }
  table {
    border-collapse: collapse;
    border-spacing: 0;
  }
  * {
    box-sizing: border-box; 
  }
  body {
    background: #ffffff;
    line-height: 1;
    font-size: 100%;
    font-weight: 400;
    width: 100%;
    color: var(--color-text);
  }
  img {
    display: block;
  	width: 100%;
  	height: auto;
  }
  ::-webkit-scrollbar {
width:10px;
height: 10px;
overflow-y: auto;
}
 
/* aqui é para personalizar o fundo da barra, neste caso estou colocando um fundo cinza escuro*/
::-webkit-scrollbar-track {
background: #333;
}
 
/* aqui é a alça da barra, que demonstra a altura que você está na página
estou colocando uma cor azul clara nela*/
::-webkit-scrollbar-thumb {
background: var(--beige-color);
border-radius: 10px
}

:root {
  --color-primary: #c49d94;
  --color-secundary: rgba(255,255,255, .8);
  --color-text: #222;
  
  --blue-color: #0C3459;
  --orange-color: #BF5F2C;
  --beige-color: #c49d94;
  --grey-color: #666666;
}
`

export default GlobalStyles