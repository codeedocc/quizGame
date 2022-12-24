import React from 'react'
import Game from './components/Game'
import Result from './components/Result'
import './index.scss'
import { useAppSelector } from './hooks/redux'
import { questions } from './components/data'
import StartMessage from './components/StartMessage'

function App() {
  const { step, isStarted } = useAppSelector((state) => state.quiz)

  return (
    <div className="App">
      {!isStarted ? (
        <StartMessage />
      ) : step !== questions.length ? (
        <Game />
      ) : (
        <Result />
      )}
    </div>
  )
}

export default App
