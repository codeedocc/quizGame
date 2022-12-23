import React from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import '../index.scss'
import { questions } from './data'

function Game() {
  const { setStep } = useActions()
  const { step } = useAppSelector((state) => state.quiz)
  const question = questions[step]

  const percentage = Math.round((step / questions.length) * 100)

  const onClickVariant = (id: number) => {
    console.log(step, id)
    setStep(step + 1)
  }

  return (
    <>
      <div className="progress">
        <div
          style={{ width: `${percentage}%` }}
          className="progress__inner"
        ></div>
      </div>
      <h1>{question.title}</h1>
      <ul>
        {question.variants.map((text, index) => (
          <li onClick={() => onClickVariant(index)} key={text}>
            {text}
          </li>
        ))}
      </ul>
    </>
  )
}

export default Game
