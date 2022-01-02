import styled from 'styled-components'

export const Container = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
    color: ${props => props.theme.colors.primary};
  }

  p {
    font-size: 1.5rem;
  }
`
