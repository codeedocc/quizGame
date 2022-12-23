import React from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import '../index.scss'
import { questions } from './data'

function Game() {
  const { setStep } = useActions()
  const { step } = useAppSelector((state) => state.quiz)
  const question = questions[step]

  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text) => (
          <li key={text}>{text}</li>
        ))}
      </ul>
    </>
  )
}

export default Game
