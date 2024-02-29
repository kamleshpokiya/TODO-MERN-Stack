// todoService.js
import { apiGet, apiPut, apiDelete, apiPost } from "../utils/apiUtils";

const BASE_URL = "http://localhost:5000/api/todos";

export const getTodos = () => apiGet(BASE_URL);

export const updateTodo = (id, data) => apiPut(`${BASE_URL}/${id}`, data);

export const deleteTodo = (id) => apiDelete(`${BASE_URL}/${id}`);

export const createTodo = (data) => apiPost(BASE_URL, data);
