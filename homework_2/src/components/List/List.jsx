import React, { useState, useEffect } from "react";
import { array } from "../../mockedData/mockedData.js";
import { generateNumber, makeNumArr } from "../../utils/utils.js";
import "../../styles/table.css";

const List = () => {
  const [list, setList] = useState(array);
  const elementCount = makeNumArr(array);
  console.log(elementCount);
  

  useEffect(() => {
    const intervalId = setInterval(() => {
      if (elementCount.length) {
        const pos = generateNumber(elementCount);
        array[pos].active = true;
        const copyArr = structuredClone(array);
        setList(copyArr);
      } else {
        clearInterval(intervalId);
      }
    }, 1000);
  }, []);

  return list.length ? (
    <table className="table">
      <tbody>
        {list.map((item, index) => (
          <tr key={index} className={item.active ? "active" : ""}>
            <td>{item.type}</td>
            <td>{item.icon}</td>
          </tr>
        ))}
      </tbody>
    </table>
  ) : null;
};

export default List;
