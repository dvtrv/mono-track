import { icon } from "../assets/icon";
import { Textarea } from "./Textarea";
import { Input } from "./Input";
import { Button } from "./Button";

export const ModalNewTask = ({ action, className }) => {
  return /* html */ `
  <dialog data-action="${action}" class="modal ${className}">

    <div class="modal-box flex flex-col justify-between gap-3">
        <form class="modal-action m-0 justify-between items-center">
            <h3 class="text-lg font-bold">New task</h3>
            <!--aditional "close" button-->
            ${Button({ className: "btn-circle btn-sm", icon: icon.close })}
        </form>

        ${Input({ legend: "Task title ", action: "new-task-title" })}
        ${Textarea({ legend: "Task description", action: "new-task-description" })}
        ${Button({ text: "Create", className: "btn-primary", action: "create-new-task-btn" })}

    </div>
        <!--outside the modal "close" button-->
    <form class="modal-backdrop">
        <button>close</button>
    </form>

  </dialog>
  `;
};
