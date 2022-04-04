import React from "react"

export const themes = {
  lichess: {
    light: "#f0d9b5",
    dark: "#b58863",
    selected: "#aaa23a",
  },
}
export const ThemeContext = React.createContext(themes.lichess)