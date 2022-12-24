import React from 'react'
import { useAppSelector } from '../hooks/redux'
import '../index.scss'
import { questions } from '../components/data'

function Result() {
  const { correct } = useAppSelector((state) => state.quiz)

  return (
    <div className="result">
      <img src="https://cdn-icons-png.flaticon.com/512/2278/2278992.png" />
      <h2>
        Вы отгадали {correct} ответа из {questions.length}
      </h2>
      <a href="/">
        <button>Попробовать снова</button>
      </a>
    </div>
  )
}

export default Result