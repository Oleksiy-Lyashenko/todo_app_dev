// import { useState } from 'react';
import { useState } from 'react';
import Checkbox from './Checkbox';
import Tabs from './Tabs';

function App() {
  const [todoList, setTodoList] = useState([]);
  const [field, setField] = useState('');

  const [activeTab, setActiveTab] = useState('all');

  const addTodo = () => {
    if (field) {
      const todo = {
        id: todoList.length + 1,
        value: field,
        completed: false
      };

      setTodoList([...todoList, todo]);
      setField('');
    }
  };

  const setCompleteTodo = (id) => {
    const newTodoList = todoList.filter(todo => todo.id !== id);
    const changedTodo = todoList.find(todo => todo.id === id);
    changedTodo.completed = !changedTodo.completed; 

    setTodoList([...newTodoList, changedTodo])
  }

  return (
    <div className="page">
      <div className="main">
        <h1 className="main__title">#todo</h1>

        <Tabs activeTab={activeTab} setActiveTab={setActiveTab}/>

        <div className="input-container">
          <input
            type="text"
            className="input-container__field"
            value={field}
            onChange={(e) => setField(e.target.value)}
          />
          <button className="input-container__button" onClick={addTodo}>
            Add
          </button>
        </div>

        <Checkbox todoList={todoList} setCompleteTodo={setCompleteTodo} activeTab={activeTab}/>
      </div>
    </div>
  );
}

export default App;
