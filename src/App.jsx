import { useEffect } from "react"
import { useState } from "react"
import { NewtodoForm } from "./NewTodoForm"
import "./styles.css"
import { TodoList } from "./TodoList"

function App(){
  const [todos, setToDos] = useState(() => {
    const localValue = localStorage.getItem("ITEMS") // get information from local storage
    if(localValue == null) // if does not exist
      return []
    return JSON.parse(localValue) 
  })

  /* Save values of my todos in local storage */
  useEffect(() => { 
    localStorage.setItem("ITEMS", JSON.stringify(todos))
  }, [todos]) 

  function addTodo(title){
    /* id: -> It generates a unique identifier for the new item using the crypto.randomUUID() function. 
        crypto.randomUUID() -> provides random UUID (Universally Unique Identifier) generation.
        title -> assigns the value of newItem to the title property. 
        newItem -> represents the title or content of the new todo item being added.
        completed: -> It sets the completed property to false, indicating that the new todo item is initially not completed. */
    setToDos((currentTodos) => {
      return [
        ...currentTodos, //Spreads elements of the currentTodos array into the new array (creates a copy of existing currentTodos array)
        {id: crypto.randomUUID(), title, completed: false}, // adds a new object to the array. It has three properties:
        
      ]
    })
  }

  /* */
  function toggleTodo(id,completed){
    setToDos(currentTodos => {
      return currentTodos.map(todo => {
        if(todo.id === id) {
          return {...todo, completed} //changing state is creating a brand new state object
        }
        return todo
      })
    })
  }
  
  function deleteTodo(id){
    setToDos(currentTodos => {
      return currentTodos.filter(todo => todo.id != id)
    })
  }
  return (
    <>
      <NewtodoForm onSubmit={addTodo}/>
      <h1 className="header">Todo List</h1>
      <TodoList todos={todos} toggleTodo={toggleTodo} deleteTodo={deleteTodo}/>
    </>
  )
}

export default App