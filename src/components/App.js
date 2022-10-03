// import { useState } from 'react';
import { useEffect, useState } from 'react';
import Checkbox from './TodoList';
import Tabs from './Tabs';

function App() {
  const [todoList, setTodoList] = useState(JSON.parse(localStorage.getItem('items')) || []);
  const [field, setField] = useState('');

  const [activeTab, setActiveTab] = useState('all');

  useEffect(() => {
    localStorage.setItem('items', JSON.stringify(todoList));
  }, [todoList]);

  const handleEvent = (e) => {
    e.preventDefault();

    if (field) {
      const todo = {
        id: todoList.length + 1,
        value: field,
        completed: false,
      };

      setTodoList([...todoList, todo]);
      setField('');
    }
  };

  const setCompleteTodo = (id) => {
    setTodoList(
      todoList.map((todo) => {
        if (todo.id === id) {
          const handle = todo.completed;

          return {
            ...todo,
            completed: !handle,
          };
        }

        return todo;
      }),
    );
  };

  const deleteTodo = (todoId) => {
    const newArr = todoList.filter((todo) => todo.id !== todoId);

    setTodoList(newArr);
  };

  const deleteAllTodos = () => {
    const newArr = todoList.filter(todo => todo.completed !== true)

    setTodoList(newArr)
  }

  return (
    <div className="page">
      <div className="main">
        <h1 className="main__title">#todo</h1>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab} />

        {(activeTab === 'all' || activeTab === 'active') && (
          <form onSubmit={handleEvent} className="input-container">
            <input
              type="text"
              className="input-container__field"
              value={field}
              onChange={(e) => setField(e.target.value)}
            />
            <button type="submit" className="input-container__button">
              Add
            </button>
          </form>
        )}

        <Checkbox
          todoList={todoList}
          setCompleteTodo={setCompleteTodo}
          activeTab={activeTab}
          deleteTodo={deleteTodo}
          deleteAllTodos={deleteAllTodos}
        />
      </div>
    </div>
  );
}

export default App;
