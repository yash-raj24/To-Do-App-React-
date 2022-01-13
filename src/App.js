import React, { useState } from "react";
import "./maintask.css";
import { RiDeleteBin6Fill } from "react-icons/ri";
const App = () => {
  const [inputList, setinputList] = useState([]);

  const [items, setItems] = useState([]);
  const itemEvent = (event) => {
    setinputList(event.target.value);
  };

  const listItem = () => {
    setItems((oldarry) => {
      return [...oldarry, inputList];
    });
    setinputList("");
  };

  const deleteTask = (index) => {
    var newList = items;
    newList.splice(index, 1);
    setItems([...newList]);
  };
  return (
    <div className="maintask">
      <h1 className="heading">To Do List</h1>

      <div>
        <input
          type="text"
          placeholder="Add Task here"
          className="input"
          onChange={itemEvent}
          value={inputList}
        />

        <button
          className="btn"
          onClick={listItem}
          disabled={inputList.length === 0}
        >
          Add
        </button>

        <ol>
          {items.map((i, index) => {
            return (
              <div>
                <li className="list">
                  {i}
                  <button className="delete" onClick={() => deleteTask(index)}>
                    <RiDeleteBin6Fill size="20px" />
                  </button>
                </li>
              </div>
            );
          })}
        </ol>
      </div>
    </div>
  );
};

export default App;
