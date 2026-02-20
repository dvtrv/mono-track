import "../css/style.css";
import { Button } from "../components/Button";
import { Modal } from "../components/Modal";
import { Input } from "../components/Input";
import { Textarea } from "../components/Textarea";

export const createNewTaskModal = () => {
  const titleInput = Input({
    legend: "Title",
    action: "new-task-title",
  });

  const descTextarea = Textarea({
    legend: "Description",
    action: "new-task-desc",
  });

  const createButton = Button({
    text: "Create",
    className: "btn-primary",
    action: "create-new-task-btn",
  });

  return Modal({
    header: "New task",
    action: "task-modal",
    slot: [titleInput, descTextarea, createButton],
  });
};

export const taskCardModal = (taskData) => {
  const titleInput = Input({
    // legend: "Title",
    action: "task-title",
    className: "input-ghost text-lg font-bold hover:border-slate-700",
  });

  const descTextarea = Textarea({
    legend: "Description",
    action: "task-description",
    className: "textarea-ghost font-thin hover:border-slate-700",
  });

  const deleteBtn = Button({
    text: "Delete",
    className: "btn-soft btn-error",
    action: "delete-current-task",
  });

  return Modal({
    action: "task-modal",
    slot: [titleInput, descTextarea, deleteBtn],
  });
};

export const openModal = (modalHtml) => {
  const root = document.getElementById("app");
  root.insertAdjacentHTML("beforeend", modalHtml);
  const modal = root.lastElementChild;
  modal.showModal();

  const backdrop = modal.querySelector(".modal-backdrop");
  if (backdrop) {
    backdrop.addEventListener("click", () => {
      closeModal("task-modal");
    });
  }
};

export const closeModal = (modalAction) => {
  const modal = document.querySelector(`[data-action="${modalAction}"]`);
  if (modal) {
    modal.close();
    modal.remove();
  }
};
