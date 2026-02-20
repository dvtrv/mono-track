import { store } from "./store";
import { TaskCard } from "../components/TaskCard";

const root = document.getElementById("app");

export const renderScreen = (layout) => {
  root.innerHTML = layout;
};

export const renderTasks = () => {
  const tasksList = document.querySelector(".tasks-list");
  const taskCards = store.tasks.map((task) => TaskCard(task)).join("");
  tasksList.innerHTML = taskCards;
};
