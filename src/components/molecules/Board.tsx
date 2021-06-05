import React from "react";
import { VFC, useState, useContext } from "react";
import Square from "../atoms/Square";
import { calculateWinner } from "../../funcs/utils";
import { historyContext, xIsNext, STEP } from "../../App";

const Board: VFC = () => {
  const xisnext = useContext(xIsNext);
  const st = useContext(STEP);
  const history = useContext(historyContext);
  const [xin, setxIsNext] = useState(true);
  const current = history[st[0]];
  const winner = calculateWinner(current.squares.slice());

  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button
          onClick={() => {
            st[0] = move;
            xisnext[0] = move % 2 === 0;
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
    status = "次の手番: " + (xin ? "X" : "O");
  }

  // 縦横決め打ちなので、マス目作成をcontainerに作るとよりよいかも
  return (
    <>
      <div className="game">
        <div className="gmae-board">
          <div className="board-row">
            <Square val={0} setxIsNext={setxIsNext} />
            <Square val={1} setxIsNext={setxIsNext} />
            <Square val={2} setxIsNext={setxIsNext} />
          </div>
          <div className="board-row">
            <Square val={3} setxIsNext={setxIsNext} />
            <Square val={4} setxIsNext={setxIsNext} />
            <Square val={5} setxIsNext={setxIsNext} />
          </div>
          <div className="board-row">
            <Square val={6} setxIsNext={setxIsNext} />
            <Square val={7} setxIsNext={setxIsNext} />
            <Square val={8} setxIsNext={setxIsNext} />
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
