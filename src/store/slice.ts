import { createSlice } from '@reduxjs/toolkit'

interface IInitialState {
  step: number
  correct: number
  isStarted: boolean
  isHello: boolean
}

const initialState: IInitialState = {
  step: 0,
  correct: 0,
  isStarted: false,
  isHello: true,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
    setCorrect: (state, action) => {
      state.correct = action.payload
    },
    setIsStarted: (state, action) => {
      state.isStarted = action.payload
    },
    setIsHello: (state, action) => {
      state.isHello = action.payload
    },
  },
})

export const quizActions = quizSlice.actions
export const quizReducer = quizSlice.reducer
