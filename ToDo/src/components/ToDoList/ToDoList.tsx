import "./ToDoList.scss";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";

import ToDoItem from "../ToDoItem/ToDoItem";
import Button from "../Button/Button";

import { deleteTask } from "../../redux/slices/toDoSlice";

import Task from "../../types/ItemList";

type toDoListProps = {
  toDoList: Task[];
};
const ToDoList = ({ toDoList }: toDoListProps) => {
  const dispatch = useDispatch();

  const navigate = useNavigate();

  const openAddPage = () => {
    navigate("/add");
  };

  const handleDelete = (id: string) => {
    dispatch(deleteTask(id));
  };

  return (
    <>
      <main className='todo-main'>
        {toDoList.length > 0 ? (
          <>
            <div className='todo-main__list todo-list'>
              {toDoList.map(({ ...item }) => (
                <ToDoItem key={item.id} onDelete={handleDelete} {...item} />
              ))}
            </div>
            <Link to={"./add"} className='todo-main__add-btn'>
              +
            </Link>
          </>
        ) : (
          <>
            <div className='todo-main__new-task new-task'>
              <div className='new-task__text'>Add first task</div>
              <Button
                type='button'
                text='Add'
                action={openAddPage}
                className='new-task__add-btn'
              />
            </div>
          </>
        )}
      </main>
    </>
  );
};

export default ToDoList;
