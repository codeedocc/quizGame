import React from 'react'
import Game from './components/Game'
import Result from './components/Result'
import './index.scss'
import { useAppSelector } from './hooks/redux'
import { questions } from './components/data'

function App() {
  const { step } = useAppSelector((state) => state.quiz)

  return (
    <div className="App">
      {step !== questions.length ? <Game /> : <Result />}
    </div>
  )
}

export default App
