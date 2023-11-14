import { Fragment, useState, useEffect } from "react";
import Header from "../../components/Header/Header";
import ToDoList from "../../components/ToDoList/ToDoList";
import Footer from "../../components/Footer/Footer";
import { useSelector } from "react-redux";
import { RootState } from "../../redux/store";

function MainPage() {
  const toDoList = useSelector((state: RootState) => state.toDo);
  const [todos, setTodos] = useState(toDoList);

  const showFilterTodos = () => {
    const sortedTodos = [...toDoList].filter((item) => {
      return item.isCompleted === true;
    });

    setTodos(sortedTodos);
  };

  const showAllTodos = () => {
    setTodos(toDoList);
  };

  useEffect(() => {
    setTodos(toDoList);
  }, [toDoList]);

  return (
    <Fragment>
      <Header />
      <ToDoList toDoList={todos} />
      <Footer filterTodos={showFilterTodos} showAllTodos={showAllTodos} />
    </Fragment>
  );
}

export default MainPage;
