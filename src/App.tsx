import React from "react";
import "./App.css";
import { Board } from "./board";
import { Square } from "./Square";

const themes = {
  lichess: {
    light: "#f0d9b5",
    dark: "#b58863",
    selected: "#aaa23a"
  },
};
export const ThemeContext = React.createContext(themes.lichess);

function App() {
  return (
    <ThemeContext.Provider value={themes.lichess}>
      <div className="App">
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
