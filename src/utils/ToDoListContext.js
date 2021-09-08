import React, { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const ToDoListContext = createContext();

export const useToDoListContext = () => useContext(ToDoListContext);

export const ToDoListProvider = ({ children }) => {
  const [toDoListState, setToDoListState] = useState([
    { id: uuidv4(), name: "cook", checked: true },
    { id: uuidv4(), name: "play", checked: false },
    { id: uuidv4(), name: "3r Thing", checked: true },
  ]);

  useEffect(() => {
    if (localStorage.getItem("toDoList")) {
      setToDoListState(JSON.parse(localStorage.getItem("toDoList")));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("toDoList", JSON.stringify(toDoListState));
  }, [toDoListState]);

  const checkToDo = (todo) => {
    const newTodoListState = [...toDoListState];
    newTodoListState.forEach((newTodo, index) => {
      if (newTodo.id === todo.id) {
        newTodoListState[index].checked = !newTodoListState[index].checked;
      }
    });
    console.log(toDoListState);
  };

  const addToDo = (todo) => {
    const newTodoListState = [...toDoListState];
    newTodoListState.push({ id: uuidv4(), name: todo, checked: false });
    setToDoListState(newTodoListState);
  };

  const clearList = () => {
    const newTodoListState = [...toDoListState].filter((todo) => {
      console.log(todo.checked);
      return todo.checked === false;
    });
    setToDoListState(newTodoListState);
    console.log("newtodolisClear:", toDoListState);
  };

  return (
    <ToDoListContext.Provider
      value={{ toDoListState, checkToDo, addToDo, clearList }}
    >
      {children}
    </ToDoListContext.Provider>
  );
};
