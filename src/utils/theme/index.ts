import { DefaultTheme } from 'styled-components'
import colors from './colors'
import fonts from './fonts'

// All colors and fonts should be defined in the theme.
// Do not put `color: #3498db;` in a styled component.
// Use `color: ${({ theme }) => theme.colors.blue};`.
const theme: DefaultTheme = {
  colors,
  fonts
}

export default theme
