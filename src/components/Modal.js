import { Button } from "./Button";
import { icon } from "../assets/icon";

export const Modal = ({ data, action, className, header, slot }) => {
  const slotContent = Array.isArray(slot) ? slot.join("") : slot;
  const headerContent = header ? header : "";

  const idAttr = data?.id ? `data-id="${data.id}"` : "";
  const actionAttr = action ? `data-action="${action}"` : "";
  const classAttr = className ? `class="modal ${className}"` : `class="modal"`;

  return /* html */ `
  <dialog ${idAttr} ${actionAttr} ${classAttr}>
    <div class="modal-box flex flex-col justify-between gap-0.5">

        <div method="dialog" class="modal-action m-0 justify-between items-center">
          <h3 class="text-lg font-bold">${headerContent}</h3>
          <!--aditional "close" button-->
          ${Button({ className: "btn-circle btn-sm", icon: icon.close, action: "close-button" })}
        </div>

        ${slotContent}

    </div>

    <form method="dialog" class="modal-backdrop">
      <button> <!--outside "close" button--> </button>
    </form>

  </dialog>
  `;
};
