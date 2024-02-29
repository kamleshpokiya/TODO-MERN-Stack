// TodoApp.js
import React, { useState, useEffect } from "react";
import { Container, Typography, Button, Box, Paper } from "@mui/material";
import TodoList from "../components/TodoList";
import TodoDialog from "../components/TodoDialog";
import AddTodoDialog from "../components/AddTodoDialog"; // Import the new component
import { fetchTodos, editTodo, removeTodo, addTodo } from "../api/todoApi";

const TodoApp = () => {
  const [todos, setTodos] = useState([]);
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [currentTodo, setCurrentTodo] = useState("");
  const [selectedTodoId, setSelectedTodoId] = useState("");

  useEffect(() => {
    fetchTodos().then((data) => setTodos(data));
  }, []);

  const handleOpenEditDialog = (todo) => {
    console.log("text ", todo);
    // setSelectedTodoId(id);
    setCurrentTodo(todo);
    setOpenEditDialog(true);
  };

  const handleCloseEditDialog = () => {
    setSelectedTodoId("");
    setCurrentTodo("");
    setOpenEditDialog(false);
  };

  const handleUpdateTodo = (todo) => {
    editTodo(todo._id, {
      title: todo.title,
      description: todo.description,
    }).then((updatedTodo) => {
      setTodos((prevTodos) =>
        prevTodos.map((todo) =>
          todo._id === updatedTodo._id ? updatedTodo : todo
        )
      );
      handleCloseEditDialog();
    });
  };

  const handleDeleteTodo = (id) => {
    removeTodo(id).then(() => {
      setTodos((prevTodos) => prevTodos.filter((todo) => todo._id !== id));
    });
  };

  const handleOpenAddDialog = () => {
    setOpenAddDialog(true);
  };

  const handleCloseAddDialog = () => {
    setOpenAddDialog(false);
  };

  const handleAddTodo = (newTodo) => {
    addTodo(newTodo).then((addedTodo) => {
      setTodos((prevTodos) => [...prevTodos, addedTodo]);
      handleCloseAddDialog();
    });
  };

  return (
    <Container maxWidth={false}>
      <Typography variant="h3" align="center" gutterBottom>
        Todo App
      </Typography>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          width: "100%",
        }}
      >
        <Button
          variant="contained"
          color="primary"
          onClick={handleOpenAddDialog}
        >
          Add Todo
        </Button>

        <Paper sx={{ mt: 4 }}>
          <TodoList
            todos={todos}
            onEdit={handleOpenEditDialog}
            onDelete={handleDeleteTodo}
          />
        </Paper>
      </Box>
      {/* <TodoDialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        currentTodo={currentTodo}
        onInputChange={setCurrentTodo}
        onUpdate={handleUpdateTodo}
      /> */}
      <AddTodoDialog
        open={openEditDialog}
        onClose={handleCloseEditDialog}
        todoToEdit={currentTodo}
        onEdit={handleUpdateTodo}
      />
      <AddTodoDialog
        open={openAddDialog}
        onClose={handleCloseAddDialog}
        onAdd={handleAddTodo}
      />
    </Container>
  );
};

export default TodoApp;
