import React, { useContext, useEffect, useState } from "react"
import styled from "styled-components"
import { CPUContext } from "./contexts/PGNsContext"
import { TurnContext } from "./contexts/turnContext"
import { PieceCharacter } from "./pieces"
import { Square } from "./Square"
import { delay, fenColorTurn } from "./utils"

const squareColor = (i: number) => {
  return (i + Math.floor(i / 8)) % 2 === 0 ? "light" : "dark"
}

function parseFEN(fen: string): PieceCharacter[] {
  return [...fen.split(" ")[0]]
    .map((row) =>
      [...row].map((c) => {
        const n = parseInt(c)
        return n ? " ".repeat(n) : c === "/" ? "" : c
      })
    )
    .flat()
    .join("") as unknown as PieceCharacter[]
}
type Props = {
  initialFen: string
}

// TODO: get it from env
const BASE_URL = "http://localhost:6006"
const WAITING_TIME = 0.5

export function Board({ initialFen }: Props) {
  const [selectedSquare, setSelectedSquare] = useState<number>()
  const [targetedSquares, setTargetedSquares] = useState<number[]>([])
  const [fen, setFen] = useState<string>(initialFen)
  const { setColorTurn, isDrilling, playerColor } = useContext(TurnContext)
  const { selectedPGNs } = useContext(CPUContext)

  const move = async (i: number) => {
    fetch(`${BASE_URL}/move?from=${selectedSquare}to=${i}`)
      .then((response) => response.json())
      .then((fen: string) => setFen(fen))
  }

  useEffect(() => {
    if (selectedSquare) {
      fetch(`${BASE_URL}/possible_moves/${selectedSquare}`).then((response) =>
        response.json().then((targets: number[]) => setTargetedSquares(targets))
      )
    } else {
      setTargetedSquares([])
    }
  }, [selectedSquare])

  useEffect(() => {
    const currentTurnColor = fenColorTurn(fen)
    setColorTurn(currentTurnColor)

    const playCpuMove = async () => {
      if (isDrilling && playerColor !== currentTurnColor) {
        await delay(WAITING_TIME)
        const data = { fen, selectedPGNs }
        fetch(`${BASE_URL}/cpu_move`, {
          method: "POST",
          body: JSON.stringify(data),
        }).then((response) => response.json().then((fen) => setFen(fen)))
      }
    }
    playCpuMove()
  }, [fen, isDrilling, playerColor, selectedPGNs, setColorTurn])

  return (
    <GridBoard>
      {playerColor === "white"
        ? [...parseFEN(fen)].map((c, i) => {
            return (
              <Square
                i={i}
                key={i}
                background={squareColor(i)}
                pieceSymbol={c}
                targeted={targetedSquares.includes(i)}
                selected={i === selectedSquare}
                updateSelected={setSelectedSquare}
                updateTargeted={setTargetedSquares}
                move={move}
              ></Square>
            )
          })
        : [...parseFEN(fen)]
            .map((c, i) => {
              return (
                <Square
                  i={i}
                  key={i}
                  background={squareColor(i)}
                  pieceSymbol={c}
                  targeted={targetedSquares.includes(i)}
                  selected={i === selectedSquare}
                  updateSelected={setSelectedSquare}
                  updateTargeted={setTargetedSquares}
                  move={move}
                ></Square>
              )
            })
            .reverse()}
    </GridBoard>
  )
}

const GridBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(8, fit-content(8ch)); // FIXME: don't use 'ch'
  grid-gap: 0;
`
