import React from 'react'
import { withStore } from '../global-store'
import injectSheet from "react-jss";

const styles = {
  'foo': {
    position : 'relative',
    display: 'inline-block',
    padding: 2,

    '& $wrapper': {
      background: 'rgba(255, 255, 255,.25)',
      'z-index': 10,
      position : 'absolute',
      top: 0,
      left: 0,
      height: '100%',
      width: '100%',
    },

  },

  'wrapper': {
  }
}

const PlayerHand = ({store, classes}) => {
  const handleSelect = (card) => () => {
    console.log("selected", card)
    card.selected = !card.selected;
    store.set(
      'player', {...player, cards: new_cards}
    )
  }

  let player = store.get('player')
  if (!player) {
    return <div>No player</div>
  }

  console.log("rendering")
  return (
    <div>
      {
        player.cards.map(card => {
          return (
            <div key={card.name} className={classes.foo} onClick={handleSelect(card)}>
              <img height={140} src={card.url}/>
              <div className={card.selected ? null : classes.wrapper}></div>
            </div>
          )
        })
      }
    </div>
  )
}

export default withStore(injectSheet(styles)(PlayerHand), ['player'])