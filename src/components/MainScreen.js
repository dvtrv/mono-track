import { icon } from "../assets/icon.js";
import { Navbar } from "./Navbar.js";
import { Button } from "./Button.js";

export const MainScreen = (tasks = []) => {
  return /*html*/ `
  ${Navbar({
    leftSlot: Button({
      text: "MonoTrack",
      className: "text-xl btn-ghost hover:btn-outline",
    }),
    rightSlot: Button({
      icon: icon.plus,
      className: "btn-ghost hover:btn-primary",
      action: "add-new-task",
    }),
  })}

  <main class="max-w-2xl mx-auto h-[calc(100%-64px)] px-4 pt-4 pb-6">
        <div class=" tasks-list flex flex-col gap-3">

        </div>
  </main>
  `;
};
