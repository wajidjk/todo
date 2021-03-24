import React, { useState, useCallback } from "react";
import { Button } from "@material-ui/core";

const App = () => {
  const [inputList, setInputList] = useState("");
  const [isImportant, setIsImportant] = useState("0");
  const [Items, setItems] = useState([]);
  const [name, setName] = useState("Mohsin");

  const itemEvent = (event) => {
    setInputList(event.target.value);
  };
  const addItem = useCallback(() => {
    setItems((oldItems) => {
      return [
        ...oldItems,
        {
          title: inputList,
          isImportant: !!parseInt(isImportant),
          name,
        },
      ];
    });
  }, [inputList, isImportant, name]);

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
          <input
            style={{ marginRight: "10px" }}
            className="search"
            type="text"
            placeholder="Add a Items"
            onChange={itemEvent}
          />
          <select
            style={{ marginRight: "10px" }}
            className="search"
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

          <select
            style={{ marginRight: "10px" }}
            className="search"
            defaultValue={"Mohsin"}
            value={name}
            onChange={(e) => {
              let vall = e.target.value;
              setName(vall);
            }}
          >
            <option value={"(Mohsin)"}>Mohsin</option>
            <option value={"(Ahsan)"}>Ahsan</option>
            <option value={"(Hassan)"}>Hassan</option>
            <option value={"(Khawar)"}>Khawar</option>
            <option value={"(Wajid)"}>Wajid</option>
          </select>
          <button onClick={addItem}>+</button>
          {/* <Button className="button" color="secondary" onClick={addItem}>
            +
          </Button> */}
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
                      {itemvalue.name}
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
