import React, { Dispatch, SetStateAction } from "react"
export type MoveTree = string[]

type GameContextType = {
  colorTurn: "white" | "black"
  setColorTurn: Dispatch<SetStateAction<"white" | "black">>
  playerColor: "white" | "black"
  setPlayerColor: Dispatch<SetStateAction<"white" | "black">>
  moveHistory: string[]
  setMoveHistory: Dispatch<SetStateAction<MoveTree>>
}

export const GameContext = React.createContext<GameContextType>({
  colorTurn: "white",
  setColorTurn: () => {},
  playerColor: "white",
  setPlayerColor: () => {},
  moveHistory: [],
  setMoveHistory: () => {}
})
