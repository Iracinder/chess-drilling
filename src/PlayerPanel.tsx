import { ToggleButtonGroup, ToggleButton, Typography } from "@mui/material"
import React, { useContext } from "react"
import { TurnContext } from "./contexts/turnContext"

export function PlayerPanel() {
  const { playerColor, setPlayerColor } = useContext(TurnContext)
  return (
    <Typography>
      Playing as
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
    </Typography>
  )
}
