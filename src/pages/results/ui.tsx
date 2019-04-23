import React from 'react'
import styled, { keyframes } from 'styled-components'

interface StyledLoaderProps {
  speed?: number
}

export const StyledResults = styled.div`
  height: 300px;
  margin-top: 10px;
`

const spin = keyframes`
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
`

// This styled component accepts a prop and it will need extra configuration.
// You'll need to have the file ext as `tsx` and import React.
// You also need to destructure the prop from the other props that are passed down to the component being rendered.
export const StyledLoader = styled(({ speed, ...rest }: StyledLoaderProps) => <div {...rest} />)`
  animation: ${spin} ${({ speed }) => speed ? speed : 1}s cubic-bezier(0.43, 0.84, 0.61, 0.14) infinite;
  border: 8px solid ${({ theme }) => theme.colors.lightGrey};
  border-top: 8px solid ${({ theme }) => theme.colors.blue};
  border-radius: 50%;
  height: 60px;
  margin-top: 40px;
  width: 60px;
`
