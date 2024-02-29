import React from "react";
import DeleteIcon from "@mui/icons-material/Delete";
import EditIcon from "@mui/icons-material/Edit";
import {
  IconButton,
  ListItem,
  ListItemSecondaryAction,
  ListItemText,
} from "@mui/material";

const TodoItem = ({ todo, onEdit, onDelete }) => {
  const handleEdit = () => {
    console.log("todo ", todo);
    onEdit(todo);
  };

  const handleDelete = () => {
    onDelete(todo._id); // Assuming each todo has a unique ID
  };

  return (
    <ListItem key={todo._id}>
      <ListItemText primary={todo.title} secondary={todo.description} />
      <ListItemSecondaryAction>
        <IconButton
          edge="end"
          aria-label="edit"
          onClick={handleEdit}
          color="success"
        >
          <EditIcon />
        </IconButton>
        <IconButton
          edge="end"
          aria-label="delete"
          onClick={handleDelete}
          color="error"
        >
          <DeleteIcon />
        </IconButton>
      </ListItemSecondaryAction>
    </ListItem>
  );
};

export default TodoItem;
