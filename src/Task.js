//import { useEffect, useState } from "react";
import "./Task.css";

function Task({ taskInfo: { task, status, id }, handleCheck }) {
  return (
    <div className="task">
      <span
        className={status ? "checked" : "unchecked"}
        style={{
          marginRight: "40px",
          marginLeft: "5px",
        }}
      >
        {task}
      </span>
      <input
        style={{ padding: "10px", right: "6px", position: "absolute" }}
        type="checkbox"
        checked={status}
        onChange={() => handleCheck(id)}
      />
    </div>
  );
}

export default Task;
