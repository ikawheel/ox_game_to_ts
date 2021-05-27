import { VFC, useState, useContext } from "react";
import { SquaresState } from "../molecules/Board";

const Square: VFC<{ val: number }> = ({ val }) => {
  const aaa = useContext(SquaresState);
  const [dispChar, setDispChar] = useState(String(val));

  return (
    <button
      className="square"
      onClick={() => {
        aaa[val - 1] = "X";
        setDispChar("X");
        console.log({ aaa });
      }}
    >
      {dispChar}
    </button>
  );
};

export default Square;
