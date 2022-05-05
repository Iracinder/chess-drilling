import React, { useState } from "react"
import { rest } from "msw"

import { ComponentStory, ComponentMeta } from "@storybook/react"
import { Board } from "../board"
import { GameContext, MoveTree } from "../contexts/GameContext"
import { CPUContext } from "../contexts/CPUContext"

// TODO: get it from env
const BASE_URL = "http://localhost:6006"

export default {
  title: "Board",
  component: Board,
} as ComponentMeta<typeof Board>

const Template: ComponentStory<typeof Board> = (args) => {
  const [isDrilling, setIsDrilling] = useState<boolean>(true)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const [selectedPGNs, setSelectedPGNs] = useState<string[]>([])
  const [moveHistory, setMoveHistory] = useState<MoveTree>([])
  const [fen, setFen] = useState<string>(
    "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"
  )

  const initialCPUContext = {
    CPUMove: () => Promise.resolve(new Response()),
    selectedPGNs: selectedPGNs,
    setSelectedPGNs: setSelectedPGNs,
    isDrilling: isDrilling,
    setIsDrilling: setIsDrilling,
  }
  const initialGameContext = {
    playerColor: playerColor,
    setPlayerColor: setPlayerColor,
    moveHistory: moveHistory,
    setMoveHistory: setMoveHistory,
    fen: fen,
    setFen: setFen,
  }

  return (
    <GameContext.Provider value={initialGameContext}>
      <CPUContext.Provider value={initialCPUContext}>
        <Board {...args} />
      </CPUContext.Provider>
    </GameContext.Provider>
  )
}

export const Empty = Template.bind({})

Empty.args = {
  initialFen: "1r1q2k1/1bp5/p2p4/1p2pP2/4P3/2NPn3/PPP3PP/R5K1 w - - 0 23",
}

Empty.parameters = {
  msw: {
    handlers: [
      rest.get(`${BASE_URL}/moves/possible_moves/:id`, (req, res, ctx) => {
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
      }),
    ],
  },
}
