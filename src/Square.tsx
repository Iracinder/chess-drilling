import React, { Dispatch, SetStateAction, useContext } from "react"
import styled from "styled-components"
import { ThemeContext } from "./App"
import Piece, { PieceCharacter } from "./pieces"

type HighlightProps = {
  className?: string
  style?: any
  color?: string
}
function CircleHighlight(props: HighlightProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={props.className}
      style={props.style}
      fill={props.color}
    >
      <circle cx="50" cy="50" r="10" />
    </svg>
  )
}

function CornerHighlight(props: HighlightProps) {
  return (
    <svg
      viewBox="0 0 100 100"
      className={props.className}
      style={props.style}
      fill={props.color}
    >
      <polygon points="0 0, 20 0, 0 20 " />
      <polygon points="100 0, 80 0, 100 20 " />
      <polygon points="100 100, 80 100, 100 80 " />
      <polygon points="0 100, 0 80, 20 100 " />
    </svg>
  )
}

type SqaureProps = {
  background: "light" | "dark"
  pieceSymbol: PieceCharacter
  selected?: boolean
  targeted?: boolean
  updateSelected: Dispatch<SetStateAction<number | undefined>>
  i: number
}

export function Square({ background, pieceSymbol, selected, targeted, updateSelected, i}: SqaureProps) {
  const theme = useContext(ThemeContext)
  if (pieceSymbol !== " " && targeted) {
    return (
      <StyledSquare
        backgroundColor={selected ? theme["selected"] : theme[background]}
        onClick={() => updateSelected(selected ? undefined : i)}
      >
        <CornerHighlight
          color={theme["selected"]}
          style={{ "grid-column": "1 / 1", "grid-row": "1 / 1" }}
        ></CornerHighlight>
        {Piece[pieceSymbol]}
      </StyledSquare>
    )
  } else if (pieceSymbol !== " ") {
    return (
      <StyledSquare
        backgroundColor={selected ? theme["selected"] : theme[background]}
        onClick={() => updateSelected(selected ? undefined : i)}
      >
        {Piece[pieceSymbol]}
      </StyledSquare>
    )
  } else if (targeted) {
    return (
      <StyledSquare backgroundColor={theme[background]} >
        <CircleHighlight color={theme["selected"]}></CircleHighlight>
      </StyledSquare>
    )
  }
  return <StyledSquare backgroundColor={theme[background]}></StyledSquare>
}
interface StyledSquareProps {
  readonly backgroundColor: string
}

const StyledSquare = styled.div<StyledSquareProps>`
  background: ${(props) => props.backgroundColor};
  height: 100px;
  width: 100px;
  display: grid;
  grid-template-columns: 1fr;
`
