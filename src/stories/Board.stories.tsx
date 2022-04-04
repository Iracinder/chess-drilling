import React, { useState } from "react"
import { rest } from "msw"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Board } from "../board"
import { TurnContext } from "../contexts/turnContext"
import { CPUContext } from "../contexts/PGNsContext"

// TODO: get it from env
const BASE_URL = "http://localhost:6006"

export default {
  title: "Board",
  component: Board,
  /*
  argTypes: {
    selected: {"control" : "boolean", "defaultValue": false},
    targeted: {"control" : "boolean", "defaultValue": false},
  }*/
} as ComponentMeta<typeof Board>

const Template: ComponentStory<typeof Board> = (args) => {
  const [colorTurn, setColorTurn] = useState<"white" | "black">("white")
  const [isDrilling, setIsDrilling] = useState<boolean>(true)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const [selectedPGNs, setSelectedPGNs] = useState<string[]>([])

  const initialCPUContext = {
    CPUMove: () => Promise.resolve(new Response()),
    selectedPGNs: selectedPGNs,
    setSelectedPGNs: setSelectedPGNs,
  }
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
      <CPUContext.Provider value={initialCPUContext}>
        <Board {...args} />
      </CPUContext.Provider>
    </TurnContext.Provider>
  )
}

export const Empty = Template.bind({})

Empty.args = {
  initialFen: "1r1q2k1/1bp5/p2p4/1p2pP2/4P3/2NPn3/PPP3PP/R5K1 w - - 0 23",
}

Empty.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/possible_moves/:id`, (req, res, ctx) => {
        const { id } = req.params
        if (typeof id === "string") {
          const i = parseInt(id)
          return res(ctx.json([(i + 1) % 64, (i + 23) % 64, (i + 45) % 64]))
        }
        return res(ctx.json([1, 23, 45]))
      }),
      rest.get(`${BASE_URL}/move`, (_, res, ctx) => {
        return res(
          ctx.json("1r1q2k1/1bp5/p2p4/1p2pP2/4P3/2NPn3/PPP3PP/4R1K1 b - - 1 23")
        )
      }),
      rest.post(`${BASE_URL}/cpu_move`, (_, res, ctx) => {
        return res(
          ctx.json("1r4k1/1bp5/p2p4/1p2pPq1/4P3/2NPn3/PPP3PP/4R1K1 w - - 2 24")
        )
      })
    ],
  },
}
