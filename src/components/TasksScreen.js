import { icon } from "../assets/icon.js";
import { Navbar } from "./Navbar.js";
import { Button } from "./Button.js";
import { ModalNewTask } from "./ModalNewTask.js";
import { TaskCard } from "./TaskCard.js";

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
        <div class="task-list flex flex-col gap-3">
            ${TaskCard({ id: `100` })}
            ${TaskCard({ id: `200` })}
            ${TaskCard({ id: `300` })}
        </div>
        ${ModalNewTask({ action: "add-new-task-btn-modal" })}
        ${ModalNewTask({ action: "none", className: "modal-open" })}
      </div>
  </main>
  `;
};

//TODO Add input component
//TODO Add textarea component
//TODO Add field in the new task modal
