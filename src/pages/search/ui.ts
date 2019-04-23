import styled from 'styled-components'

// If styling needs to be applied to two like properties, such as margin-top
// and margin-bottom use the general one `margin`.
export const StyledH1 = styled.h1`
  margin: 10px 0;
`

export const StyledInput = styled.input`
  font-size: 16px;
  height: 40px;
  &:focus {
    outline: 0;
  }
`

// Since we are using typescript, our compiler will error and we do not need to use lodash.get()
export const StyledButton = styled.button`
  background-color: ${({ theme }) => theme.colors.green};
  border: none;
  color: ${({ theme }) => theme.colors.white};
  display: inline-block;
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  &:focus {
    outline: 0;
  }
`