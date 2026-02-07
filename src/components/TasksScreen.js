import { icon } from "../assets/icon.js";
import { Navbar } from "./Navbar.js";
import { Button } from "./Button.js";
import { TasksList } from "./TasksList.js";
import { ModalNewTask } from "./ModalNewTask.js";

export const TasksScreen = () => {
  return /*html*/ `
  ${Navbar({
    leftSlot: Button({
      text: "MonoTrack",
      className: "text-xl btn-ghost hover:btn-outline",
    }),
    rightSlot: Button({
      icon: icon.plus,
      className: "btn-ghost hover:btn-primary",
      action: "add-new-task-btn",
    }),
  })}

  <main class="container mx-auto h-[calc(100%-64px)] px-4 pt-4 pb-6">
      <div class="">
        ${TasksList({})}
        ${ModalNewTask({ action: "add-new-task-btn-modal" })}
      </div>
  </main>
  `;
};

//TODO Add field in the new task modal
//TODO Add input component
//TODO Add textarea component
