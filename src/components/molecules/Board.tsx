import { VFC } from "react";
import Square from "../atoms/Square";

const Game: VFC = () => {
  const status: String = "Next palayer: X";
  return (
    <>
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
        <div className="board-row">
          <Square />
          <Square />
          <Square />
        </div>
      </div>
    </>
  );
};

export default Game;
