import { Box, Typography } from "@mui/material"
import React, { useContext, useEffect } from "react"
import { GameContext, MoveTree } from "./contexts/GameContext"

export function GamePanel({ initialTree }: { initialTree: MoveTree }) {
  const { moveHistory, setMoveHistory, setFen } = useContext(GameContext)

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
      <Typography variant="h3" style={{ gridColumn: "span 2" }} color="white">
        Moves
      </Typography>
      {moveHistory.map(({ san }, i) => {
        return (
          <Box
            style={{ background: i % 2 ? "lightgrey" : "white" }}
            margin="1px"
            key={i}
            data-history-key={i}
            onClick={(event) => {
              const historyKey = event.currentTarget.dataset.historyKey
              if (historyKey !== undefined) {
                setFen(moveHistory[i]["fen"])
              }
            }}
          >
            {san}
          </Box>
        )
      })}
    </Box>
  )
}
