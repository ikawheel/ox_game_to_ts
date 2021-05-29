import { VFC, useState, useContext } from "react";
import { SquaresState, xIsNext } from "../../App";

const Square: VFC<{ val: number; func: any }> = ({ val, func }) => {
  const squarState = useContext(SquaresState);
  const xisnext = useContext(xIsNext);
  const [dispChar, setDispChar] = useState(String(val));

  return (
    <button
      className="square"
      onClick={() => {
        squarState[val - 1] = xisnext[0] ? "x" : "○";
        setDispChar(squarState[val - 1]);
        func(!xisnext[0]);
        xisnext[0] = !xisnext[0];
        console.log({ squarState });
      }}
    >
      {dispChar}
    </button>
  );
};

export default Square;
