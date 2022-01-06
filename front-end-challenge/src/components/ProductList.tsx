import React, { useEffect } from 'react'
import axios from 'axios'
import { useDispatch } from 'react-redux'
import { ProductListStyle } from '../styles/components/ProductList'
import { setProducts } from '../redux/slices/productSlice'
import { IapiResponse } from '../interfaces/interfaces'
import ProductCard from './ProductCard'

const ProductList: React.FC = () => {
  const dispatch = useDispatch()

  const pageNum = 1
  const url = `https://wine-back-test.herokuapp.com/products?page=${pageNum}&limit=9`
  const apiRequest = async () => {
    await axios.get<IapiResponse>(url)
      .then((res) => {
        dispatch(setProducts(res.data.items))
      })
      .catch((err) => console.log(err))
  }

  useEffect(() => {
    apiRequest()
    localStorage.setItem('cartProduct', JSON.stringify([]))
  }, [])

  return (
    <ProductListStyle>
      {
        <ProductCard />
      }
  </ProductListStyle>
  )
}

export default ProductList
