import { configureStore } from '@reduxjs/toolkit'

import productSlice from '../slices/productSlice'

const store = configureStore({
  reducer: {
    products: productSlice
  }
})

export type RootState = ReturnType<typeof store.getState>

export default store
