import ToDoList from "./components/ToDoList";
import Form from "./components/Form";
import { ToDoListProvider } from "./utils/ToDoListContext";

function App() {
  return (
    <div className="App">
      <article className="App">
        <h1 id="tittle">To Do List:</h1>
        <ToDoListProvider>
          <ToDoList />
          <Form />
        </ToDoListProvider>
      </article>
    </div>
  );
}

export default App;
