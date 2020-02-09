import React from 'react'
import createStore from './global-store/createStore'
import { BrowserRouter, Route } from 'react-router-dom'

import Player from './components/Player'


const App = ({classes}) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Route exact path="/:player" component={Player} />
    </BrowserRouter>
  )
}

const initialValue = {
  'player': null,
}

const config = {}

export default createStore(App, initialValue, config)


