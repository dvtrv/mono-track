export const Button = ({ text, icon, className, action = "default" }) => {
  return /* html */ `
    <button class="btn ${className}"
            data-action="${action}">
        ${icon ? `<span class="${icon} w-6 h-6 shrink-0"></span>` : ""}
        ${text ? `<span class="leading-none">${text}</span>` : ""}
    </button>

  `;
};