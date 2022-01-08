import React from 'react'
import { useRouter } from 'next/router'
import { useSelector } from 'react-redux'
import { productSlice } from '../../redux/slices/productSlice'
import { Iitems } from '../../interfaces/interfaces'
import { ProductDetailStyle } from '../../styles/pages/productDetails/ProductDetail'
import Header from '../../components/Header'

const productPage = () => {
  const router = useRouter()
  const { products } = useSelector(productSlice)
  const array = []
  const productById = products.find((product: Iitems) => product.id === Number(router.query.id))
  array.push(productById)
  return (
    array.map((product: Iitems) => {
      const {
        id,
        image,
        flag,
        name,
        price,
        priceNonMember,
        country,
        region,
        type,
        classification,
        volume,
        rating,
        avaliations,
        sommelierComment
      } = product
      return (
        <div key={id}>
          <Header />
          <ProductDetailStyle key={id}>
            <button onClick={() => router.push('/')}>
              <img src="https://cdn-icons.flaticon.com/png/512/2985/premium/2985161.png?token=exp=1641602878~hmac=b9e5eeb1a0b431ed6f9e42236bc2873b" alt={name} width="35px"/>
            </button>
            <img className="wine-img" src={image} alt={name} />
            <div className="wine-classification">
              <h2><span className="wine-country"> Vinhos &gt; {country}</span> <span className="wine-region">&gt; {region}</span></h2>
              <h1>{name}</h1>
              <div className="wine-info">
                <img src={flag} alt={`bandeira de ${country}`} width="30px" />
                <p>{country}</p>
                <p>{type}</p>
                <p>{classification}</p>
                <p>{volume}</p>
                <p>{`${rating} estrelas (${avaliations})`}</p>
              </div>
              <div className="wine-price-div">
                <p className="price">R$ <span className="wine-price-span">{price}</span></p>
                <p>NÃO SÓCIO R$ {priceNonMember}/UN.</p>
              </div>
              <h2>Comentário do Sommelier</h2>
              <p className="sommelier-comment">{sommelierComment}</p>
            </div>
          </ProductDetailStyle>
        </div>
      )
    })
  )
}

export default productPage
