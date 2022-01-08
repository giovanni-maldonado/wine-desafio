import styled from 'styled-components'

export const FilterCatalogStyle = styled.div`
  display: flex;

  .filter-catalog {
    background-color: ${props => props.theme.colors.purpleText};
    color: #fff;
    padding: 0.5rem;
    border-radius: 2px;
    border-style: none;
    margin-left: 0.3rem;
  }
`
