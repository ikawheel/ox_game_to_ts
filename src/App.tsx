import React from "react";
import "./App.css";
import Game from "./components/Game";

//// useContextでも値変更できるように配列を利用。お行儀良いのかは不明。

// 手順の履歴
const arrSq: string[] = new Array(9);
const historyArr = [{ squares: arrSq }];
export const historyContext = React.createContext(historyArr);

//// とりあえず動くように手番フラグと手のカウントを配列で記載。後で直す。
// 手番の状態
const arrBl: boolean[] = new Array(1);
arrBl[0] = true;
export const xIsNext = React.createContext(arrBl);

// 何手目か
const arrStep: number[] = new Array(1);
arrStep[0] = 0;
export const STEP = React.createContext(arrStep);

function App() {
  return <Game />;
}

export default App;
