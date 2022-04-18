import React, { useState } from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { GameContext, MoveTree } from "../contexts/GameContext"
import { PlayerPanel } from "../PlayerPanel"

export default {
  title: "SidePanel/PlayerPanel",
  component: PlayerPanel,
} as ComponentMeta<typeof PlayerPanel>

const Template: ComponentStory<typeof PlayerPanel> = () => {
  const [colorTurn, setColorTurn] = useState<"white" | "black">("white")
  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const [moveHistory, setMoveHistory] = useState<MoveTree>([])

  const GameTurnContext = {
    colorTurn: colorTurn,
    setColorTurn: setColorTurn,
    isDrilling: isDrilling,
    setIsDrilling: setIsDrilling,
    playerColor: playerColor,
    setPlayerColor: setPlayerColor,
    moveHistory: moveHistory,
    setMoveHistory: setMoveHistory,
  }
  return (
    <GameContext.Provider value={GameTurnContext}>
      <PlayerPanel/>
    </GameContext.Provider>
  )
}

export const Default = Template.bind({})

Default.args = {}
