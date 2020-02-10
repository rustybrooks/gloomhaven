import React from 'react'
import { withStore } from '../global-store'
import injectSheet from "react-jss";

const styles = {
  'foo': {
    position : 'relative',
    display: 'inline-block',
    padding: 1,

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

let HandChunk = ({player, section, store, classes}) => {
  const { cards } = player

  const handleSelect = (index) => () => {
    let new_hand = []
    let new_rejected = []
    if (section === 'hand') {
      new_rejected = cards.rejected.concat([cards.hand[index]])
      new_hand = cards.hand.slice(0, index).concat(cards.hand.slice(index+1))
    } else {
      new_hand = cards.hand.concat([cards.rejected[index]])
      new_rejected = cards.rejected.slice(0, index).concat(cards.rejected.slice(index+1))
    }

    console.log(index, new_hand, new_rejected)
    store.set(
      'player', {...player, cards: {...player.cards, hand: new_hand, rejected: new_rejected}}
    )
  }

  return (
    <div>
      {
        cards[section].map((card, i) => {
          return (
            <div key={card.name} className={classes.foo} onClick={handleSelect(i)}>
              <img height={160} src={card.url}/>
              <div className={card.selected ? null : classes.wrapper}/>
            </div>
          )
        })
      }
    </div>
  )
}
HandChunk = withStore(injectSheet(styles)(HandChunk))

const PlayerHand = ({store, classes}) => {
  let player = store.get('player')
  if (!player) {
    return <div>No player</div>
  }

  return (
    <div>
      <HandChunk player={player} section='hand' other='rejected'/>
      <HandChunk player={player} section='rejected' other='hand'/>
    </div>
  )
}

export default withStore(injectSheet(styles)(PlayerHand), ['player'])