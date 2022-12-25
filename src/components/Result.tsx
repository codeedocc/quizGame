import React from 'react'
import { useAppSelector } from '../hooks/redux'
import '../index.scss'
import { questions } from '../components/data'

function Result() {
  const { correct } = useAppSelector((state) => state.quiz)

  console.log(correct)

  return (
    <div className="result">
      {correct >= 7 ? (
        <>
          <img src="https://cdn-icons-png.flaticon.com/512/6467/6467774.png" />
          <h2>
            Ты отгадала {correct} из {questions.length}!
          </h2>
          <p>
            Какая уверенная победа... Теперь ты можешь выбрать для меня новую
            аватарку 😂
          </p>
          <a href="/">
            <button>Начать заново</button>
          </a>
        </>
      ) : (
        <>
          <img src="https://cdn-icons-png.flaticon.com/512/8752/8752181.png" />
          <h2>
            Ты отгадала {correct} из {questions.length}!
          </h2>
          <p>
            Все мы иногда ошибаемся, но ничего страшного - главные победы
            впереди :)
          </p>
          <a href="/">
            <button>Попробовать ещё раз</button>
          </a>
        </>
      )}
    </div>
  )
}

export default Result

// https://cdn-icons-png.flaticon.com/512/6467/6467774.png
// https://cdn-icons-png.flaticon.com/512/2278/2278992.png"
