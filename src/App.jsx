import TodoInput from "./componenets/TodoInput"
import TodoList from "./componenets/TodoList"
import { useState, useEffect } from "react";

function App() 
{
  const [todos, setTodos] = useState([]);
  const [todoValue, setTodoValue] = useState("");

  function persistData(newList)
  {
    localStorage.setItem('todos', JSON.stringify({ todos: newList}))
  }

  function handleAddTodos(newTodo)
  {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList);
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index)
  {
    const newTodoList = todos.filter((todo, todoIndex) => {
      if (todoIndex !== index)
      {
        return todo;
      }
      localTodos = JSON.parse(localTodos).todos;
    })

    setTodos(newTodoList)
  }

  function handleEditTodo(index)
  {
    const valueToBeEdited = todos[index];
    setTodoValue(valueToBeEdited);
    handleDeleteTodo(index);
  }

  // Empty array runs on page load
  useEffect(() => {
    if (!localStorage)
    {
      return;
    }

    let localTodos = localStorage.getItem('todos');
    if (!localTodos) 
    {
      return;
    }

    localTodos = JSON.parse(localTodos).todos;
    setTodos(localTodos);


  }, [])

  return (
    <>
      <TodoInput todoValue={todoValue} setTodoValue={setTodoValue} handleAddTodos={handleAddTodos}/>
      <TodoList handleDeleteTodo={handleDeleteTodo} todos={todos} handleEditTodo={handleEditTodo} />
    </>
  )
}

export default App
