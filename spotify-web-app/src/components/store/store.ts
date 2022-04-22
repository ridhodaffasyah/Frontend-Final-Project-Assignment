import { combineReducers } from '@reduxjs/toolkit'
import userReducer from './user'

export const reducer = combineReducers({
  user: userReducer
})

export type RootState = ReturnType<typeof reducer>