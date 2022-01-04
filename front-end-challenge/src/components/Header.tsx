import React from 'react'
import { HeaderStyle } from '../styles/components/Header'

export default function Header() {
  return (
    <HeaderStyle>
      <img src="https://d2duuy9yo5pldo.cloudfront.net/dashboard-resources/wine/e90faa36-9670-4bd4-a063-8818d3f9d20e.png" alt="logo da wine"/>
      <h1>Clube</h1>
      <h1>Loja</h1>
      <h1>Produtores</h1>
      <h1>Ofertas</h1>
      <h1>Eventos</h1>
      <button>
        <img className="header-search-icon" src="" alt="lupa de pesquisa"/>
      </button>
      <button>
        <img className="header-icon" src="" alt="avatar anonimo" />
      </button>
      <button>
        <img className="header-icon" src="" alt="sacola de compras"/>
      </button>
    </HeaderStyle>
  )
}
