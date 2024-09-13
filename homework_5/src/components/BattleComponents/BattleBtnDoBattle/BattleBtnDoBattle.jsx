import React from "react";

const BattleBtnDoBattle = ({
  firstPlayerReady,
  secondPlayerReady,
  doBattle,
}) => {
  return (
    <div>
      {firstPlayerReady && secondPlayerReady && (
        <button className="battle-btn" onClick={doBattle}>
          Battle
        </button>
      )}
    </div>
  );
};

export default BattleBtnDoBattle;
