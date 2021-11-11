import "./App.css";
import Header from "./components/Header";
import Form from "./components/Form";
import TodoList from "./components/TodoList";
import { useState, useEffect } from "react";

function App() {
  const initialState = JSON.parse(localStorage.getItem("todos")) || [];
  const [input, setInput] = useState("");
  const [todoList, setTodoList] = useState(initialState);
  const [editTodo, setEditTodo] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todoList));
    setIsPending(false);
  }, [todoList]);

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form
            input={input}
            setInput={setInput}
            todoList={todoList}
            setTodoList={setTodoList}
            editTodo={editTodo}
            setEditTodo={setEditTodo}
          />
        </div>

        {!isPending && (
          <TodoList
            todoList={todoList}
            setTodoList={setTodoList}
            setEditTodo={setEditTodo}
          />
        )}

        {isPending && (
          <div className="loading"> Cargando lista de tareas... </div>
        )}
      </div>
    </div>
  );
}

export default App;
