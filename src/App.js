import React, { useState, useMemo, useCallback } from "react";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [isImportant, setIsImportant] = useState("0");
  const [Items, setItems] = useState([]);

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const addItem = useCallback(() => {
    console.log(isImportant);
    setItems((oldItems) => {
      return [
        ...oldItems,
        {
          title: inputList,
          isImportant: !!parseInt(isImportant),
        },
      ];
    });
  }, [inputList, isImportant]);

  const deleteItems = (index) => {
    console.log(index);
    console.log("deleted");
    setItems(
      Items.filter((el, idx) => {
        console.log(index, idx);
        return idx !== index;
      })
    );
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>Todo App</h1>
          <br />
          <input type="text" placeholder="Add a Items" onChange={itemEvent} />
          <select
            defaultValue={"false"}
            value={isImportant}
            onChange={(e) => {
              let val = e.target.value;
              setIsImportant(val);
            }}
          >
            <option value={"0"}>Not Important </option>
            <option value={"1"}>Important</option>
          </select>
          <button onClick={addItem}>+</button>
          <ol>
            {Items.map((itemvalue, index) => {
              return (
                <>
                  <div className="todo_style">
                    <i
                      className="fa fa-times"
                      onClick={() => {
                        return deleteItems(index);
                      }}
                    />
                    <li key={index}>
                      {itemvalue.title}{" "}
                      {Boolean(itemvalue.isImportant) ? "important" : ""}
                    </li>
                  </div>
                </>
              );
            })}
          </ol>
        </div>
      </div>
    </>
  );
};

export default App;
