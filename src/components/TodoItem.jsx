import deleteImg from './assets/delete.svg';

export default function TodoItem({todo, setCompleteTodo, activeTab, deleteTodo}) {
  return (
    <li className="checkbox__box" key={`${todo.id}_${todo.value}`}>
      <div className="checkbox__left">
        <input
          type="checkbox"
          className="checkbox__type"
          id="checkbox"
          onClick={() => setCompleteTodo(todo.id)}
          checked={todo.completed}
        />
        <label htmlFor="checkbox" className="checkbox__title">
          {todo.value}
        </label>
      </div>
      {activeTab === 'completed' && <img src={deleteImg} alt="" className="checkbox__delete" onClick={() => deleteTodo(todo.id)}/>}
    </li>
  );
}
