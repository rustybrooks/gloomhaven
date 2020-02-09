import React from 'react'
import createStore from './global-store/createStore'
import { BrowserRouter, Route } from 'react-router-dom'
import injectSheet from "react-jss";

import PlayerMat from "./components/PlayerMat"
import SharedGame from "./components/SharedGame"
import Monsters from "./components/Monsters"
import PlayerHand from "./components/PlayerHand"

const styles = {
  contain: {
    display: 'inline-block',
    width: 320,
    height: 200,
  }
}

const App = ({classes}) => {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <table>
        <tbody>
        <tr>
          <td colSpan={2}><SharedGame/></td>
          <td colSpan={2}><Monsters/></td>
        </tr>
        <tr>
          <td><div className={classes.contain}><PlayerMat/></div></td>
          <td><div className={classes.contain}><PlayerMat/></div></td>
          <td><div className={classes.contain}><PlayerMat/></div></td>
          <td><div className={classes.contain}><PlayerMat/></div></td>
        </tr>
        <tr>
          <td colSpan={2}><PlayerHand/></td>
        </tr>
        </tbody>
      </table>
    </BrowserRouter>
  )
}

const initialValue = {
}

const config = {}

export default injectSheet(styles)(createStore(App, initialValue, config))


