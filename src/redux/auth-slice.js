import { createSlice } from '@reduxjs/toolkit'

export const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isLogged: false
  },
  reducers: {
    loggedIn: state => {
      state.isLogged = true
    },
    logout: state => {
      state.isLogged = false
    }
  }
})

// Action creators are generated for each case reducer function
export const { loggedIn, logout } = authSlice.actions

export default authSlice.reducer