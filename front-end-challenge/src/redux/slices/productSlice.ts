/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import { Iitems } from '../../interfaces/interfaces'

export const slice = createSlice({
  name: 'data',
  initialState: {
    products: [] as Iitems[]
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    }
  }
})

export const { setProducts } = slice.actions

export const productSlice = (state: { products: any }) => state.products

export default slice.reducer
