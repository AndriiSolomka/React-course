import React from "react";

const ResetBtn = ({handleReset}) => {
  return (
    <div>
      <button onClick={handleReset}>Reset</button>
    </div>
  );
};

export default ResetBtn;
