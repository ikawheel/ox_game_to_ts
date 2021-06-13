import React from "react";
import "./App.css";
import Game from "./components/Game";
import { useState } from "react";

//// ページ全体で利用する状態の定義
// 手順の履歴

type TypeGlobalData = {
  xisNext: boolean; // xの手番かどうか
  step: number; // 現在が何手目か
  historyArr: {
    // 手順の履歴
    squares: string[];
  }[];
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
  historyArr: [{ squares: new Array<string>(9) }],
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
