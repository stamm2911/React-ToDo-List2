import { useState } from "react";
import ToDo from "./ToDo";
import { useToDoListContext } from "../utils/ToDoListContext";

const ToDoList = () => {
  const {toDoListState, checkToDo} = useToDoListContext();
  console.log(toDoListState)
 
  return (
    <div>
      <ul>
        {toDoListState?
            toDoListState.map((todo) => {
          return <ToDo key={todo.id} toDo={todo} checkToDo={checkToDo}/>;
        }):'no todos'}
      </ul>
    </div>
  );
};

export default ToDoList;
