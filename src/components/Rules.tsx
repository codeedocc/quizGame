import React from 'react'
import { useActions } from '../hooks/actions'

function Rules() {
  const { setIsStarted } = useActions()

  return (
    <div className="result">
      <h2>Правила</h2>
      <p>
        Тебе предстоит ответить на 10 вопросов. Для каждого из них будет
        несколько вариантов ответов. За каждый правильный ответ ты получаешь
        балл.
      </p>
      <p>
        Если ты набираешь <strong>больше</strong> 7 баллов, то я должен буду
        поменять свою аву в телеге на ту, которую ты скажешь (на неделю).
      </p>
      <p>
        Если же ты наберешь <strong>меньше</strong> 7 баллов, то ты поменяешь
        свою аву в телеге на ту, которую выберу я (на неделю).
      </p>
      <button onClick={() => setIsStarted(true)}>Поехали!</button>
    </div>
  )
}

export default Rules
