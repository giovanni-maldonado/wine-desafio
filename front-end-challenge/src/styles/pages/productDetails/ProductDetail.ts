import styled from 'styled-components'

export const ProductDetailStyle = styled.div`
  display: flex;
  justify-content: space-evenly;
  padding-top: 30px;

  .wine-classification {
    display: flex;
    flex-direction: column;
    justify-content: center;
    max-width: 400px;
  }

  .wine-info {
    display: flex;
    flex-direction: row;
    padding: 20px 0;
    align-items: center;
  }

  .wine-info p {
    font-size: 14px;
    line-height: 24px;
    margin-left: 10px;
  }

  h1 {
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    color: #000;
  }

  .wine-country {
    font-size: 14px;
    font-weight: 700;
    line-height: 20px;
    color: ${props => props.theme.colors.purpleText};
  }

  .wine-region {
    font-size: 14px;
    line-height: 24px;
    color: ${props => props.theme.colors.lightGray};
  }

  .price {
    font-size: 16px;
    color: ${props => props.theme.colors.purpleText};
  }
  .wine-price-span {
    font-size: 35px;
    font-weight: 700;
    color: ${props => props.theme.colors.purpleText};
  }

  .wine-price-div {
    padding-bottom: 30px;
  }

  h2 {
    padding-bottom: 20px;
  }

  .sommelier-comment {
    font-size: 14px;
    line-height: 22px;
    color: '#666';
  }

  button {
    background-color: transparent;
    border: none;
    max-height: 20px;
    padding: 10px;
    cursor: pointer;
    font-size: 20px;
    color: #000;
    align-items: center;
  }
`
