import {
  getTodos,
  updateTodo,
  deleteTodo,
  createTodo,
} from "../services/todoService";

export const fetchTodos = () => getTodos();

export const editTodo = (id, data) => updateTodo(id, data);

export const removeTodo = (id) => deleteTodo(id);

export const addTodo = (data) => createTodo(data);
