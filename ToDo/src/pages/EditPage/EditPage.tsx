import { useLocation } from "react-router-dom";
import Form from "../../components/Form/Form";
import PageHeader from "../../components/PageHeader/PageHeader";
import "./EditPage.scss";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import Task from "../../types/ItemList";

function EditPage() {
  const id = useLocation().pathname.split("/").pop();

  const toDoList = useSelector((state: RootState) => state.toDo);

  let toDoForEdit: Task | Record<string, never> = {};
  if (id) {
    toDoForEdit = toDoList.filter((todo) => todo.id === id)[0];
  }

  return (
    <div className='edit-page'>
      <PageHeader title='Edit task' />
      <Form formClassName='edit' sourcePage='edit-page' task={toDoForEdit} />
    </div>
  );
}

export default EditPage;
