import styled from 'styled-components'

export const ProductListStyle = styled.div`
  width: 95vw;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-evenly;
  align-items: center;
  
  * {
    flex: 1 1 22%;
  }
  
  .product-card-img {
    width: 200px;
  }
  
  .product-card {
    background-color: #fff;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
    width: 22vw;
    height: 33vw;
  }

  img {
    width: 150px;
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
  }

  .price {
    font-size: 11px;
    text-decoration: line-through;
    color: ${props => props.theme.colors.lightGray};
  }

  .discount {
    border-radius: 1.9px;
    font-size: 11px;
    line-height: 12px;
    text-align: center;
    color: #fff;
    background: #f79552;
    width: 20px;
  }

  .price-and-discount {
    display: flex;
    flex-direction: row;;
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

  .add-to-cart {
    background-color: #7EBC43;
    color: #fff;
    border-style: none;
    margin-top: 20px;
    padding: 8px;
    width: 220px;
  }
`
