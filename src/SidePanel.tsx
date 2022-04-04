import React from "react"
import { Box } from "@mui/material"
import { PlayerPanel } from "./PlayerPanel"
import DrillPanel from "./DrillPanel"

export function SidePanel() {
  return (
    <Box display="grid" gridTemplateColumns="repeat(1, 1fr)">
      <DrillPanel availablePGNs={[]}></DrillPanel>
      <PlayerPanel></PlayerPanel>
    </Box>
  )
}
