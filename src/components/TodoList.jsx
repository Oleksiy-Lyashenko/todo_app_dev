import React, { useEffect, useState } from 'react';
import TodoItem from './TodoItem';
import deleteImg from './assets/delete.svg';

const Checkbox = React.memo(
  ({ todoList, setCompleteTodo, activeTab, deleteTodo, deleteAllTodos }) => {
    const [filterArr, setFilterArr] = useState([todoList]);

    useEffect(() => {
      switch (activeTab) {
        case 'active':
          return setFilterArr([...todoList.filter((todo) => todo.completed === false)]);
        case 'completed':
          return setFilterArr([...todoList.filter((todo) => todo.completed === true)]);
        case 'all':
          return setFilterArr(todoList);
        default:
          return 0;
      }
    }, [todoList, activeTab]);

    return (
      <div className="checkbox">
        <ul className="checkbox__field">
          {filterArr.length > 0 &&
            filterArr.map((todo) => (
              <TodoItem
                todo={todo}
                setCompleteTodo={setCompleteTodo}
                key={`${todo.id}_${todo.value}`}
                activeTab={activeTab}
                deleteTodo={deleteTodo}
              />
            ))}
        </ul>

        {(activeTab === 'completed' && filterArr.length > 0) && (
          <button className="checkbox__button" onClick={deleteAllTodos}>
            <img src={deleteImg} alt="" className="checkbox__button--img" />
            delete all
          </button>
        )}

        {filterArr.length === 0 && (
          <div className="">
            not todos
          </div>
        )}
      </div>
    );
  },
);

export default Checkbox;
