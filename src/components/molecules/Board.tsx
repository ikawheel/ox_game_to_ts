import React from "react";
import { VFC, useState, useContext } from "react";
import Square from "../atoms/Square";
import { calculateWinner } from "../../funcs/utils";
import { historyContext } from "../../App";

const Board: VFC = () => {
  const [xIsNext, setxIsNext] = useState(true);
  const history = useContext(historyContext);
  const current = history[history.length - 1];
  const squares = current.squares.slice();
  const winner = calculateWinner(squares);
  const moves = history.map((step, move) => {
    const desc = move ? "Go to move #" + move : "Go to game start";
    return (
      <li key={move}>
        <button /*onClick={/*() => this.jumpTo(move)}*/>{desc}</button>
      </li>
    );
  });

  let status;
  if (winner) {
    status = "勝者：" + winner;
  } else {
    status = "次の手番: " + (xIsNext ? "X" : "O");
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
