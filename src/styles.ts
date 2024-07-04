import { createGlobalStyle } from 'styled-components'

export const cores = {
  rosa: '#E66767',
  rosaClaroRodape: '#FFEBD9',
  branco: '#FFFFFF',
  amarelo: '#FFB930',
  rosaClaroFundo: '#FFF8F2'
}

// export const GlobalCss = createGlobalStyle`
//   * {
//     margin: 0;
//     padding: 0;
//     box-sizing: border-box;
//     font-family: Roboto, sans-serif;
//     list-style: none;
//   }

//   body{
//     background-color: ${cores.rosaClaroFundo};
//     color: ${cores.rosa};
//     padding-top: 40px
//   }

//   .container{
//     max-width: 1024px;
//     width: 100%;
//     margin: 0 auto;
//   }
// `

export const GlobalCss = createGlobalStyle`
*{
  margin: 0;
  padding:0;
  box-sizing: border-box;
  font-family: Roboto, sans-serif;
  list-style: none;
}

body{
  background-color: ${cores.rosaClaroFundo};
  color: ${cores.rosa};
}
`
