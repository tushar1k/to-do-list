import React from 'react';
import { TodoItem } from './TodoItem';

export function TodoList(props) {
  const { todos, toggleTodo, deleteTodo } = props;

  return (
    <ul className="list">
      {todos.length === 0 && 'No Todos'}
      {todos.map((todo) => {
        return (
          <TodoItem
            // {...todo}
            id={todo.id}
            completed={todo.completed}
            title={todo.title}
            
            key={todo.id}
            toggleTodo={toggleTodo}
            deleteTodo={deleteTodo}
          />
        );
      })}
    </ul>
  );
}
