import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import Task from "../../types/ItemList";

const todos: Task[] | null = JSON.parse(localStorage.getItem("todos") || "[]");
const initialState: Task[] | [] = todos || [];

export const toDoSlice = createSlice({
  name: "ToDo",
  initialState,
  reducers: {
    addTask: (state, action: PayloadAction<Task>) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.push(action.payload);
      localStorage.setItem("todos", JSON.stringify(state));
    },

    deleteTask: (state, action: PayloadAction<string>) => {
      const todos: Task[] | null = JSON.parse(
        localStorage.getItem("todos") || "{}"
      );
      localStorage.setItem(
        "todos",
        JSON.stringify(
          todos?.filter((task) => {
            return task.id !== action.payload;
          })
        )
      );

      return state.filter((task) => {
        return task.id !== action.payload;
      });
    },

    editTask: (state, action: PayloadAction<Task>) => {
      const { id } = action.payload;
      const taskIndex = state.findIndex((el) => el.id === id);
      state.splice(taskIndex, 1, action.payload);
      localStorage.setItem(
        "todos",
        JSON.stringify(
          state.sort((a, b) => Number(b.isCompleted) - Number(a.isCompleted))
        )
      );
      console.log("====================================");
      console.log("edit");
      console.log("====================================");
      return state.sort(
        (a, b) => Number(b.isCompleted) - Number(a.isCompleted)
      );
    },

    showCompletedTasks: (state) => {
      return state.filter((task) => task.isCompleted === true);
    },
    getTasks: (state) => {
      return state;
    },
  },
});

// Action creators are generated for each case reducer function
export const { addTask, deleteTask, editTask, showCompletedTasks, getTasks } =
  toDoSlice.actions;

export default toDoSlice.reducer;
