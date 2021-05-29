import React from "react";
import { VFC, useState, useContext } from "react";
import { SquaresState, xIsNext } from "../../App";
import { calculateWinner } from "../../funcs/utils";

const Square: VFC<{ val: number; setxIsNext: any }> = React.memo(
  ({ val, setxIsNext }) => {
    const squarState = useContext(SquaresState);
    const xisnext = useContext(xIsNext);
    const [dispChar, setDispChar] = useState("");

    return (
      <button
        className="square"
        onClick={() => {
          // 勝敗が決まっておらず、マスが空欄なら埋めて手番交代
          if (!calculateWinner(squarState) && !squarState[val]) {
            squarState[val] = xisnext[0] ? "x" : "○";
            setDispChar(squarState[val]);
            setxIsNext(!xisnext[0]);
            xisnext[0] = !xisnext[0];
          }
        }}
      >
        {dispChar}
      </button>
    );
  }
);

export default Square;
