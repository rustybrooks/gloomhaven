import React from 'react'
import { withRouter } from 'react-router'
import injectSheet from "react-jss";
import {
  BrowserRouter as Router,
  Switch,
  useLocation, useParams
} from "react-router-dom";
import { withStore } from '../global-store'

import PlayerMat from "./PlayerMat"
import SharedGame from "./SharedGame"
import Monsters from "./Monsters"
import PlayerHand from "./PlayerHand"

import brute from '../data/character-ability-cards/brute.json'
import mindhief from '../data/character-ability-cards/mindthief.json'
import summoner from '../data/character-ability-cards/summoner.json'
import tinkerer from '../data/character-ability-cards/tinkerer.json'

let data = {}
data.brute = brute
data.mindthief = mindhief
data.summoner = summoner
data.tinkerer = tinkerer

const players = {
  'buttleston': { character: 'tinkerer', level: 1 },
  'angrylarry': { character:'mindthief', level: 1 },
  'auriliux': { character: 'brute', level: 1 },
  'neerrm': { character: 'summoner', level: 1 },
}

const styles = {
  contain: {
    display: 'inline-block',
    width: 320,
    height: 200,
  }
}


const Player = ({classes, store}) => {
  const { player } = useParams()

  console.log('Player', player)
  if (players[player.toLowerCase()] === undefined) {
    return <div>Unknown player: {player}</div>
  }

  let player_obj = {
    ...players[player.toLowerCase()],
  }
  player_obj.id = player_obj.character.toLowerCase().replace(/ /g, "_")
  player_obj['cards'] = data[player_obj.character].cards.filter(
    card => card.level === 'X' || parseInt(card.level) <= player_obj.level
  ).map(card => {
    const cardNameString = card.name.toLowerCase().replace(/ /g, "_").replace(/'/g, "")
    return {
      url: `/assets/character-ability-cards/${player_obj.id}/${cardNameString}.png`,
      name: card.name,
      level: card.level,
      selected: false,
    }
  })
  React.useEffect(() => {
    store.set('player', player_obj)
  }, [player]);


  return (
    <table>
      <tbody>
      <tr><td colSpan={4}>{player}</td></tr>
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
        <td colSpan={4}><PlayerHand/></td>
      </tr>
      </tbody>
    </table>
  )
}

export default withStore(withRouter(injectSheet(styles)(Player)))