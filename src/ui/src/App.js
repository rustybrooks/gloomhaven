import React from 'react'
import createStore from './global-store/createStore'
import { BrowserRouter, Route } from 'react-router-dom'

const App = () => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <div>
      Hi
      </div>
    </BrowserRouter>
  )
}

const initialValue = {
}

const config = {}

export default createStore(App, initialValue, config)


