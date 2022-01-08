import styled from 'styled-components'

export const FilterByPriceStyle = styled.aside`
  display: flex;
  flex-direction: column;
  padding-left: 50px;
  max-height: 100vh;

  h1 {
    color: #000;
    font-size: 20px;
    font-weight: 700;
  }

  p {
    font-size: 14px;
  }

  .by-price {
    font-size: 18px;
    padding-bottom: 10px;
  }

  .price-range {
    display: flex;
    flex-direction: column;
    height: 200px;
  }

  .button-submit {
    border: none;
    background: none;
  }

  .div-price-and-submit {
    display: flex;
    flex-direction: row;
    width: 180px;
  }
`
