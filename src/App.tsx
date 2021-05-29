import React from "react";
import "./App.css";
import Game from "./components/Game";

// useContextでも値変更できるように配列を利用。お行儀良いのかは不明。
const squares: string[] = new Array(9);
const arr: boolean[] = new Array(1);
arr[0] = true;
export const SquaresState = React.createContext(squares);
export const xIsNext = React.createContext(arr);

function App() {
  return <Game />;
}

export default App;
