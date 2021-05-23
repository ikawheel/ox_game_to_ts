import { VFC, useState } from "react";

type dispCharType = {
  num?: number;
  str?: String;
};
const dispX: dispCharType = { str: "X" };

const Square: VFC<{ val: number }> = ({ val }) => {
  const dispNum: dispCharType = { num: val };
  const [dispChar, setDispChar] = useState<dispCharType>(dispNum);
  return (
    <button
      className="square"
      onClick={() => {
        setDispChar(dispX);
      }}
    >
      {
        // null を確認すると意図通りに動かない。なにかしらライフサイクルの問題と思われる。
        // dispChar.str ? dispChar.num : "";
        dispChar.str ?? dispChar.num
      }
    </button>
  );
};

export default Square;
