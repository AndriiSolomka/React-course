import React, { useEffect, useState } from "react";
import "./Player.css";
import { imageService, starsInfoService } from "../../services/services";
import PlayerForm from "../PlayerForm/PlayerForm";
import { battlePlayerInfo } from "../../constants/constants";

const Player = ({
  PLAYER_INPUT,
  isPlayerReady,
  liftingTotal,
  isRestart,
  isShowBattleInfo,
  isWin,
}) => {
  const [userInBase, setUserInBase] = useState(null);
  const [responseFindInBase, setResponse] = useState(null);
  const [userName, setUserName] = useState("");
  const [playerReadyToBattle, setPlayerReadyToBattle] = useState(false);
  const [playerBattleInfo, setPlayerBattleInfo] = useState(battlePlayerInfo);

  const getUserImage = async () => {
    const request = await imageService.get(userName);

    if (request === "NOT FOUND") {
      setUserInBase(false);
    } else {
      setUserInBase(true);
      setResponse(request);
      setPlayerReadyToBattle(true);
      getFullInfo();
      battlePlayerInfo.followers = request.followers;
    }
  };

  const getFullInfo = async () => {
    const request = await starsInfoService.get(userName);
    showPlayerInfo(request);
  };

  const showPlayerInfo = async (request) => {
    const starsCount = request.reduce(
      (acc, item) => acc + item.stargazers_count,
      0
    );

    setPlayerBattleInfo((prevState) => ({
      ...prevState,
      followers: battlePlayerInfo.followers,
      starsCount: starsCount,
      total: battlePlayerInfo.followers + starsCount,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    getUserImage();
  };

  const handleChange = (event) => {
    setUserName(event.target.value);
    setUserInBase(null);
  };

  const handleReset = () => {
    setUserName("");
    setUserInBase(null);
    setPlayerReadyToBattle(false);
  };

  useEffect(() => {
    isPlayerReady(playerReadyToBattle);
  }, [playerReadyToBattle]);

  useEffect(() => {
    liftingTotal(playerBattleInfo.total);
  }, [playerBattleInfo]);

  useEffect(() => {
    if (isRestart) {
      setUserInBase(null);
    }
  }, [isRestart]);

  return (
    <>
      <PlayerForm
        handleSubmit={handleSubmit}
        userInBase={userInBase}
        response={responseFindInBase}
        playerBattleInfo={playerBattleInfo}
        handleReset={handleReset}
        PLAYER_INPUT={PLAYER_INPUT}
        handleChange={handleChange}
        isShowBattleInfo={isShowBattleInfo}
        isWin={isWin}
      />
    </>
  );
};

export default Player;
