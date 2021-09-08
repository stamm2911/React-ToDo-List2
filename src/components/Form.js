import { useRef } from "react";
import { useToDoListContext } from "../utils/ToDoListContext";

const Form = () => {
  const { toDoListState, addToDo, clearList } = useToDoListContext();
  const toDoRef = useRef();

  const resetInput = ()=>{
    if(toDoRef.current.value){
      addToDo(toDoRef.current.value)
      toDoRef.current.value = ''
    }
    
  }

  return (
    <div className="App">
      <input type="text" placeholder="To do..." ref={toDoRef}></input>
      <br />
      <button onClick={()=>resetInput()}>Add To Do</button>
      <button onClick={()=>clearList()}>Clear</button>
    </div>
  );
};

export default Form;
