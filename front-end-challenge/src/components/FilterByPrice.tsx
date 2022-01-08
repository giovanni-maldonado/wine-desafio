/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Iitems } from '../interfaces/interfaces'
import { productSlice, setProducts } from '../redux/slices/productSlice'
import { FilterByPriceStyle } from '../styles/components/FilterByPrice'

interface Props {
  value: number
}

const FilterByPrice: React.FC<Props> = (Props) => {
  const { products } = useSelector(productSlice)
  const dispatch = useDispatch()
  const handleChange = ({ target: { value } } : any) => {
    if (value === '40') {
      const productFilter = products.filter((product: Iitems) => product.priceMember <= 40)
      dispatch(setProducts(productFilter))
    }
    if (value === '40-60') {
      const productFilter = products.filter((product: Iitems) => product.priceMember > 40 && product.priceMember <= 60)
      dispatch(setProducts(productFilter))
    }
    if (value === '100-200') {
      const productFilter = products.filter((product: Iitems) => product.priceMember >= 100 && product.priceMember <= 200)
      dispatch(setProducts(productFilter))
    }
    if (value === '200-500') {
      const productFilter = products.filter((product: Iitems) => product.priceMember >= 200 && product.priceMember <= 500)
      dispatch(setProducts(productFilter))
    }
    if (value === '500') {
      const filteredProducts = products.filter((product: Iitems) => product.priceMember > 500)
      dispatch(setProducts(filteredProducts))
    }
  }

  return (
    <FilterByPriceStyle>
      <p>{Props.value} produtos encontrados</p>
      <h1>Refine sua busca</h1>
      <form className="ratio-filters-form" method='post'>
        <div className="div-price-and-submit">
          <p className="by-price">Por preço</p>
          <button
            type="submit"
            className="button-submit"
            onClick={() => dispatch(setProducts(products))}
          >
            <img src='https://cdn-icons.flaticon.com/png/512/2961/premium/2961937.png?token=exp=1641606377~hmac=3a0b0cf028b174ad2033df65a676bd24' width="15px"/>
          </button>
        </div>
        <div className="price-range">
          <label htmlFor="40">
            <input
              type="radio"
              name="radio-filter"
              id="40"
              value="40"
              onChange={handleChange}
              />
              Até R$40
          </label>
          <label htmlFor="40-60">
            <input
              type="radio"
              name="radio-filter"
              id="40-60"
              value="40-60"
              onChange={handleChange}
              />
              R$40 A R$60
          </label>
          <label htmlFor="100-200">
            <input
              type="radio"
              name="radio-filter"
              id="100-200"
              value="100-200"
              onChange={handleChange}
              />
              R$100 A R$200
          </label>
          <label htmlFor="200-500">
            <input
              type="radio"
              name="radio-filter"
              id="200-500"
              value="200-500"
              onChange={handleChange}
              />
              R$200 A R$500
          </label>
          <label htmlFor="500">
            <input
              type="radio"
              name="radio-filter"
              id="500"
              value="500"
              onChange={handleChange}
              />
              Acima de R$500
          </label>
        </div>
      </form>
    </FilterByPriceStyle>
  )
}

export default FilterByPrice
