import React from "react";
import SubmitBtn from "./SubmitBtn/SubmitBtn";
import InputName from "./InputName/InputName";
import List from "./List/List";
import ShowImage from "./ShowImage/ShowImage";
import ShowName from "./ShowName/ShowName";
import ResetBtn from "./ResetBtn/ResetBtn";
import WiningCombinations from "./WiningCombinations/WiningCombinations";

const PlayerForm = ({
  handleSubmit,
  userInBase,
  response,
  playerBattleInfo,
  handleReset,
  PLAYER_INPUT,
  handleChange,
  isShowBattleInfo,
  isWin,
}) => {
  return (
    <div>
      <WiningCombinations isWin={isWin} />

      <form className="player--form " onSubmit={handleSubmit}>
        {userInBase ? (
          <div className="player--info">
            <ShowImage response={response} />
            <ShowName response={response} />
            {!isShowBattleInfo && userInBase === true ? (
              <ResetBtn handleReset={handleReset} />
            ) : null}

            {userInBase === true ? (
              <List
                playerBattleInfo={playerBattleInfo}
                handleReset={handleReset}
                isShowBattleInfo={isShowBattleInfo}
              />
            ) : (
              ""
            )}
          </div>
        ) : (
          <label>
            <InputName
              userInBase={userInBase}
              PLAYER_INPUT={PLAYER_INPUT}
              handleChange={handleChange}
            />
            <SubmitBtn />
          </label>
        )}
      </form>
    </div>
  );
};

export default PlayerForm;
