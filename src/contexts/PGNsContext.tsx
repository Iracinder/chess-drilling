import React, { Dispatch, SetStateAction } from "react";

type CPUContextType = {
	CPUMove: (fen: string) => Promise<Response>
	selectedPGNs: string[]
	setSelectedPGNs: Dispatch<SetStateAction<string[]>>,
}

export const CPUContext = React.createContext<CPUContextType>({
	CPUMove: () => Promise.resolve(new Response()),
	selectedPGNs: [],
	setSelectedPGNs: () => {}
})