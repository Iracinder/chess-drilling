import {
  Box,
  Button,
  Switch,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material"
import React, { useContext, useState } from "react"
import { CPUContext } from "./contexts/PGNsContext"
import { TurnContext } from "./contexts/turnContext"
import { nameFromFile } from "./utils"

type Props = {
  availablePGNs: string[]
}

export default function DrillPanel({availablePGNs}: Props) {
  const { isDrilling, setIsDrilling } = useContext(TurnContext)
  const [files, setFiles] = useState<string[]>(availablePGNs)
  const { selectedPGNs, setSelectedPGNs } = useContext(CPUContext)

  return (
    <Box>
      <Typography>
        <Switch
          checked={isDrilling}
          onChange={() => {
            setIsDrilling(!isDrilling)
          }}
          disabled={selectedPGNs?.length === 0}
        />
        Training against computer
      </Typography>
      <Button variant="contained" component="label">
        Upload File
        <input
          type="file"
          multiple
          hidden
          onChange={(e) => {
            // @ts-ignore
            setFiles([...new Set([...availablePGNs, ...nameFromFile(e.target.files)])])
          }}
        />
      </Button>
      <ToggleButtonGroup
        orientation="vertical"
        value={selectedPGNs}
        onChange={(
          event: React.MouseEvent<HTMLElement>,
          nextView: string[]
        ) => {
          if (nextView.length === 0) {
            setIsDrilling(false)
          }
          setSelectedPGNs([...nextView])
        }}
      >
        {files.map((fileName, i) => {
          return (
            <ToggleButton value={fileName} key={i}>
              {fileName}
            </ToggleButton>
          )
        })}
      </ToggleButtonGroup>
    </Box>
  )
}
