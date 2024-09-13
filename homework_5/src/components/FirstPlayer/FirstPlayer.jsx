import React from "react";
import Player from "../Player/Player";
import { DEFAULT_PLAYER_1_INPUT } from "../../constants/constants";

const FirstPlayer = ({
  isPlayerReady,
  liftingTotal,
  isRestart,
  isShowBattleInfo,
  isFirstWin,
}) => {
  return (
    <div>
      <Player
        PLAYER_INPUT={DEFAULT_PLAYER_1_INPUT}
        isPlayerReady={isPlayerReady}
        liftingTotal={liftingTotal}
        isRestart={isRestart}
        isShowBattleInfo={isShowBattleInfo}
        isWin={isFirstWin}
      />
    </div>
  );
};

export default FirstPlayer;
