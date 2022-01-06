import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${props => props.theme.colors.background};

  h1 {
    font-size: 2.5rem;
    font-weight: 700;
  }

  p {
    font-size: 1.5rem;
  }
`
