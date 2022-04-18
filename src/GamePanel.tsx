import { Box, Typography } from "@mui/material"
import React, { useContext, useEffect, useState } from "react"
import { GameContext, MoveTree } from "./contexts/GameContext"


export function GamePanel({ initialTree }: { initialTree: MoveTree }) {
  const {moveHistory, setMoveHistory} = useContext(GameContext)

  useEffect(() => {
    setMoveHistory(initialTree)
  }, [])

  return (
    <Box
      display="grid"
      gridTemplateColumns="1fr 1fr"
      style={{ background: "black" }}
      padding="10px"
    >
      <Typography variant="h3" style={{ gridColumn: "span 2" }} color='white'>
        Moves
      </Typography>
      {moveHistory.map((node, i) => {
        return (
          <Box style={{ background: i % 2 ? "lightgrey" : "white" }} margin="1px">
            {node}
          </Box>
        )
      })}
    </Box>
  )
}
