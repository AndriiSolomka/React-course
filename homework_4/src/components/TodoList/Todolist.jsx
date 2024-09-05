import { useEffect, useState } from "react";
import { stopBubbling } from "../../utils/utils";
import { services } from "../../services/todoServices/todoServices";
import TodosLIstBtn from "../TodosBtns/TodosLIstBtn/TodosLIstBtn";

const Todolist = ({ newTodo, sortTodoByLow, sortTodoByHigh }) => {
  const [todo, setTodo] = useState([]);

  const getTodo = async () => {
    const response = await services.get();
    setTodo(response);
  };

  useEffect(() => {
    getTodo();
  }, []);

  useEffect(() => {
    if (Object.keys(newTodo).length) getTodo();
  }, [newTodo]);

  useEffect(() => {
    if (sortTodoByLow) {
      setTodo((prevState) => [...prevState].sort((a, b) => a.price - b.price));
    }
  }, [sortTodoByLow]);

  useEffect(() => {
    if (sortTodoByHigh) {
      setTodo((prevState) => [...prevState].sort((a, b) => b.price - a.price));
    }
  }, [sortTodoByHigh]);

  const handleItemBuyStatus = async (item) => {
    await services.put(item.id, { ...item, buy: !item.buy });
    getTodo();
  };

  const doHandleItemDelete = async (id) => {
    await services.delete(id);

    getTodo();
  };

  const getListItemClassName = (item) => {
    const classes = [];

    if (item.buy) classes.push("item--buy");

    return classes.join(" ");
  };

  return (
    <>
      {todo.length ? (
        <ul className="item-container">
          {todo.map((item) => (
            <li className={getListItemClassName(item)} key={item.id}>
              {item.title}
              <span className="item-price">{item.price}</span>
              {
                <input
                  type="checkbox"
                  defaultChecked={item.buy}
                  onChange={() => handleItemBuyStatus(item)}
                />
              }

              <TodosLIstBtn
                itemId={item.id}
                handleItemDelete={doHandleItemDelete}
              />
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
};

export default Todolist;
