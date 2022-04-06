import React, { useState } from "react"

import "./App.css"
import { ThemeContext, themes } from "./contexts/themeContext"
import { TurnContext } from "./contexts/turnContext"
import { Board } from "./board"
import { CPUContext } from "./contexts/PGNsContext"
import { SidePanel } from "./SidePanel"
import { Box } from "@mui/material"

function App() {
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
    <ThemeContext.Provider value={themes.lichess}>
      <TurnContext.Provider value={initialTurnContext}>
        <CPUContext.Provider value={initialCPUContext}>
          <Box className="App" display='flex'>
            <Board initialFen="rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1"></Board>
            <SidePanel />
          </Box>
        </CPUContext.Provider>
      </TurnContext.Provider>
    </ThemeContext.Provider>
  )
}

export default App
