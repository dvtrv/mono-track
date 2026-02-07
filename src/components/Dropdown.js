import { Menu } from "./menu";

export const Dropdown = ({ items = [], text, className, icon }) => {
  return /* html */ `
  <details class="dropdown ${className}">
        <summary class="btn m-1 flex items-center gap-2 shadow-sm">
          ${icon ? `<span class="${icon} w-6 h-6 shrink-0"></span>` : ""}
          ${text ? `<span class="leading-none">${text}</span>` : ""}
        </summary>
        ${Menu({ items, className: "dropdown-content" })}
      </details>
  `;
};
