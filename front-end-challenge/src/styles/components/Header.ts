import styled from 'styled-components'

export const HeaderStyle = styled.header`
  width: 100vw;
  height: 80px;
  display flex;
  left: 0%;
  top: 1.14%;
  bottom: -1.14%;
  position: absolute;
  background: #fff;
  justify-content: space-around;
  align-items: center;

  img {
    width: 102px;
    height: 31px;
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
`
