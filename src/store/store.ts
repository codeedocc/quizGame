import { combineReducers, configureStore } from '@reduxjs/toolkit'
import { quizSlice } from './slice'

const rootReducer = combineReducers({
  quiz: quizSlice.reducer,
})

export const store = configureStore({
  reducer: rootReducer,
})

export type RootState = ReturnType<typeof store.getState>
