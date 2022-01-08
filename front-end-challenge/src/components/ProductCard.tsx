import React from 'react'
import { useSelector } from 'react-redux'
import { ProductCardStyle } from '../styles/components/ProductCard'
import { Iitems } from '../interfaces/interfaces'
import { productSlice } from '../redux/slices/productSlice'
import AddCardButton from './AddCartButton'
import { useRouter } from 'next/router'

export default function ProductCard() {
  const { products, minDelimiter, maxDelimiter } = useSelector(productSlice)
  const ROUTE_PRODUCT_DETAILS = '/product/[id]'
  const router = useRouter()

  const navigate = (id: number) => {
    router.push({
      pathname: ROUTE_PRODUCT_DETAILS,
      query: { id }
    })
  }

  return (
    products.length === 0
      ? <h1>Nenhum produto encontrado</h1>
      : products.map((product: Iitems) => {
        const { id, image, flag, name, price, discount, priceMember, priceNonMember } = product
        return (
        <ProductCardStyle key={id}>
          <div className="product-card" key={id}>
            <div className="redirect-to-product" onClick={() => navigate(id)}>
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
              </div>
            </div>
            <AddCardButton id={id} />
          </div>
        </ProductCardStyle>
        )
      }).slice(minDelimiter, maxDelimiter)
  )
}
