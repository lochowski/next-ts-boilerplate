import { createGlobalStyle } from 'styled-components'

import { reset } from './reset.styled'
import { fonts } from './fonts.styled'

export const GlobalStyles = createGlobalStyle`
  ${reset}
  ${fonts}

  *, *::before, *::after {
    box-sizing: border-box;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }

  body {
    font-family: 'Roboto', sans-serif;
  }
`
