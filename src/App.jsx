import { useState } from "react"
import "./styles.css"

function App(){
  const [newItem, setNewItem] = useState("")
  const [toDos, setToDos] = useState([])

  function handleSubmit (e){
    e.preventDefault() //Prevents page from refreshing

    /* id: -> It generates a unique identifier for the new item using the crypto.randomUUID() function. 
    crypto.randomUUID() -> provides random UUID (Universally Unique Identifier) generation.
    title: -> assigns the value of newItem to the title property. 
    newItem -> represents the title or content of the new todo item being added.
    completed: -> It sets the completed property to false, indicating that the new todo item is initially not completed. */
    setToDos((currentTodos) => {
      return [
        ...currentTodos, //Spreads elements of the currentTodos array into the new array (creates a copy of existing currentTodos array)
        {id: crypto.randomUUID(), title: newItem, completed: // adds a new object to the array. It has three properties:
        false},
      ]
    })
    setNewItem("") // clears out what you have when you add new item
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
      <form onSubmit={handleSubmit} className="new-item-form">
        <div className="form-row">
          <label htmlFor="item">New Item</label> {/* Linking label to input */}
          <input 
            value={newItem} 
            onChange={e => setNewItem(e.target.value)} 
            type="text" 
            id="item" 
          />
        </div>
        <button className="btn">Add</button>
      </form>
      <h1 className="header">Todo List</h1>
      <ul className="list">
        {toDos.length === 0 && "No Items"} {/* Short cirrcuting -> when ever left side is true run right side*/}
        {toDos.map(todo => {
          return ( 
            <li key={todo.id}>
              {/*     ^each todo must have its own ID in order to keep track of the different items*/}
              <label>
                <input type="checkbox" checked={todo.completed}
                onChange={e => toggleTodo(todo.id, e.target.checked)}/> {/* checks if item is checked */}
                {todo.title}
              </label>
              <button className="btn btn-danger" onClick={() => deleteTodo(todo.id)}>Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App