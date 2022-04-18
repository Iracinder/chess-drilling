import React, { useState } from "react"

import "./App.css"
import { ThemeContext, themes } from "./contexts/themeContext"
import { GameContext, MoveTree } from "./contexts/GameContext"
import { Board } from "./board"
import { CPUContext } from "./contexts/CPUContext"
import { SidePanel } from "./SidePanel"
import { Box } from "@mui/material"

function App() {
  const [colorTurn, setColorTurn] = useState<"white" | "black">("white")
  const [isDrilling, setIsDrilling] = useState<boolean>(false)
  const [playerColor, setPlayerColor] = useState<"white" | "black">("white")
  const [selectedPGNs, setSelectedPGNs] = useState<string[]>([])
  const [moveHistory, setMoveHistory] = useState<MoveTree>({})
  const [fen, setFen] = useState<string>("rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1")

  const initialGameContext = {
    colorTurn: colorTurn,
    setColorTurn: setColorTurn,
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
    <ThemeContext.Provider value={themes.lichess}>
      <GameContext.Provider value={initialGameContext}>
        <CPUContext.Provider value={initialCPUContext}>
          <Box className="App" display='flex'>
            <Board initialFen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"></Board>
            <SidePanel />
          </Box>
        </CPUContext.Provider>
      </GameContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
