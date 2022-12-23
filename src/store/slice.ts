import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  step: 0,
}

export const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    setStep: (state, action) => {
      state.step = action.payload
    },
  },
})

export const { setStep } = quizSlice.actions
export default quizSlice.reducer
