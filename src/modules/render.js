import { store } from "./store";
import { TaskCard } from "../components/TaskCard";

const root = document.getElementById("app");

export const renderScreen = (layout) => {
  root.innerHTML = layout;
};

export const renderTasks = () => {
  const tasksList = document.querySelector(".tasks-list");
  if (store.state.tasks.length > 0) {
    const taskCards = store.state.tasks.map((task) => TaskCard(task)).join("");
    tasksList.innerHTML = taskCards;
  } else {
    tasksList.innerHTML = "Tasklist is empty. Create your first task, please.";
  }
};
