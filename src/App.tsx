import React from 'react'
import Game from './components/Game'
import Result from './components/Result'
import './index.scss'
import { Provider } from 'react-redux'
import { store } from './store/store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Game />
        {/* <Result /> */}
      </div>
    </Provider>
  )
}

export default App
