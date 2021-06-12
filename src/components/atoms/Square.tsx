import React from "react";
import { VFC, useContext } from "react";
import { historyContext, GlobalDataContext } from "../../App";
// import { historyContext, xIsNext, STEP } from "../../App";
import { calculateWinner } from "../../funcs/utils";

const Square: VFC<{ val: number }> = React.memo(({ val }) => {
  const history = useContext(historyContext);
  const { globalData, setGlobalData } = useContext(GlobalDataContext);

  return (
    <button
      className="square"
      onClick={() => {
        history.splice(globalData.step + 1, 100); // タイムマシンのための削除処理。配列外触って落ちるかと思ったけど、無視するようなのでこれで。
        const current = history[history.length - 1];
        const squares = current.squares.slice();
        // 勝敗が決まっておらず、マスが空欄なら埋めて手番交代
        if (!calculateWinner(squares) && !squares[val]) {
          // クリックされたマスを埋める
          squares[val] = globalData.xisNext ? "x" : "○";
          // 手順の履歴を保存
          history.push({ squares });
          // 手番を交代+手数をカウント
          setGlobalData({
            ...globalData, // 分割代入しなくてもいいけど、あとから増えたりすると面倒なので一応
            xisNext: !globalData.xisNext,
            step: history.length - 1,
          });
        }
      }}
    >
      {history[history.length - 1].squares[val]}
    </button>
  );
});

export default Square;
