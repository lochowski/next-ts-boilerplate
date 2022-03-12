import 'styled-components'

declare interface Colors {
  white: '#ffffff'
  black: '#000000'
}

declare interface Font {
  weight: FontWeight
  size: FontSize
  family: FontFamily
}

declare interface FontWeight {
  regular: string
}

declare interface FontSize {
  xxxs: string
  xxs: string
  xs: string
  s: string
}

declare interface FontFamily {
  primary: '"Poppins", sans-serif'
}

declare interface Level {
  1: '1000'
  2: '2000'
  3: '3000'
  4: '4000'
  5: '5000'
  6: '6000'
  7: '7000'
  8: '8000'
  9: '9000'
}

declare module 'styled-components' {
  export interface DefaultTheme {
    color: Colors
    font: Font
    level: Level
    mq: Record<keyof Breakpoints, string>
  }
}
