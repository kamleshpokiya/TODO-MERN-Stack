// AddTodoDialog.js (or EditTodoDialog.js)
import React, { useState, useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";

const AddTodoDialog = ({ open, onClose, onAdd, todoToEdit, onEdit }) => {
  const [title, setTitle] = useState(todoToEdit?.title || "");
  const [description, setDescription] = useState(todoToEdit?.description || "");
  console.log("todo to edit ", todoToEdit);
  useEffect(() => {
    setTitle(todoToEdit?.title || "");
    setDescription(todoToEdit?.description || "");
  }, [todoToEdit]);

  const handleAdd = () => {
    onAdd({ title, description });
  };

  const handleEdit = () => {
    console.log("I am called");
    onEdit({ ...todoToEdit, title, description });
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>{todoToEdit ? "Edit Todo" : "Add Todo"}</DialogTitle>
      <DialogContent>
        <TextField
          label="Title"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          sx={{ mt: 1 }}
        />
        <TextField
          label="Description"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          sx={{ mt: 1 }}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="secondary">
          Cancel
        </Button>
        {todoToEdit ? (
          <Button onClick={handleEdit} color="primary">
            Save Changes
          </Button>
        ) : (
          <Button onClick={handleAdd} color="primary">
            Add Todo
          </Button>
        )}
      </DialogActions>
    </Dialog>
  );
};

export default AddTodoDialog;
