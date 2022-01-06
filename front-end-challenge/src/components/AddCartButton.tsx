import React from 'react'
import { useSelector } from 'react-redux'
import { AddCartButtonStyle } from '../styles/components/AddCartButton'
import { Iitems } from '../interfaces/interfaces'
import { productSlice } from '../redux/slices/productSlice'

interface Props {
  id: number,
}

const AddCardButton: React.FC<Props> = (Props) => {
  const { products } = useSelector(productSlice)

  const addToCart = (id: number) => {
    const product = products.find((item: Iitems) => item.id === id)
    const cartProduct = JSON.parse(localStorage.getItem('cartProduct') as string)
    if (cartProduct) {
      const newCartProduct = [...cartProduct, product]
      localStorage.setItem('cartProduct', JSON.stringify(newCartProduct))
    }
  }

  return (
    <AddCartButtonStyle>
      <button
        className="add-to-cart"
        onClick={() => addToCart(Props.id)}
      >
        ADICIONAR
      </button>
    </AddCartButtonStyle>
  )
}

export default AddCardButton
