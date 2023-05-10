import { TodoItem } from "./TodoItem";

export function TodoList({ todos, toggleTodo, deleteTodo }) {
  return (
    <ul className="list">
      {todos.length === 0 && "No Items"}{" "}
      {/* Short cirrcuting -> when ever left side is true run right side*/}
      {todos.map((todo) => {
        return (
          <TodoItem
            
            completed={todo.completed}
            id={todo.id}
            title={todo.title}
            // or {...todo} this passes all the todos
            
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
