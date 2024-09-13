import React from "react";
import Player from "../Player/Player";
import { DEFAULT_PLAYER_2_INPUT } from "../../constants/constants";

const FirstPlayer = ({
  isPlayerReady,
  liftingTotal,
  isRestart,
  isShowBattleInfo,
  isSecondWin,
}) => {
  return (
    <div>
      <Player
        PLAYER_INPUT={DEFAULT_PLAYER_2_INPUT}
        isPlayerReady={isPlayerReady}
        liftingTotal={liftingTotal}
        isRestart={isRestart}
        isShowBattleInfo={isShowBattleInfo}
        isWin={isSecondWin}
      />
    </div>
  );
};

export default FirstPlayer;
