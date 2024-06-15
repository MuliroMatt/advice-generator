import React from 'react'
import DiceIcon from './DiceIcon'
import { DiceStyled } from './styles/Dice.styled'

const Dice = ({ onClick }) => {
  return (
    <DiceStyled onClick={onClick}>
        <DiceIcon/>
    </DiceStyled>
  )
}

export default Dice