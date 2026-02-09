export const Textarea = ({
  className,
  placeholder = "Enter text",
  label,
  legend,
  action,
}) => {
  return /* html */ `
    <fieldset class="fieldset ">
      ${legend ? `<legend class="fieldset-legend">${legend}</legend>` : ""}
        <textarea data-action="${action}" class="textarea h-24 flex w-full ${className}" placeholder="${placeholder}"></textarea>
      ${label ? `<div class="label">${label}</div>` : ""}
    </fieldset>
    `;
};
