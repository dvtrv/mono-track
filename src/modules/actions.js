import "../css/style.css";
import { store } from "./store";
import * as render from "./render";
import * as modals from "./modals";

export const getEventTarget = () => {
  document.addEventListener("click", (e) => {
    const target = e.target.closest("[data-action]");
    if (!target) return;
    const dataAction = target.dataset.action;
    const dataId = target.dataset.id;
    targetAction(dataAction, dataId);
  });
};

const targetAction = (dataAction, dataId) => {
  switch (dataAction) {
    case "add-new-task":
      handleAddNewTask();
      break;
    case "create-new-task-btn":
      handleCreateNewTask();
      break;
    case "close-button":
      handleCloseModalBtn();
      break;
    case "open-task-card":
      openTaskCard(dataId);
      break;
    case "delete-current-task":
      handleDeleteTaskBtn();
      break;
  }
};

const openTaskCard = (dataId) => {
  store.state.currentTaskId = dataId;
  const taskData = store.getTaskById(store.state.currentTaskId);

  modals.closeModal("task-modal");

  const modal = modals.taskCardModal(taskData);
  modals.openModal(modal);

  const input = document.querySelector(`[data-action="task-title"]`);
  const textarea = document.querySelector(`[data-action="task-description"]`);

  input.value = taskData.title;
  textarea.value = taskData.description;

  input.addEventListener("blur", () => updateFieldValue(input, textarea));
  textarea.addEventListener("blur", () => updateFieldValue(input, textarea));
};

const handleCreateNewTask = () => {
  const inputField = document.querySelector(`[data-action="new-task-title"]`);
  const textareaField = document.querySelector(`[data-action="new-task-desc"]`);
  const inputValue = inputField.value.trim();
  const textareaValue = textareaField.value.trim();

  if (inputValue.length <= 0) {
    validateField(inputField);
    return;
  }

  const taskData = {
    title: inputValue,
    description: textareaValue,
  };

  store.createTask(taskData);
  modals.closeModal("task-modal");
  render.renderTasks();
  return;
};

const handleAddNewTask = () => {
  const modal = modals.createNewTaskModal();
  modals.openModal(modal);
};

const handleCloseModalBtn = () => {
  modals.closeModal("task-modal");
};

const updateFieldValue = (inputElem, textareaElem) => {
  const changes = store.updateTask(inputElem.value, textareaElem.value);
  render.renderTasks();

  if (changes.title) {
    inputElem.classList.add(
      "border-primary",
      "transition",
      "duration-600",
      "ease-in-out",
    );
    setTimeout(() => {
      inputElem.classList.remove("border-primary");
      setTimeout(() => {
        inputElem.classList.remove(
          "border-primary",
          "transition",
          "duration-600",
          "ease-in-out",
        );
      }, 600);
    }, 600);
  }

  if (changes.description) {
    textareaElem.classList.add(
      "border-primary",
      "transition",
      "duration-600",
      "ease-in-out",
    );
    setTimeout(() => {
      textareaElem.classList.remove("border-primary");
      setTimeout(() => {
        textareaElem.classList.remove(
          "border-primary",
          "transition",
          "duration-600",
          "ease-in-out",
        );
      }, 600);
    }, 600);
  }
};

const validateField = (validatedItem) => {
  validatedItem.focus();
  validatedItem.classList.add("input-error");

  const labelElement = validatedItem.nextElementSibling;
  labelElement.textContent = "This field must be filled in";
  labelElement.classList.add("text-error");
  labelElement.classList.remove("hidden");

  const handleFocus = () => {
    validatedItem.addEventListener("focus", () => {
      validatedItem.classList.remove("input-error");
      labelElement.textContent = "";
      labelElement.classList.remove("text-error");
      labelElement.classList.add("hidden");
    });
  };

  const handleInput = () => {
    validatedItem.addEventListener("input", () => {
      validatedItem.classList.remove("input-error");
      labelElement.textContent = "";
      labelElement.classList.remove("text-error");
      labelElement.classList.add("hidden");
    });
  };
  handleInput();
  handleFocus();
};

const handleDeleteTaskBtn = () => {
  const taskId = store.state.currentTaskId;
  modals.closeModal("task-modal");
  store.deleteTask(taskId);
  render.renderTasks();
};
