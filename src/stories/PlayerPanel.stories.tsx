import React, { useState } from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TurnContext } from "../contexts/turnContext"
import { PlayerPanel } from "../PlayerPanel"

export default {
  title: "SidePanel/PlayerPanel",
  component: PlayerPanel,
} as ComponentMeta<typeof PlayerPanel>

const Template: ComponentStory<typeof PlayerPanel> = () => {
  const [colorTurn, setColorTurn] = useState<"white" | "black">("white")
  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const initialTurnContext = {
    colorTurn: colorTurn,
    setColorTurn: setColorTurn,
    isDrilling: isDrilling,
    setIsDrilling: setIsDrilling,
    playerColor: playerColor,
    setPlayerColor: setPlayerColor,
  }
  return (
    <TurnContext.Provider value={initialTurnContext}>
      <PlayerPanel/>
    </TurnContext.Provider>
  )
}

export const Default = Template.bind({})

Default.args = {}
