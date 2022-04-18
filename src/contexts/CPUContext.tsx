import React, { Dispatch, SetStateAction } from "react"

type CPUContextType = {
  CPUMove: (fen: string) => Promise<Response>
  selectedPGNs: string[]
  setSelectedPGNs: Dispatch<SetStateAction<string[]>>
  isDrilling: boolean
  setIsDrilling: Dispatch<SetStateAction<boolean>>
}

export const CPUContext = React.createContext<CPUContextType>({
  CPUMove: () => Promise.resolve(new Response()),
  selectedPGNs: [],
  setSelectedPGNs: () => {},
  isDrilling: false,
  setIsDrilling: () => {},
})
