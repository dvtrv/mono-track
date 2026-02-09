import "../css/style.css";
import { store } from "./store";
import { TasksScreen } from "../components/TasksScreen";
import { TaskCard } from "../components/TaskCard";

const render = () => {
  const root = document.getElementById("app");
  root.innerHTML = TasksScreen();
};

const renderTasks = () => {
  const tasksList = document.querySelector(".tasks-list");
  const cardsTasks = store.tasks
    .map((task) =>
      TaskCard({
        id: task.id,
        title: task.title,
      }),
    )
    .join("");
  tasksList.innerHTML = cardsTasks;
};

const init = () => {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (!target) return;

    const action = target.dataset.action;

    if (typeof actions[action] === "function") {
      actions[action]();
    }
  });
  window.addEventListener("load", render);
  window.addEventListener("load", renderTasks);
};

const actions = {
  "add-new-task-btn": () => {
    const modal = document.querySelector(
      "[data-action='add-new-task-btn-modal']",
    );
    modal.showModal();
  },
  "create-new-task-btn": () => {
    const modal = document.querySelector(
      "[data-action='add-new-task-btn-modal']",
    );
    const input = document.querySelector("[data-action='new-task-title']");
    const textarea = document.querySelector(
      "[data-action='new-task-description']",
    );
    store.addTask({ title: input.value, description: textarea.value });
    modal.close();
    renderTasks();
  },
};

init();
