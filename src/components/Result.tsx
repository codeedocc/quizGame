import React from 'react'
import { useAppSelector } from '../hooks/redux'
import '../index.scss'
import { questions } from '../components/data'

function Result() {
  const { correct } = useAppSelector((state) => state.quiz)

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
          <a href="/quizGame/">
            <button>
              <h3>Начать заново</h3>
            </button>
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
          <a href="/quizGame/">
            <button>
              <h3>Попробовать ещё раз</h3>
            </button>
          </a>
        </>
      )}
    </div>
  )
}

export default Result
