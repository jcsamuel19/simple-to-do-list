import { useState } from "react"

export function NewtodoForm({onSubmit}){
    const [newItem, setNewItem] = useState("")

    function handleSubmit (e){
        e.preventDefault() //Prevents page from refreshing
        onSubmit(newItem)
        setNewItem("") // clears out what you have when you add new item
      }


    return (
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
    )
}