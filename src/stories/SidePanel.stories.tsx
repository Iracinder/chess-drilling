import React, { useState } from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SidePanel } from "../SidePanel"
import { GameContext, MoveTree } from "../contexts/GameContext"

export default {
  title: "SidePanel",
  component: SidePanel,
} as ComponentMeta<typeof SidePanel>

const Template: ComponentStory<typeof SidePanel> = () => {
  const [colorTurn, setColorTurn] = useState<"white" | "black">("white")
  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const [moveHistory, setMoveHistory] = useState<MoveTree>({})
  const [fen, setFen] = useState<string>("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")

  const initialGameContext = {
    colorTurn: colorTurn,
    setColorTurn: setColorTurn,
    isDrilling: isDrilling,
    setIsDrilling: setIsDrilling,
    playerColor: playerColor,
    setPlayerColor: setPlayerColor,
    moveHistory: moveHistory,
    setMoveHistory: setMoveHistory,
    fen: fen,
    setFen: setFen,
  }
  return (
    <GameContext.Provider value={initialGameContext}>
      <SidePanel />
    </GameContext.Provider>
  )
}

export const Default = Template.bind({})

Default.args = {}
