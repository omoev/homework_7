import { useState } from 'react';
import ToDo from './ToDo.js';
import ToDoForm from './ToDoForm';

function App() {
  // Состояние списка задач
  const [todos, setTodos] = useState([]);

  // Добавление задачи
  const addTask = (userInput) => {
    if (userInput) {
      const newItem = {
        id: Math.random().toString(36).substr(2, 9),
        task: userInput,
        complete: false
      };
      setTodos([...todos, newItem]);
    }
  };

  // Удаление задачи
  const removeTask = (id) => {
    setTodos([...todos.filter((todo) => todo.id !== id)]);
  };

  // Переключение задачи
  const toggleTask = (id) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === id ? { ...todo, complete: !todo.complete } : todo
      )
    );
  };

  return (
    <div className="App">
      <header>
        <h1>Список задач: {todos.length}</h1>
      </header>
      <ToDoForm addTask={addTask} />
      {todos.map((todo) => (
        <ToDo
          todo={todo}
          key={todo.id}
          toggleTask={toggleTask}
          removeTask={removeTask}
        />
      ))}
    </div>
  );
}

export default App;
