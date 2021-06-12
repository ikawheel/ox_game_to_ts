import React from "react";
import { VFC, useContext } from "react";
import Square from "../atoms/Square";
import { calculateWinner } from "../../funcs/utils";
// import { historyContext, xIsNext, STEP } from "../../App";
import { GlobalDataContext, historyContext } from "../../App";

const Board: VFC = () => {
  const { globalData, setGlobalData } = useContext(GlobalDataContext);
  const history = useContext(historyContext);
  const current = history[globalData.step];
  const winner = calculateWinner(current.squares.slice());

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            setGlobalData({
              ...globalData,
              xisNext: move % 2 === 0,
              step: move,
            });
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
