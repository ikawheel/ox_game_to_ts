import React from "react";
import { VFC, useContext } from "react";
import Square from "../atoms/Square";
import { calculateWinner } from "../../funcs/utils";
// import { historyContext, xIsNext, STEP } from "../../App";
import { GlobalDataContext } from "../../App";

const Board: VFC = () => {
  const { globalData, setGlobalData } = useContext(GlobalDataContext);
  // const current = globalData.historyArr[globalData.step - 1 === -1 ? 0 : globalData.step - 1];
  const current = globalData.historyArr[globalData.step];
  const winner = calculateWinner(current.squares.slice());

  const moves = globalData.historyArr.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            globalData.historyArr.splice(move + 1, 100); // タイムマシンのための履歴削除処理。
            setGlobalData({
              ...globalData,
              xisNext: move % 2 === 0,
              step: move,
            });

            //// こっちで履歴配列をいじると、なぜか中身が空になって再描画時にコケる。なんで？
            // setGlobalData({
            //   ...globalData,
            //   historyArr: globalData.historyArr.splice(
            //     globalData.step + 1,
            //     100
            //   ),
            // });
          }}
        >
          {desc}
        </button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "勝者：" + winner;
  } else {
    status = "次の手番: " + (globalData.xisNext ? "X" : "O");
  }

  // 縦横決め打ちなので、マス目作成をcontainerに作るとよりよいかも
  return (
    <>
      <div className="game">
        <div className="gmae-board">
          <div className="board-row">
            <Square val={0} />
            <Square val={1} />
            <Square val={2} />
          </div>
          <div className="board-row">
            <Square val={3} />
            <Square val={4} />
            <Square val={5} />
          </div>
          <div className="board-row">
            <Square val={6} />
            <Square val={7} />
            <Square val={8} />
          </div>
        </div>
        <div className="game-info">
          <div>
            <div className="status">{status}</div>
            <ol>{moves}</ol>
          </div>
        </div>
      </div>
    </>
  );
};

export default Board;
