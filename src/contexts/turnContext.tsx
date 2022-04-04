import React, { Dispatch, SetStateAction } from "react"

type TurnContextType = {
	colorTurn: 'white' | 'black'
	setColorTurn: Dispatch<SetStateAction<'white' | 'black'>>
	isDrilling: boolean
	setIsDrilling: Dispatch<SetStateAction<boolean>>
	playerColor: 'white' | 'black'
	setPlayerColor: Dispatch<SetStateAction<'white' | 'black'>>
}

export const TurnContext = React.createContext<TurnContextType>({
  colorTurn: "white",
  setColorTurn: () => {},
  isDrilling: false,
  setIsDrilling: () => {},
  playerColor: 'white',
  setPlayerColor: () => {}
})
