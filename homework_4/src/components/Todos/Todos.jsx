import { useState } from "react";
import "./styles.css";
import TodosForm from "../TodosAddForm/TodosAddForm";
import TodosSort from "../TodosSort/TodosSort";
import Todolist from "../TodoList/Todolist";

function Todos() {
  const [newTodo, setNewTodo] = useState({});
  const [sortTodoByLow, setSortTodoByLow] = useState([]);
  const [sortTodoByHigh, setSortTodoByHigh] = useState([]);

  const liftedNewTodo = (item) => {
    setNewTodo(item);
  };

  const sortedLow = (item) => {
    setSortTodoByLow(item);
  };

  const sortedHigh = (item) => {
    setSortTodoByHigh(item);
  };

  return (
    <>
      <TodosForm liftingNewTodo={(item) => liftedNewTodo(item)} />
      <TodosSort
        sortByLow={(item) => sortedLow(item)}
        sortByHigh={(item) => sortedHigh(item)}
      />
      <Todolist
        newTodo={newTodo}
        sortTodoByLow={sortTodoByLow}
        sortTodoByHigh={sortTodoByHigh}
      />
    </>
  );
}

export default Todos;
