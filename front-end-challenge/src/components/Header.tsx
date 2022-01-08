import { useRouter } from 'next/router'
import React from 'react'
import { HeaderStyle } from '../styles/components/Header'

const Header: React.FC = () => {
  const router = useRouter()
  return (
    <HeaderStyle>
      <img src="https://d2duuy9yo5pldo.cloudfront.net/dashboard-resources/wine/e90faa36-9670-4bd4-a063-8818d3f9d20e.png" alt="logo da wine"/>
      <h1>Clube</h1>
      <h1>Loja</h1>
      <h1>Produtores</h1>
      <h1>Ofertas</h1>
      <h1>Eventos</h1>
      <button className="header-button">
        <img className="header-search-icon" src="https://cdn-icons-png.flaticon.com/512/482/482631.png" alt="lupa de pesquisa"/>
      </button>
      <button className="header-button">
        <img className="header-icon" src="https://cdn-icons-png.flaticon.com/512/848/848043.png" alt="avatar anonimo"/>
      </button>
      <button
        onClick={ () => router.push('/cart') }
        className="cart-icon-button"
      >
        <img className="header-icon" src="https://cdn-icons-png.flaticon.com/512/743/743131.png" alt="sacola de compras"/>
      </button>
    </HeaderStyle>
  )
}

export default Header
