import styled from "styled-components"
import blackBishop from "./static/svgs/blackBishop.svg"
import blackKing from "./static/svgs/blackKing.svg"
import blackKnight from "./static/svgs/blackKnight.svg"
import blackPawn from "./static/svgs/blackPawn.svg"
import blackQueen from "./static/svgs/blackQueen.svg"
import blackRook from "./static/svgs/blackRook.svg"
import whiteBishop from "./static/svgs/whiteBishop.svg"
import whiteKing from "./static/svgs/whiteKing.svg"
import whiteKnight from "./static/svgs/whiteKnight.svg"
import whitePawn from "./static/svgs/whitePawn.svg"
import whiteQueen from "./static/svgs/whiteQueen.svg"
import whiteRook from "./static/svgs/whiteRook.svg"

const PieceSVG = styled.img`
  width: 100%;
  /*position: absolute;
  top: 0;
  left: 0;*/
  display: flex
  grid-column: "1 / 1";
  grid-row: "1 / 1";
  align-self: center;
  justify-self: center;
`

export const BlackBishop = <PieceSVG src={blackBishop} alt="piece"></PieceSVG>
export const BlackKing = <PieceSVG src={blackKing} alt="piece"></PieceSVG>
export const BlackKnight = <PieceSVG src={blackKnight} alt="piece"></PieceSVG>
export const BlackPawn = <PieceSVG src={blackPawn} alt="piece"></PieceSVG>
export const BlackQueen = <PieceSVG src={blackQueen} alt="piece"></PieceSVG>
export const BlackRook = <PieceSVG src={blackRook} alt="piece"></PieceSVG>
export const WhiteBishop = <PieceSVG src={whiteBishop} alt="piece"></PieceSVG>
export const WhiteKing = <PieceSVG src={whiteKing} alt="piece"></PieceSVG>
export const WhiteKnight = <PieceSVG src={whiteKnight} alt="piece"></PieceSVG>
export const WhitePawn = <PieceSVG src={whitePawn} alt="piece"></PieceSVG>
export const WhiteQueen = <PieceSVG src={whiteQueen} alt="piece"></PieceSVG>
export const WhiteRook = <PieceSVG src={whiteRook} alt="piece"></PieceSVG>

const Piece = {
  b: BlackBishop,
  B: WhiteBishop,
  k: BlackKing,
  K: WhiteKing,
  n: BlackKnight,
  N: WhiteKnight,
  p: BlackPawn,
  P: WhitePawn,
  q: BlackQueen,
  Q: WhiteQueen,
  r: BlackRook,
  R: WhiteRook,
}
export default Piece

export type PieceCharacter = "b" | "p" | "q" | "k" | "K" | "Q" | "n" | "N" | "B" | "r" | "R" | "P" | " "