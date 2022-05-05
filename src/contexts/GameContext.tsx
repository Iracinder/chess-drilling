import React, { Dispatch, SetStateAction } from "react"

export type Move = { san: string; fen: string; uci: string }
export type MoveTree = Move[]

type GameContextType = {
  playerColor: "white" | "black"
  setPlayerColor: Dispatch<SetStateAction<"white" | "black">>
  moveHistory: MoveTree
  setMoveHistory: Dispatch<SetStateAction<MoveTree>>
  fen: string
  setFen: Dispatch<SetStateAction<string>>
}

export const GameContext = React.createContext<GameContextType>({
  playerColor: "white",
  setPlayerColor: () => {},
  moveHistory: [],
  setMoveHistory: () => {},
  fen: "rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1",
  setFen: () => {},
})
