import React, { VFC } from "react";
import Board from "./molecules/Board";

const Game: VFC = () => {
  return (
    <>
      <div className="game">
        <div className="gmae-board">
          <Board />
        </div>
        <div className="game-info">
          {/* <div>{status}</div> */}
          <div>{/* TODO */}</div>
        </div>
      </div>
    </>
  );
};

export default Game;
