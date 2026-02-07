export const Menu = ({ items = [], className }) => {
  return /* html */ `
  <ul class="menu bg-base-300 rounded-box w-56 ${className}">
    ${items.map((item) => MenuItem(item)).join("")}
  </ul>
  `;
};

export const MenuItem = ({ label, link, className }) => {
  return /* html */ `
    <li>
      <a href="${link}" class="gap-3 ${className}">
        ${label}
      </a>
    </li>
  `;
};
