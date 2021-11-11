import React from "react";
const TodoList = (props) => {
  const { todoList, setTodoList, setEditTodo } = props;

  const handleDelete = (id) => {
    setTodoList(todoList.filter((todo) => todo.id !== id));
  };

  const handleCompleted = (todo) => {
    const updateTodo = todoList.map((item) => {
      let updateItem = item;
      if (item.id === todo.id) {
        updateItem = {
          ...item,
          completed: !item.completed,
        };
      }
      return updateItem;
    });
    setTodoList(updateTodo);
    console.log(updateTodo);
  };

  const handleEdit = (id) => {
    const findTodo = todoList.find((todo) => todo.id === id);
    setEditTodo(findTodo);
  };

  return (
    <div>
      <ul>
        {todoList.map((item) => (
          <li key={item.id} className="list-item">
            <input
              type="text"
              value={item.title}
              className={`list ${item.completed ? "complete" : ""}`}
              onChange={(event) => event.preventDefault()}
            />
            <div>
              <button
                className="button-complete task-button"
                onClick={() => handleCompleted(item)}
              >
                <i className="fa fa-check-circle"></i>
              </button>
              <button
                className="button-edit task-button"
                onClick={() => handleEdit(item.id)}
              >
                <i className="fa fa-edit"></i>
              </button>
              <button
                className="button-delete task-button"
                onClick={() => handleDelete(item.id)}
              >
                <i className="fa fa-trash"></i>
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TodoList;
