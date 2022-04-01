import React, { useState } from "react"
import styled from "styled-components"
import { PieceCharacter } from "./pieces"
import { Square } from "./Square"

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
  fen: string
}

export function Board({ fen }: Props) {
  const [selectedSquare, setSelectedSquare] = useState<number>()
  const [targetedSquares, setTargetedSquares] = useState<number[]>([])

  return (
    <GridBoard>
      {[...parseFEN(fen)].map((c, i) => {
        return (
          <Square
            i={i}
            key={i}
            background={squareColor(i)}
            pieceSymbol={c}
            targeted={targetedSquares.includes(i)}
            selected={i === selectedSquare}
            updateSelected={setSelectedSquare}
          ></Square>
        )
      })}
    </GridBoard>
  )
}

const GridBoard = styled.div`
  display: grid;
  grid-template-columns: repeat(8, fit-content(8ch)); // FIXME: don't use 'ch'
  grid-gap: 0;
`
