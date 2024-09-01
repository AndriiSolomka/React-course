import { useState, useEffect } from "react";
import "../../styles/table.css";

const URL = "https://6675570ea8d2b4d072efa0bb.mockapi.io/tasks";
const taskStatus = {
  toDo: 0,
  inProgress: 1,
  done: 2,
  archive: 3,
};

function Board() {
  const [board, setBoard] = useState([]);

  useEffect(() => {
    (async () => {
      try {
        const request = await fetch(URL),
          response = await request.json();
        setBoard(response);
      } catch (error) {
        console.error(error);
      }
    })();
  }, []);

  useEffect(() => {
    console.log("Board updated:", board);
  }, [board]);

  const countItemsByStatus = (status) => {
    return board.filter((item) => item.status === status).length;
  };

  const updateTaskStatus = (btnValue, id) => {
    setBoard((prevState) =>
      prevState.map((item) =>
        item.id === id ? { ...item, status: btnValue } : item
      )
    );
  };

  const removeTask = (id) => {
    setBoard((prevState) => prevState.filter((item) => item.id !== id));
  };

  const handleClick = (text, id) => {
    if (text === "In progress") {
      return updateTaskStatus(taskStatus.inProgress, id);
    }
    if (text === "To do") {
      return updateTaskStatus(taskStatus.toDo, id);
    }
    if (text === "Done") {
      return updateTaskStatus(taskStatus.done, id);
    }
    if (text === "To archive") {
      return removeTask(id);
    }
  };

  const renderColumn = (status, btnStatus) => {
    return board
      .filter((item) => item.status === status)
      .map((item) => (
        <ul key={item.id}>
          <li>{item.title}</li>
          {btnStatus.map((text, index) => (
            <button key={index} onClick={() => handleClick(text, item.id)}>
              {text}
            </button>
          ))}
        </ul>
      ));
  };

  return board.length ? (
    <table className="table">
      <thead>
        <tr>
          <td>To Do: {countItemsByStatus(taskStatus.toDo)}</td>
          <td>In Progress: {countItemsByStatus(taskStatus.inProgress)}</td>
          <td>Done: {countItemsByStatus(taskStatus.done)}</td>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{renderColumn(taskStatus.toDo, ["In progress"])}</td>
          <td>{renderColumn(taskStatus.inProgress, ["To do", "Done"])}</td>
          <td>{renderColumn(taskStatus.done, ["To archive"])}</td>
        </tr>
      </tbody>
    </table>
  ) : null;
}

export default Board;
