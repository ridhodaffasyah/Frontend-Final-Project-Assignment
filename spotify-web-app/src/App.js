import './App.css'
import React from 'react'
import Navigation from '../src/pages/navigation/navigation'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore} from 'redux'
import { reducer } from '../src/components/store/store'

function App () {
  const store = createStore(reducer)
  return (
    <>
      <Provider store={store}>
        <Navigation/>
      </Provider>
    </>
  )
}

export default App
