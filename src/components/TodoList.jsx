// TodoList.js
import React from "react";

import TodoItem from "./TodoItem";
import { List } from "@mui/material";

const TodoList = ({ todos, onEdit, onDelete }) => {
  return (
    <List>
      {todos.map((todo) => (
        <TodoItem
          key={todo._id}
          todo={todo}
          onEdit={onEdit}
          onDelete={onDelete}
        />
      ))}
    </List>
  );
};

export default TodoList;
