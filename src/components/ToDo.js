const ToDo = ({toDo, checkToDo}) => {
  return (
    <li>
      <input type="checkbox" onChange={()=>checkToDo(toDo)}  defaultChecked={toDo.checked}></input>
      <label> {toDo.name}</label>
    </li>
  );
};

export default ToDo;
