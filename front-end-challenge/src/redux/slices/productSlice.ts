/* eslint-disable @typescript-eslint/no-explicit-any */
import { createSlice } from '@reduxjs/toolkit'
import { Iitems } from '../../interfaces/interfaces'

export const slice = createSlice({
  name: 'data',
  initialState: {
    products: [] as Iitems[],
    minDelimiter: 0,
    maxDelimiter: 11
  },
  reducers: {
    setProducts: (state, action) => {
      state.products = action.payload
    },
    setMinDelimiter: (state, action) => {
      state.minDelimiter = action.payload
    },
    setMaxDelimiter: (state, action) => {
      state.maxDelimiter = action.payload
    }
  }
})

export const { setProducts, setMinDelimiter, setMaxDelimiter } = slice.actions

export const productSlice = (state: { products: any }) => state.products

export default slice.reducer
