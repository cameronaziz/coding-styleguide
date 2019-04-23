import styled, { createGlobalStyle } from 'styled-components'

// Export a const named StyledSomeName. This will be a component so leading capital letter is required.
// In the template literal, it is CSS not JS, don't forget semicolons.
// Alphabetize the properties for easy locating, linting will enforce this.
export const StyledApp = styled.div`
  align-items: center;
  background-color: ${({ theme }) => theme.colors.grey};
  color: ${({ theme }) => theme.colors.white};
  display: flex;
  flex-direction: column; /* Comments in styled components work as so. */
  font-size: ${({ theme }) => theme.fonts.sizes.xl}; /* But they will be compiled and available on the client. */
  justify-content: center; /* So be careful. */
  min-height: 100vh;
  text-align: center;
`

export const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    font-family: ${({ theme }) => theme.fonts.families.default};
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
`