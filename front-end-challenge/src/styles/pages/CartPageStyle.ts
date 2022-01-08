import styled from 'styled-components'

const CartPageStyle = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;

  * {
    flex: 1 1 22%;
  }

  .wine-img {
    width: 150px;
    margin-left: 25px;
  }

  .shopping-cart-product {
    background-color: #fff;
    margin: 0.5rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
  }

  h1 {
    font-size: 16px;
    color: ${props => props.theme.colors.productTittle};
  }

  p {
    font-size: 20px;
    color: ${props => props.theme.colors.purpleText};
  }
`
export default CartPageStyle
