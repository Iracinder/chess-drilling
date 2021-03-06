import React, { useState } from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { GameContext, MoveTree } from "../contexts/GameContext"
import DrillPanel from "../DrillPanel"
import { CPUContext } from "../contexts/CPUContext"

export default {
  title: "SidePanel/DrillPanel",
  component: DrillPanel,
} as ComponentMeta<typeof DrillPanel>

const Template: ComponentStory<typeof DrillPanel> = (args) => {
  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const [selectedPGNs, setSelectedPGNs] = useState<string[]>([])
  const [moveHistory, setMoveHistory] = useState<MoveTree>([])
  const [fen, setFen] = useState<string>(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  )

  const initialGameContext = {
    playerColor: playerColor,
    setPlayerColor: setPlayerColor,
    moveHistory: moveHistory,
    setMoveHistory: setMoveHistory,
    fen: fen,
    setFen: setFen,
  }

  const initialCPUContext = {
    CPUMove: () => Promise.resolve(new Response()),
    selectedPGNs: selectedPGNs,
    setSelectedPGNs: setSelectedPGNs,
    isDrilling: isDrilling,
    setIsDrilling: setIsDrilling,
  }

  return (
    <GameContext.Provider value={initialGameContext}>
      <CPUContext.Provider value={initialCPUContext}>
        <DrillPanel {...args} />
      </CPUContext.Provider>
    </GameContext.Provider>
  )
}

export const EmptyPGNs = Template.bind({})

EmptyPGNs.args = {
  availablePGNs: [],
}

export const SomePGNs = Template.bind({})

SomePGNs.args = {
  availablePGNs: ["super-secret-course"],
}
