import React from 'react'

const character = 'tinkerer'
import data from '../data/character-ability-cards/tinkerer.json'
const level = 1

const PlayerHand = () => {
  return <div>{

    data.cards.filter(card => card.level === 'X' || parseInt(card.level) <= level).map(card => {
      const characterString = character.toLowerCase().replace(/ /g, "_");
      const cardNameString = card.name.toLowerCase().replace(/ /g, "_").replace(/'/g, "");

      return <img key={cardNameString} height={140} src={`/assets/character-ability-cards/${characterString}/${cardNameString}.png`}/>
    })
  }</div>
}

export default PlayerHand