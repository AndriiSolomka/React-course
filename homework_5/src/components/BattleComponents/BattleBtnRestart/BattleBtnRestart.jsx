import React from "react";

const BattleBtnRestart = ({ showRestartBtn, doRestart }) => {
  return (
    <div>
      {showRestartBtn && (
        <button className="restart-btn" onClick={doRestart}>
          Restart
        </button>
      )}
    </div>
  );
};

export default BattleBtnRestart;
