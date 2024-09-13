import React from "react";

const WiningCombinations = ({ isWin }) => {
  return (
    <div>
      <div className="winner">{isWin === true && "Winner 😁"}</div>
      <div className="loser">{isWin === false && "Loser  🥴 "}</div>
      <div className="draw">{isWin === "draw" && "Draw 🥱"}</div>
    </div>
  );
};

export default WiningCombinations;
