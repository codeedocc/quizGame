import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  step: number
  correct: number
}

const initialState: IInitialState = {
  step: 0,
  correct: 0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setCorrect: (state, action) => {
      state.step = action.payload
    },
  },
})

export const quizActions = quizSlice.actions
export const quizReducer = quizSlice.reducer
