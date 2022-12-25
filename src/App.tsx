import React from 'react'
import Game from './components/Game'
import Result from './components/Result'
import './index.scss'
import { useAppSelector } from './hooks/redux'
import { questions } from './components/data'
import Rules from './components/Rules'
import Hello from './components/Hello'

function App() {
  const { step, isStarted, isHello } = useAppSelector((state) => state.quiz)

  return (
    <div className="App">
      {isHello ? (
        <Hello />
      ) : !isStarted ? (
        <Rules />
      ) : step !== questions.length ? (
        <Game />
      ) : (
        <Result />
      )}
    </div>
  )
}

export default App
