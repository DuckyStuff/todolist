import { useState } from "react";

function TodoInput(props)
{

  const {handleAddTodos, todoValue, setTodoValue} = props;

  function handleOnClick(todoValue)
  {
    handleAddTodos(todoValue);
    setTodoValue("");
  }

  return (
    <header>
      <input 
      value={todoValue} 
      onChange={(e) => {setTodoValue(e.target.value)}} 
      placeholder="Enter todo..." 
      />

      <button onClick={() => {handleOnClick(todoValue)}}>
        Add
      </button>
    </header>
  )
}

export default TodoInput;