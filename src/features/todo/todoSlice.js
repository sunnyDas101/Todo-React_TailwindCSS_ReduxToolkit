import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  todos: JSON.parse(localStorage.getItem("todos")) || [],
  formData: {
    taskTitle: "",
    taskDesc: "",
    taskDate: "",
  },
};

export const todoSlice = createSlice({
  name: "todo",
  initialState,
  reducers: {
    addTaskItem: (state, action) => {
      state.todos.push(action.payload);
    },
    removeTaskItem: (state, action) => {
      state.todos = state.todos.filter((task) => task.id !== action.payload);
    },
    toggleTaskCompletion: (state, action) => {
      const task = state.todos.find((task) => task.id === action.payload);
      if (task) {
        task.completed = !task.completed; 
      }
    },
    updateFormData: (state, action) => {
      state.formData = { ...state.formData, ...action.payload };
    },
    clearFormData: (state) => {
      state.formData = initialState.formData;
    },
  },
});

export const { addTaskItem, removeTaskItem, updateFormData, clearFormData, toggleTaskCompletion } =
  todoSlice.actions;

export const saveToLocalStorage = () => (dispatch, getState) => {
  const { todos } = getState().todo;
  localStorage.setItem("todos", JSON.stringify(todos));
};

export default todoSlice.reducer;
