import React, { useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const Form = (props) => {
  const { input, setInput, todoList, setTodoList, editTodo, setEditTodo } =
    props;

  const handleInputChange = (event) => {
    setInput(event.target.value);
  };

  const updateTodo = (title, id, completed) => {
    const updatedTodoList = todoList.map((todo) => {
      return todo.id === id ? { title, id, completed } : todo;
    });
    setTodoList(updatedTodoList);
    setEditTodo("");
  };

  const handleAdd = (event) => {
    event.preventDefault();
    if (input !== "") {
      if (!editTodo) {
        setTodoList([
          ...todoList,
          {
            id: uuidv4(),
            title: input,
            completed: false,
          },
        ]);
      } else {
        updateTodo(input, editTodo.id, editTodo.completed);
      }

      setInput("");
    } else {
      alert("Debe ingresar una tarea");
    }
  };
  useEffect(() => {
    if (editTodo) {
      setInput(editTodo.title);
    } else {
      setInput("");
    }
  }, [editTodo, setInput]);
  return (
    <div>
      <form onSubmit={handleAdd}>
        <input
          type="text"
          placeholder="Enter a todo..."
          className="task-input"
          value={input}
          onChange={handleInputChange}
        />
        <button className="button-add" type="submit">
          {editTodo ? "Ok" : "Agregar"}
        </button>
      </form>
    </div>
  );
};

export default Form;
