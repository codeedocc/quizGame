import React from 'react'
import { useActions } from '../hooks/actions'

function StartMessage() {
  const { setIsStarted } = useActions()

  return (
    <div className="result">
      <h2>Привет!</h2>
      <p>
        Это был довольно насыщенный год, в котором произошло очень много всего.
      </p>
      <p>
        Можно сказать, что мы познакомились случайно, но я чувствую, как будто
        знаю тебя очень давно :)
      </p>
      <p>Давай окунёмся в прошлое и вспомним, как это было?</p>
      <button onClick={() => setIsStarted(true)}>Поехали!</button>
    </div>
  )
}

export default StartMessage
