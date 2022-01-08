import React from 'react'
import { Iitems } from '../interfaces/interfaces'
import CartPageStyle from '../styles/pages/CartPageStyle'

const ShoppingCart: React.FC = () => {
  const products = JSON.parse(localStorage.getItem('cartProduct') || '[]')
  return (
    <div>
      <CartPageStyle>
        { products.length === 0
          ? <h1>Nenhum produto no carrinho</h1>
          : products.map((product: Iitems) => {
            const { id, image, name, price, flag } = product
            return (
              <div className="shopping-cart-product" key={id}>
                <div className="product-card-image">
                  <img className="wine-img" src={image} alt={name}/>
                  <img className="country-flag" src={flag} width="30px"/>
                </div>
                <div className="name-and-price">
                  <h1>{name}</h1>
                  <p>R${price}</p>
                </div>
              </div>
            )
          })
      }
      </CartPageStyle>
    </div>
  )
}

export default ShoppingCart
