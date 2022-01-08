import styled from 'styled-components'

export const ProductCardStyle = styled.div`
  .wine-img {
    width: 150px;
    margin-left: 25px;
  }

  .product-card {
    background-color: #fff;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    min-height: 415px;
  }

  p {
    font-size: 11px;
  }

  h1 {
    font-size: 16px;
    color: ${props => props.theme.colors.productTittle};
  }

  .product-card-info {
    height: 100px;
    display: flex;
    flex-direction: column;
    align-items: center;
    padding-bottom: 15px;
  }

  .price {
    font-size: 11px;
    text-decoration: line-through;
    color: ${props => props.theme.colors.lightGray};
  }

  .price-and-discount {
    display: flex;
    flex-direction: row;
    max-width: 100px;
    text-align: center;
    white-space: nowrap;
    align-items: center;
  }

  .discount {
    color: #fff;
    background: #f79552;
    border-radius: 1.9px;
    font-size: 11px;
    line-height: 12px;
    text-align: center;
    padding: 0.2rem;
    margin-left: 0.5rem;
  }

  .member {
    color: #1D1D1B;
    font-weight: 700;
  }

  .real {
    color: ${props => props.theme.colors.purpleText};
    font-size: 11px;
  }

  .member-price {
    color: ${props => props.theme.colors.purpleText};
    font-size: 23px;
    font-weight: 700;
  }

  .non-member {
    color: ${props => props.theme.colors.lightGray};
    font-size: 12px;
    line-height: 14px;
  }

  .redirect-to-product {
    cursor: pointer;
  }
`
