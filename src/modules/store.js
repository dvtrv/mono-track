import * as utils from "../modules/utils";

export const store = {
  tasks: [
    {
      id: 1,
      title: "title",
      description: "description",
    },
  ],
  addTask: ({ title, description }) => {
    const task = {};
    task.created = Date.now();
    task.id = utils.generateId();
    task.title = title;
    task.description = description;
    store.tasks.push(task);
  },
};
