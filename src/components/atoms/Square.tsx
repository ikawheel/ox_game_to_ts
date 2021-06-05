import React from "react";
import { VFC, useState, useContext } from "react";
import { historyContext, xIsNext, STEP } from "../../App";
import { calculateWinner } from "../../funcs/utils";

const Square: VFC<{ val: number; setxIsNext: any }> = React.memo(
  ({ val, setxIsNext }) => {
    let history = useContext(historyContext);
    const xisnext = useContext(xIsNext);
    const st = useContext(STEP);

    const [dispChar, setDispChar] = useState("");

    return (
      <button
        className="square"
        onClick={() => {
          history = history.slice(0, st[0] + 1);
          const current = history[history.length - 1];
          const squares = current.squares.slice();
          // 勝敗が決まっておらず、マスが空欄なら埋めて手番交代
          if (!calculateWinner(squares) && !squares[val]) {
            // クリックされたマスを埋める
            squares[val] = xisnext[0] ? "x" : "○";
            // 埋められた文字を表示
            setDispChar(squares[val]);
            // 手番を交代（手番表示用）
            setxIsNext(!xisnext[0]);
            // 手番を交代（アプリ全体の状態参照用）
            xisnext[0] = !xisnext[0];
            // 手順の履歴を保存
            history.push({ squares });
            // 手数をカウント
            st[0] = history.length;
          }
        }}
      >
        {dispChar}
      </button>
    );
  }
);

export default Square;
