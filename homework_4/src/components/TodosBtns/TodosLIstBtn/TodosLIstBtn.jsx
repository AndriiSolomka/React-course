import React from "react";
import { stopBubbling } from "../../../utils/utils";

const TodosLIstBtn = ({ itemId, handleItemDelete }) => {
  return (
    <>
      <button
        className="button--delete"
        onClick={(event) => stopBubbling(event, () => handleItemDelete(itemId))}
      >
        Delete
      </button>
    </>
  );
};

export default TodosLIstBtn;
