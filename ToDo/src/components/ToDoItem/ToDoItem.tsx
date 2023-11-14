import { useState } from "react";
import "./ToDoItem.scss";
import { Link } from "react-router-dom";
import Task from "../../types/ItemList";
import { useDispatch } from "react-redux";
import { editTask } from "../../redux/slices/toDoSlice";

type ItemProps = {
  id: string;
  title: string;
  detail: string;
  isCompleted: boolean;
  onDelete: (id: string) => void;
};

function ToDoItem({ id, title, detail, isCompleted, onDelete }: ItemProps) {

  const [state, setState] = useState<Task>({
    id,
    title,
    detail,
    isCompleted,
  });

  const dispatch = useDispatch();

  const handleComplete = () => {
    const newState = { ...state };
    newState.isCompleted = !newState.isCompleted;

    setState({ ...newState });
    dispatch(editTask(newState));
  };

  return (
    <div className={`todo-list__item todo ${state.isCompleted ? "done" : ""}`}>
      <div className='todo__content'>
        <h3 className='todo-title'>{title}</h3>
        <p className='todo__detail'>{detail}</p>
      </div>
      <div className='todo__controls'>
        <Link to={`./edit/${state.id}`} className='todo__edit todo-control'>
          <img src='./src/assets/images/edit.svg' alt='' />
        </Link>
        <button
          className='todo__delete todo-control'
          onClick={() => onDelete(state.id)}
        >
          <img src='./src/assets/images/delete.svg' alt='' />
        </button>
        <button className='todo__done todo-control' onClick={handleComplete}>
          <img src='./src/assets/images/done.svg' alt='' />
        </button>
      </div>
    </div>
  );
}

export default ToDoItem;
