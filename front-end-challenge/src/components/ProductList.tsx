import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { ProductListStyle } from '../styles/components/ProductList'
import { setProducts } from '../redux/slices/productSlice'
import { IapiResponse } from '../interfaces/interfaces'
import ProductCard from './ProductCard'
import FilterByPrice from './FilterByPrice'

const ProductList: React.FC = () => {
  const dispatch = useDispatch()
  const [foundItems, setFoundItems] = React.useState<number>(0)
  const url = 'https://wine-back-test.herokuapp.com/products'
  const apiRequest = async () => {
    await axios.get<IapiResponse>(url)
      .then((res) => {
        dispatch(setProducts(res.data.items))
        setFoundItems(res.data.totalItems)
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    apiRequest()
    localStorage.setItem('cartProduct', JSON.stringify([]))
  }, [])

  return (
    <ProductListStyle>
      <FilterByPrice value={foundItems}/>
      <ProductCard />
  </ProductListStyle>
  )
}

export default ProductList
