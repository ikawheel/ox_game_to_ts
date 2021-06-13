import React from "react";
import { VFC, useContext } from "react";
import { GlobalDataContext } from "../../App";
// import { historyContext, xIsNext, STEP } from "../../App";
import { calculateWinner } from "../../funcs/utils";

const Square: VFC<{ val: number }> = React.memo(({ val }) => {
  const { globalData, setGlobalData } = useContext(GlobalDataContext);

  return (
    <button
      className="square"
      onClick={() => {
        // globalData.historyArr.splice(globalData.step + 1, 100); // タイムマシンのための削除処理。配列外触って落ちるかと思ったけど、無視するようなのでこれで。
        const current = globalData.historyArr[globalData.historyArr.length - 1];
        const squares = current.squares.slice();
        // 勝敗が決まっておらず、マスが空欄なら埋めて手番交代
        if (!calculateWinner(squares) && !squares[val]) {
          // クリックされたマスを埋める
          squares[val] = globalData.xisNext ? "x" : "○";

          // 手順の履歴を保存
          globalData.historyArr.push({ squares });

          // 配列が浅いコピーされているっぽく、上記でもpushを使っている関係で、下記を実行しなくても意図通りにデータが更新される。
          // 再描画は手番手数のsetGlobalDataにおまかせな感じ。
          // setGlobalData({
          //   ...globalData,
          //   historyArr: globalData.historyArr,
          // });

          // 手番を交代+手数をカウント
          setGlobalData({
            ...globalData,
            xisNext: !globalData.xisNext,
            step: globalData.historyArr.length - 1,
          });
        }
      }}
    >
      {globalData.historyArr[globalData.historyArr.length - 1].squares[val]}
    </button>
  );
});

export default Square;
