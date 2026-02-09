export const Input = ({
  className,
  placeholder = "Enter text",
  label,
  legend,
  action,
}) => {
  return /* html */ `
    <fieldset class="fieldset">
        ${legend ? `<legend class="fieldset-legend">${legend}</legend>` : ""}
            <input type="text" data-action="${action}" class="input flex w-full ${className}" placeholder="${placeholder}" />
        ${label ? `<div class="label">${label}</div>` : ""}
    </fieldset>
    `;
};
