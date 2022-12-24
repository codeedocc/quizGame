import React from 'react'
import { useActions } from '../hooks/actions'

function Hello() {
  const { setIsHello } = useActions()

  return (
    <div className="result">
      <h2>Привет!</h2>
      <p>
        С приближением Нового Года нас всё больше окутывает тепло и настольгия
        по тем моментам, что мы пережили.
      </p>
      <p>
        Одновременно с этим, мы строим большие планы на будущее и твёрдо знаем,
        что они обязательно сбудутся.
      </p>
      <p>
        Прошло почти полгода с момента нашего знакомства. Давай окунёмся в
        прошлое и вспомним, как это было?
      </p>
      <button onClick={() => setIsHello(false)}>Посмотреть правила</button>
    </div>
  )
}

export default Hello
