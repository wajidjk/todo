import React, { useState } from "react";
const App = () => {
  const [inputList, setInputList] = useState("");
  const [Items, setItems] = useState([]);
  const itemEvent = (event) => {
    setInputList(event.target.value);
  };

  const listOfItems = () => {
    setItems((oldItems) => {
      return [...oldItems, inputList];
    });
  };

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
          <button onClick={listOfItems}>+</button>
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
                    <li key={index}>{itemvalue}</li>
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
