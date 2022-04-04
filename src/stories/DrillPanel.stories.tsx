import React, { useState } from "react"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { TurnContext } from "../contexts/turnContext"
import DrillPanel from "../DrillPanel"
import { CPUContext } from "../contexts/PGNsContext"

export default {
  title: "SidePanel/DrillPanel",
  component: DrillPanel,
} as ComponentMeta<typeof DrillPanel>

const Template: ComponentStory<typeof DrillPanel> = (args) => {
  const [colorTurn, setColorTurn] = useState<"white" | "black">("white")
  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const [selectedPGNs, setSelectedPGNs] = useState<string[]>([])

  const initialTurnContext = {
    colorTurn: colorTurn,
    setColorTurn: setColorTurn,
    isDrilling: isDrilling,
    setIsDrilling: setIsDrilling,
    playerColor: playerColor,
    setPlayerColor: setPlayerColor,
  }

  const initialCPUContext = {
    CPUMove: () => Promise.resolve(new Response()),
    selectedPGNs: selectedPGNs,
    setSelectedPGNs: setSelectedPGNs,
  }

  return (
    <TurnContext.Provider value={initialTurnContext}>
      <CPUContext.Provider value={initialCPUContext}>
        <DrillPanel {...args} />
      </CPUContext.Provider>
    </TurnContext.Provider>
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
