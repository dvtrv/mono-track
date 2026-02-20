import * as utils from "../modules/utils";

export const store = {
  currentTaskId: null,
  tasks: [
    {
      id: "cw34t",
      title: "Test task wich allows you to toggle",
      description:
        "Test description which allows you to toggle of two elements using a checkbox or a class name.",
    },
  ],

  createTask: ({ title, description }) => {
    const task = {};
    task.created = Date.now();
    task.id = utils.generateId();
    task.title = title;
    task.description = description;
    store.tasks.push(task);
  },

  getTaskById: (id) => {
    const task = store.tasks.find((t) => t.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  },

  deleteTask: (id) => {
    const index = store.tasks.findIndex((t) => t.id === id);
    if (!index) {
      throw new Error(`Task with id ${id} not found`);
    }
    store.tasks.splice(index, 1);
  },

  updateTask: (inputValue, textareaValue) => {
    const newTitle = inputValue.trim();
    const newDescription = textareaValue.trim();

    const currentTask = store.getTaskById(store.currentTaskId);

    const hasChanges =
      newTitle !== currentTask.title ||
      newDescription !== currentTask.description;

    if (!hasChanges) return null;

    const changes = {};

    if (currentTask.title !== newTitle) {
      currentTask.title = newTitle;
      changes.title = true;
    }

    if (currentTask.description !== newDescription) {
      currentTask.description = newDescription;
      changes.description = true;
    }
    return changes;
  },
};
