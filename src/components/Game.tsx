import React from 'react'
import { useActions } from '../hooks/actions'
import { useAppSelector } from '../hooks/redux'
import '../index.scss'

function Game() {
  const { setStep } = useActions()
  const { step } = useAppSelector((state) => state.quiz)

  return (
    <>
      <div className="progress">
        <div style={{ width: '50%' }} className="progress__inner"></div>
      </div>
      <h1>Что такое useState?</h1>
      <ul>
        <li>Это функция для хранения данных компонента</li>
        <li>Это глобальный стейт</li>
        <li>Это когда на ты никому не нужен</li>
      </ul>
    </>
  )
}

export default Game
