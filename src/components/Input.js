export const Input = ({
  className,
  legend,
  label,
  placeholder = "Input text",
  action,
}) => {
  const propsContent = (props) => (props ? `${props}` : "");
  const actionAttr = action ? `data-action="${action}"` : "";
  const placeholderAttr = placeholder
    ? `placeholder="${placeholder}"`
    : `placeholder="Textarea text"`;

  return /* html */ `
    <fieldset class="fieldset">
        <legend class="fieldset-legend pl-2.5 opacity-30 ">${propsContent(legend)}</legend>
            <input
            type="text"
            class="input flex w-full ${className}"
            ${actionAttr}
            ${placeholderAttr} />
        <div class="label hidden">${propsContent(label)}</div>
    </fieldset>
    `;
};
// value="${value}"
