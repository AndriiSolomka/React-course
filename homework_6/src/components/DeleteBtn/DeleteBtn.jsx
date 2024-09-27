import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { stopBubbling } from "../../utils/utils";
import { COUNTRIES } from "../../const/path";
import { fetchDeleteCountry } from "../../store/features/countries/thunks";

const DeleteBtn = ({ id }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch(fetchDeleteCountry(id)).then(() => {
      navigate(COUNTRIES);
    });
  };

  return (
    <div>
      <button onClick={(event) => stopBubbling(event, () => handleDelete(id))}>
        Delete
      </button>
    </div>
  );
};

export default DeleteBtn;
