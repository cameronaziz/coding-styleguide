import 'styled-components'

// This is the theme object that needs to be extended when theme items are added.
declare module 'styled-components' {
  export interface Colors {
    blue: string
    green: string
    grey: string
    lightGrey: string
    white: string
  }

  export interface Fonts {
    sizes: {
      sm: string
      md: string
      lg: string
      xl: string
    }
    families: {
      default: string
      code: string
    }
  }

  export interface DefaultTheme {
    colors: Colors
    fonts: Fonts
  }
}