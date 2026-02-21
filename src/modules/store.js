import * as utils from "../modules/utils";

export const store = {
  state: {
    currentTaskId: null,
    tasks: [
      {
        id: "cw34t",
        title: "Test task wich allows you to toggle",
        description:
          "Test description which allows you to toggle of two elements using a checkbox or a class name.",
      },
    ],
  },

  createTask: ({ title, description }) => {
    const task = {};
    task.created = Date.now();
    task.id = utils.generateId();
    task.title = title;
    task.description = description;
    store.state.tasks.push(task);
    store.saveState();
  },

  getTaskById: (id) => {
    const task = store.state.tasks.find((t) => t.id === id);
    if (!task) {
      throw new Error(`Task with id ${id} not found`);
    }
    return task;
  },

  deleteTask: (id) => {
    const index = store.state.tasks.findIndex((t) => t.id === id);
    if (!index) {
      throw new Error(`Task with id ${id} not found`);
    }
    store.state.tasks.splice(index, 1);
    store.saveState();
  },

  updateTask: (inputValue, textareaValue) => {
    const newTitle = inputValue.trim();
    const newDescription = textareaValue.trim();

    const currentTask = store.getTaskById(store.state.currentTaskId);

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
    store.saveState();
    return changes;
  },

  saveState: () => {
    localStorage.setItem("monoTrack", JSON.stringify(store.state));
  },

  loadState: () => {
    const rawState = localStorage.getItem("monoTrack");
    if (!rawState) {
      store.state = {
        currentTaskId: null,
        tasks: [],
      };
      return;
    }
    const newState = JSON.parse(rawState);
    store.state = newState;
    store.saveState();
  },
};
