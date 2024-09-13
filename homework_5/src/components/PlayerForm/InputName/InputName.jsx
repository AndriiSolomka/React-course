import React from "react";

const InputName = ({ userInBase, PLAYER_INPUT, handleChange }) => {
  return (
    <div>
      <div>Chose {PLAYER_INPUT} name</div>
      <input
        className={userInBase === false ? "error--user " : ""}
        type="text"
        placeholder={PLAYER_INPUT}
        onChange={handleChange}
      />

      {userInBase === false && (
        <p className="error-message">User not found in the base</p>
      )}
    </div>
  );
};

export default InputName;
