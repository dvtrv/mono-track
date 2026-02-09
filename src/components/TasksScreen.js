import { icon } from "../assets/icon.js";
import { Navbar } from "./Navbar.js";
import { Button } from "./Button.js";
import { ModalNewTask } from "./ModalNewTask.js";
import { TaskCard } from "./TaskCard.js";

export const TasksScreen = (tasks = []) => {
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

  <main class="mx-auto h-[calc(100%-64px)] px-4 pt-4 pb-6">
      <div class="">
        <div class="tasks-list flex flex-col gap-3">
            <!--List of cards -->
        </div>
        ${ModalNewTask({ action: "add-new-task-btn-modal" })}

      </div>
  </main>
  `;
};
