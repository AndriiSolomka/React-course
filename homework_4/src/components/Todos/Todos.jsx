import { useEffect, useState } from "react";
import "./styles.css";
import { stopBubbling } from "../../utils/utils";
function Todos() {
  const DEFAULT_TODO = {
    title: "Input horse name",
    buy: false,
  };
  const URL = "https://66d5bbd7f5859a70426741b3.mockapi.io/todos";
  const [todo, setTodo] = useState([]);
  const [newTodo, setNewTodo] = useState(DEFAULT_TODO);
  const [sortedTodo, setSortedTodo] = useState([]);

  useEffect(() => {
    console.log(`in useEffect for todos`, todo);

    setSortedTodo(todo);
  }, [todo]);

  const getTodo = async () => {
    try {
      const request = await fetch(URL),
        response = await request.json();
      console.log(response);

      setTodo(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getTodo();
  }, []);

  const handleItemBuyStatus = async (item) => {
    try {
      await fetch(URL + `/${item.id}`, {
        method: `PUT`,
        body: JSON.stringify({ ...item, buy: !item.buy }),
        headers: {
          "Content-type": "application/json",
        },
      });

      getTodo();
    } catch (error) {
      console.error(error);
    }
  };

  const handleItemDelete = async (id) => {
    try {
      await fetch(URL + `/${id}`, {
        method: "DELETE",
        headers: {
          "Content-type": "application/json",
        },
      });
      getTodo();
    } catch (error) {
      console.error(error);
    }
  };

  const handleNewTodoSubmit = async (event) => {
    event.preventDefault();

    try {
      await fetch(URL, {
        method: `POST`,
        body: JSON.stringify(newTodo),
        headers: {
          "Content-type": "application/json",
        },
      }),
        getTodo();
    } catch (error) {
      console.error(error);
    }
  };

  const handleFilterByPrice = (event) => {
    event.preventDefault();
  };

  const getListItemClassName = (item) => {
    const classes = [];

    if (item.buy) classes.push("item--buy");

    return classes.join(" ");
  };

  const handleNewTodoTitle = (event) => {
    setNewTodo((prevState) => ({ ...prevState, title: event.target.value }));
  };
  const handleNewTodoCompleted = (event) => {
    setNewTodo((prevState) => ({ ...prevState, buy: event.target.checked }));
  };

  const handleLowPrice = () => {
    setTodo((prevState) => [...prevState].sort((a, b) => a.price - b.price));
  };

  const handleHighPrice = () => {
    setTodo((prevState) => [...prevState].sort((a, b) => b.price - a.price));
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
          <button>submit</button>
        </form>
      }

      {
        <form className="price--form" onSubmit={handleFilterByPrice}>
          <label>
            By low price
            <input type="checkbox" onChange={handleLowPrice} />
          </label>
          <label>
            By hight price
            <input type="checkbox" onChange={handleHighPrice} />
          </label>
        </form>
      }

      {sortedTodo.length ? (
        <ul className="item-container">
          {sortedTodo.map((item) => (
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
              <button
                className="button--delete"
                onClick={(event) =>
                  stopBubbling(event, () => handleItemDelete(item.id))
                }
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : null}
    </>
  );
}

export default Todos;
