export const Navbar = ({
  leftSlot = "",
  centerSlot = "",
  rightSlot = "",
  className = "",
}) => {
  return /* html */ `
  <div class="navbar bg-neutral text-neutral-content px-4 ${className}">
    <div class="navbar-start">
        ${leftSlot}
    </div>
    <div class="navbar-center">
        ${centerSlot}
    </div>
    <div class="navbar-end">
        ${rightSlot}
    </div>
  </div>`;
};
