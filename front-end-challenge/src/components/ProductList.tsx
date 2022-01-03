import React, { useCallback, useState, useEffect } from 'react'
import axios from 'axios'
import { ProductListStyle } from '../styles/components/ProductList'

const ProductList: React.FC = () => {
  const pageNum = 1
  const url = `https://wine-back-test.herokuapp.com/products?page=${pageNum}&limit=9`
  const [products, setProducts] = useState([])

  const getProducts = useCallback(
    async () => {
      await axios.get(url)
        .then((res) => {
          setProducts(res.data.items)
        })
        .catch((err) => console.log(err))
    }, [setProducts]
  )

  useEffect(() => {
    getProducts()
  }, [])

  console.log(products)

  return (
    <ProductListStyle>
      {
        products.map((product) => {
          const { id, image, name, price, discount, priceMember, priceNonMember } = product
          return (
            <div className="product-card" key={id}>
              <img src={image} alt={name}/>
              <div className="product-card-info">
                <h1>{name}</h1>
                <div className="price-and-discount">
                  <p className="price">{`R$ ${price}`}</p>
                  <p className="discount">{`${discount}% OFF`}</p>
                </div>
                <p className="member">SÓCIO WINE <span className="real">R$</span> <span className="member-price">{priceMember}</span></p>
                <p className="non-member">{`NÃO SÓCIO R$${priceNonMember}`}</p>
                <button className="add-to-cart">ADICIONAR</button>
              </div>
            </div>
          )
        })
      }
  </ProductListStyle>
  )
}

export default ProductList
