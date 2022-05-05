import { ToggleButtonGroup, ToggleButton, Typography, Box } from "@mui/material"
import React, { useContext } from "react"
import { GameContext } from "./contexts/GameContext"

export function PlayerPanel() {
  const { playerColor, setPlayerColor } = useContext(GameContext)
  return (
    <Box display="flex">
      <Typography>Playing as</Typography>
      <ToggleButtonGroup
        exclusive
        value={playerColor}
        // @ts-ignore
        onChange={(event: React.ChangeEvent<{ value: "white" | "black" }>) => {
          setPlayerColor(event.currentTarget.value)
        }}
      >
        <ToggleButton value="white">White</ToggleButton>
        <ToggleButton value="black">Black</ToggleButton>
      </ToggleButtonGroup>
    </Box>
  )
}
