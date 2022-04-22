import { createSlice } from '@reduxjs/toolkit'

export const userSlice = createSlice({
  name: 'user',
  initialState: {
    userToken: '',
    userId: '',
  },
  reducers: {
    setUserToken: (state, action) => {
      state.userToken += action.payload
    },
    setUserId : (state, action) => {
        state.userId += action.payload
    }
  }
})

export const { setUserToken } = userSlice.actions
export const { setUserId } = userSlice.actions
export default userSlice.reducer
