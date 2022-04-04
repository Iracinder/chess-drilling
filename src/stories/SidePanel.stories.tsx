import React, { useState } from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { SidePanel } from "../SidePanel"
import { TurnContext } from "../contexts/turnContext"

export default {
  title: "SidePanel",
  component: SidePanel,
} as ComponentMeta<typeof SidePanel>

const Template: ComponentStory<typeof SidePanel> = () => {
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
      <SidePanel />
    </TurnContext.Provider>
  )
}

export const Default = Template.bind({})

Default.args = {}
