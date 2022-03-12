import { DefaultTheme } from 'styled-components'

const breakpoints: Breakpoints = {
  desktop: '1200px',
  laptop: '1024px',
  tablet: '768px',
  phone: '375px',
}

export const theme: DefaultTheme = {
  color: {
    white: '#ffffff',
    black: '#000000',
  },
  font: {
    weight: {
      regular: '400',
    },
    size: {
      xxxs: '1.2rem',
      xxs: '1.4rem',
      xs: '1.6rem',
      s: '1.8rem',
      // TODO: Depending on your preferences, add the remaining sizes
    },
    family: {
      primary: '"Poppins", sans-serif',
    },
  },
  level: {
    1: '1000',
    2: '2000',
    3: '3000',
    4: '4000',
    5: '5000',
    6: '6000',
    7: '7000',
    8: '8000',
    9: '9000',
  },
  mq: Object.keys(breakpoints).reduce((acc, breakpoint) => {
    acc[breakpoint] = `@media (min-width: ${breakpoints[breakpoint]})`
    return acc
  }, {} as Record<keyof Breakpoints, string>),
}
