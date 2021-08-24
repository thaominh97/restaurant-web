import { configureStore } from '@reduxjs/toolkit'
import tokenReducer from './redux/tokenReducer'
import addToCart from './redux/addToCart'
export default configureStore({
  reducer: {
      token: tokenReducer,
      cart: addToCart,
  },
})