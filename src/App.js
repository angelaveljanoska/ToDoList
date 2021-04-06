import Task from "./Task";
import { useState } from "react";
import "./App.css";

function App() {
  const [textBox, setTextBox] = useState("");
  const [taskList, setTaskList] = useState([]);

  const addTask = (e) => {
    e.preventDefault();
    setTaskList((prevState) => {
      let newState = [...prevState];
      let newObject = {
        task: textBox,
        status: false,
        id: newState.length,
      };
      newState.push(newObject);
      return newState;
    });
    setTextBox("");
  };

  const handleCheck = (idParam) => {
    setTaskList((prevState) => {
      let newState = [...prevState];
      let newObj = {
        task: "",
        status: false,
        id: 0,
      };
      for (let i = 0; i < newState.length; i++) {
        if (idParam === newState[i].id) {
          /* newObj = { ...newState[i] };
          newObj.status = !newObj.status;
          console.log(newObj.status);
          newState[i] = { ...newObj }; */
          newState[i] = { ...newState[i], status: !newState[i].status };
        }
      }
      return newState;
    });
  };

  return (
    <div className="container">
      <div className="title">My To-Do List</div>
      <div>
        {taskList.map((element, key) => (
          <div key={key}>
            <Task taskInfo={element} handleCheck={handleCheck} />
          </div>
        ))}
        <div style={{ minHeight: "50px" }}>
          <div className="inputForm">
            <form onSubmit={(e) => addTask(e)}>
              <input
                type="text"
                name="newTask"
                value={textBox}
                placeholder="Add a new task"
                onChange={(e) => setTextBox(e.target.value)}
              />
              <button type="submit">Add</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
