import React, { useEffect, useMemo, useState } from 'react';

export default function Checkbox({ todoList, setCompleteTodo, activeTab }) {
  const [filterArr, setFilterArr] = useState([]);

  useMemo(() => {
    if (activeTab === 'active') {
      const newArr = todoList.filter((todo) => todo.completed === false);

      setFilterArr([...newArr]);
    } else if (activeTab === 'completed') {
      const newArr = todoList.filter((todo) => todo.completed === true);

      setFilterArr([...newArr]);
    } else {
      setFilterArr([...todoList]);
    }

  }, [todoList, activeTab]);

  console.log(filterArr);

  return (
    <div className="checkbox">
      {filterArr.length > 0 &&
        todoList.map((todo) => (
          <form className="checkbox__box" key={todo.id} onClick={() => setCompleteTodo(todo.id)}>
            <input type="checkbox" className="checkbox__type" id="checkbox" />
            <label htmlFor="checkbox" className="checkbox__title">
              {todo.value}
            </label>
          </form>
        ))}
    </div>
  );
}
