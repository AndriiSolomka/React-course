import { useState } from "react";
import { services } from "../../services/todoServices/todoServices";
import TodosSortBtn from "../TodosBtns/TodosAddFormBtn/TodosAddFormBtn";

const TodosForm = ({ liftingNewTodo }) => {
  const DEFAULT_TODO = {
    title: "Input horse name",
    buy: false,
  };

  const [newTodo, setNewTodo] = useState(DEFAULT_TODO);

  const handleNewTodoTitle = (event) => {
    setNewTodo((prevState) => ({ ...prevState, title: event.target.value }));
  };
  const handleNewTodoCompleted = (event) => {
    setNewTodo((prevState) => ({ ...prevState, buy: event.target.checked }));
  };

  const handleNewTodoSubmit = async (event) => {
    event.preventDefault();

    const request = await services.post(newTodo);
    liftingNewTodo(request);
  };

  return (
    <>
      {
        <form className="todos--form" onSubmit={handleNewTodoSubmit}>
          <label>
            Title:{" "}
            <input
              type="text"
              defaultValue={newTodo.title}
              onChange={handleNewTodoTitle}
            />
          </label>

          <label>
            Completed:{" "}
            <input
              type="checkbox"
              defaultChecked={newTodo.buy}
              onChange={handleNewTodoCompleted}
            />
          </label>

          <TodosSortBtn />
        </form>
      }
    </>
  );
};

export default TodosForm;
