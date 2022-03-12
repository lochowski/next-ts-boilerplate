import { css } from 'styled-components'

export const fonts = css`
  @font-face {
    font-weight: 300;
    font-family: 'Roboto';
    font-style: normal;
    src: local(''), url('/fonts/roboto-v27-latin-ext-300.woff2') format('woff2'),
      url('/fonts/roboto-v27-latin-ext-300.woff') format('woff');
  }

  @font-face {
    font-weight: 400;
    font-family: 'Roboto';
    font-style: normal;
    src: local(''), url('/fonts/roboto-v27-latin-ext-regular.woff2') format('woff2'),
      url('/fonts/roboto-v27-latin-ext-regular.woff') format('woff');
  }

  @font-face {
    font-weight: 500;
    font-family: 'Roboto';
    font-style: normal;
    src: local(''), url('/fonts/roboto-v27-latin-ext-500.woff2') format('woff2'),
      url('/fonts/roboto-v27-latin-ext-500.woff') format('woff');
  }
`
