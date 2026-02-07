import "../css/style.css";
import { TasksScreen } from "../components/TasksScreen";

const root = document.getElementById("app");

const app = {
  render(container) {
    container.innerHTML = TasksScreen();
  },
};

const actions = {
  "add-new-task-btn": () => {
    const modal = document.querySelector(
      "[data-action='add-new-task-btn-modal']",
    );
    modal.showModal();
  },
};

document.addEventListener("click", (e) => {
  const target = e.target.closest("[data-action]");
  if (!target) return;
  const action = target.dataset.action;

  actions[action]();
});

window.addEventListener("hashchange", app.render(root));
window.addEventListener("load", app.render(root));
