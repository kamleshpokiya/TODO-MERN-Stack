import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import TodoApp from "./containers/TodoApp";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<TodoApp />} />
      </Routes>
    </Router>
  );
};

export default App;
