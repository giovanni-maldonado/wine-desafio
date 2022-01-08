import styled from 'styled-components'

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 80px;
  display: flex;
  left: 0%;
  background: #fff;
  justify-content: space-around;
  align-items: center;

  img {
    width: 108px;
    height: 34px;
  }

  .header-icon {
    width: 56px;
    height: 56px;
  }

  .header-search-icon {
    width: 50px;
    height: 50px;
    border-color: #000;
  }

  h1 {
    font-size: 18px;
    line-height: 24px;
  }

  button {
    border: none;
    background: none;
  }
`
