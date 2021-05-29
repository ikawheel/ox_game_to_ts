import React from "react";
import { VFC, useState } from "react";
import Square from "../atoms/Square";

const Board: VFC = () => {
  const [xIsNext, setxIsNext] = useState(true);
  // 縦横決め打ちなので、マス目作成をcontainerに作るとよりよいかも
  return (
    <>
      <div>
        <div className="status">Next palayer: {xIsNext ? "x" : "○"}</div>
        <div className="board-row">
          <Square val={1} func={setxIsNext} />
          <Square val={2} func={setxIsNext} />
          <Square val={3} func={setxIsNext} />
        </div>
        <div className="board-row">
          <Square val={4} func={setxIsNext} />
          <Square val={5} func={setxIsNext} />
          <Square val={6} func={setxIsNext} />
        </div>
        <div className="board-row">
          <Square val={7} func={setxIsNext} />
          <Square val={8} func={setxIsNext} />
          <Square val={9} func={setxIsNext} />
        </div>
      </div>
    </>
  );
};

export default Board;
