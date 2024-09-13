import React, { useState } from "react";
import FirstPlayer from "../FirstPlayer/FirstPlayer";
import SecondPlayer from "../SecondPlayer/SecondPlayer";
import "./BattleComponents.css";
import { FIRST_PLAYER, SECOND_PLAYER } from "../../constants/constants";
import BattleBtnDoBattle from "./BattleBtnDoBattle/BattleBtnDoBattle";
import BattleBtnRestart from "./BattleBtnRestart/BattleBtnRestart";

const BattleComponents = () => {
  const [firstPlayerReady, setFirstPlayerReady] = useState(false);
  const [secondPlayerReady, setSecondPlayerReady] = useState(false);

  const [showRestartBtn, setShowRestartBtn] = useState(false);
  const [firstTotal, setFirstTotal] = useState(null);
  const [secondTotal, setSecondTotal] = useState(null);

  const [isRestart, setRestart] = useState(false);
  const [isShowBattleInfo, setShowBattleInfo] = useState(false);

  const [isFirstWin, setFirstWin] = useState(null);
  const [isSecondWin, setSecondWin] = useState(null);

  const checkReady = (status, player) => {
    if (player === FIRST_PLAYER) {
      setFirstPlayerReady(status);
    }
    if (player === SECOND_PLAYER) {
      setSecondPlayerReady(status);
    }
  };

  const calcTotal = (total, player) => {
    if (player === FIRST_PLAYER) {
      setFirstTotal(total);
    }
    if (player === SECOND_PLAYER) {
      setSecondTotal(total);
    }
  };

  const doBattle = () => {
    setShowRestartBtn(true);
    setShowBattleInfo(true);
    setFirstPlayerReady(null);
    setSecondPlayerReady(null);
    doCompetitive();
  };

  const doRestart = () => {
    setRestart(true);
    setFirstWin(null);
    setSecondWin(null);
    setShowRestartBtn(false);
  };

  const doCompetitive = () => {
    const win = {
      first: firstTotal > secondTotal,
      second: secondTotal > firstTotal,
      draw: secondTotal === firstTotal,
      allReady: firstPlayerReady && secondPlayerReady,
    };

    if (win.allReady && win.first) {
      setFirstWin(true);
      setSecondWin(false);
    }
    if (win.allReady && win.second) {
      setFirstWin(false);
      setSecondWin(true);
    }

    if (win.allReady && win.draw) {
      setFirstWin("draw");
      setSecondWin("draw");
    }
  };
  return (
    <>
      <div className="battle-container">
        <div className="first-player">
          <FirstPlayer
            isPlayerReady={(status) => checkReady(status, FIRST_PLAYER)}
            liftingTotal={(total) => calcTotal(total, FIRST_PLAYER)}
            isRestart={isRestart}
            isShowBattleInfo={isShowBattleInfo}
            isFirstWin={isFirstWin}
          />
        </div>
        <div className="second-player">
          <SecondPlayer
            isPlayerReady={(status) => checkReady(status, SECOND_PLAYER)}
            liftingTotal={(total) => calcTotal(total, SECOND_PLAYER)}
            isRestart={isRestart}
            isShowBattleInfo={isShowBattleInfo}
            isSecondWin={isSecondWin}
          />
        </div>
      </div>

      <div>
        <BattleBtnDoBattle
          firstPlayerReady={firstPlayerReady}
          secondPlayerReady={secondPlayerReady}
          doBattle={doBattle}
        />

        <BattleBtnRestart
          showRestartBtn={showRestartBtn}
          doRestart={doRestart}
        />
      </div>
    </>
  );
};

export default BattleComponents;
