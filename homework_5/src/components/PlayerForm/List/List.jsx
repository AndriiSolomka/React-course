import React from "react";
import ResetBtn from "../ResetBtn/ResetBtn";
const List = ({ playerBattleInfo, isShowBattleInfo }) => {
  return (
    <div>
      {isShowBattleInfo && (
        <div>
          <ul>
            <li>Followers: {playerBattleInfo.followers}</li>
            <li>Stars: {playerBattleInfo.starsCount}</li>
            <li>Total: {playerBattleInfo.total}</li>
          </ul>

          
        </div>
      )}
    </div>
  );
};

export default List;
