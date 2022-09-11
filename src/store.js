import { configureStore } from '@reduxjs/toolkit'
import authReducer from './redux/auth-slice'

export default configureStore({
  reducer: {
    auth: authReducer
  }
})