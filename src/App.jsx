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
        {toDos.map(toDo => {
          return ( // each todo must have its own ID
            <li key={todo.id}> 
              <label>
                <input type="checkbox" checked={toDo.completed}/>
                {toDo.title}
              </label>
              <button className="btn btn-danger">Delete</button>
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default App