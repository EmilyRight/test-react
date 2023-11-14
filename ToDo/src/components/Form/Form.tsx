import { Fragment, useState } from "react";
import Button from "../Button/Button";
import "./Form.scss";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";
import Task from "../../types/ItemList";
import { useDispatch } from "react-redux";
import { addTask, editTask } from "../../redux/slices/toDoSlice";

type FormProps = {
  formClassName: string;
  sourcePage: string;
  task?: Task | Record<string, never>;
};

function Form({ formClassName, sourcePage, task }: FormProps) {
  const [formData, setFormData] = useState({
    title: task?.title || "",
    detail: task?.detail || "",
    isCompleted: false,
  });

  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleCancel = () => {
    navigate("/");
  };

  const handleEdit = () => {
    if (task) {
      const newTask = { id: task.id, ...formData };
      dispatch(editTask(newTask));
      navigate("/");
    }
  };

  const handleAdd = () => {
    const newTask = { id: uuidv4(), ...formData };
    if (formData.title.length > 0 && formData.detail.length > 0) {
      dispatch(addTask(newTask));
      navigate("/");
    } else {
      setError("error");
    }
  };

  const handleFieldChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    if (name.length > 0 || value.length > 0) {
      setError("");
      setFormData({ ...formData, [name]: value });
    }
  };

  return (
    <Fragment>
      <form
        action=''
        className={`${sourcePage}__form ${formClassName}-form form`}
      >
        <input
          type='text'
          className={`form__input form-input ${error}`}
          id={`${formClassName}-title`}
          name='title'
          placeholder='Title*'
          onChange={handleFieldChange}
          required
          value={formData.title}
        />

        <input
          type='text'
          className={`form__input form-input  ${error}`}
          id={`${formClassName}-detail`}
          name='detail'
          placeholder='Detail*'
          onChange={handleFieldChange}
          required
          value={formData.detail}
        />
      </form>
      <div className={`${sourcePage}__buttons form__buttons`}>
        {formClassName === "edit" ? (
          <>
            <Button action={handleEdit} text='Update' type='submit' />
            <Button action={handleCancel} text='Cancel' type='button' />
          </>
        ) : (
          <Button action={handleAdd} text='Add' type='submit' />
        )}
      </div>
    </Fragment>
  );
}

export default Form;
