import React from "react";
import "./App.css";
import Game from "./components/Game";
import { useState } from "react";

//// ページ全体で利用する状態の定義
// 手順の履歴
const arrSq: string[] = new Array(9);
const historyArr = [{ squares: arrSq }];
export const historyContext = React.createContext(historyArr);

type TypeGlobalData = {
  xisNext: boolean; // xの手番かどうか
  step: number; // 現在が何手目か
};

type TypeGlobalDataContext = {
  globalData: TypeGlobalData;
  setGlobalData: React.Dispatch<React.SetStateAction<TypeGlobalData>>;
};
export const GlobalDataContext = React.createContext(
  {} as TypeGlobalDataContext
);

const initialValue: TypeGlobalData = {
  xisNext: true,
  step: 0,
};

function App() {
  const [globalData, setGlobalData] = useState(initialValue);
  return (
    <GlobalDataContext.Provider value={{ globalData, setGlobalData }}>
      <Game />
    </GlobalDataContext.Provider>
  );
}

export default App;
