import React from 'react'
import { useSelector } from 'react-redux'
import { Iitems } from '../interfaces/interfaces'
import { productSlice } from '../redux/slices/productSlice'

interface Props {
  id: number,
}

const AddCardButton: React.FC<Props> = (Props) => {
  const { products } = useSelector(productSlice)

  const addToCart = (id: number) => {
    const product = products.find((item: Iitems) => item.id === id)
    localStorage.setItem('productInCart', JSON.stringify(product))
  }

  return (
    <button
      className="add-to-cart"
      onClick={() => addToCart(Props.id)}
    >
      ADICIONAR
    </button>
  )
}

export default AddCardButton
