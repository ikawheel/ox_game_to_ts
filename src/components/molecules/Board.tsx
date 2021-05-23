import { VFC } from "react";
import Square from "../atoms/Square";

const Game: VFC = () => {
  const status: String = "Next palayer: X";
  // 縦横決め打ちなので、マス目作成をcontainerに作るとよりよいかも
  return (
    <>
      <div>
        <div className="status">{status}</div>
        <div className="board-row">
          <Square val={1} />
          <Square val={2} />
          <Square val={3} />
        </div>
        <div className="board-row">
          <Square val={4} />
          <Square val={5} />
          <Square val={6} />
        </div>
        <div className="board-row">
          <Square val={7} />
          <Square val={8} />
          <Square val={9} />
        </div>
      </div>
    </>
  );
};

export default Game;
