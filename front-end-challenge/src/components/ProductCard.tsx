import React from 'react'
import { useSelector } from 'react-redux'
import { Iitems } from '../interfaces/interfaces'
import { productSlice } from '../redux/slices/productSlice'
import AddCardButton from './AddCardButton'

export default function ProductCard() {
  const { products } = useSelector(productSlice)

  return (
    products.map((product: Iitems) => {
      const { id, image, flag, name, price, discount, priceMember, priceNonMember } = product
      return (
        <div className="product-card" key={id}>
          <div className="product-card-image">
            <img className="wine-img" src={image} alt={name}/>
            <img src={ flag } width="30px"/>
          </div>
          <div className="product-card-info">
            <h1>{name}</h1>
            <div className="price-and-discount">
              <p className="price">{`R$ ${price}`}</p>
              <p className="discount">{`${discount}% OFF`}</p>
            </div>
            <p className="member">SÓCIO WINE <span className="real">R$</span> <span className="member-price">{priceMember}</span></p>
            <p className="non-member">{`NÃO SÓCIO R$${priceNonMember}`}</p>
          <AddCardButton id={id} />
          </div>
        </div>
      )
    })
  )
}
