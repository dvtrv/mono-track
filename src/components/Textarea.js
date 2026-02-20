export const Textarea = ({ className, placeholder, action, legend, label }) => {
  const propsContent = (props) => (props ? `${props}` : "");
  const actionAttr = action ? `data-action="${action}"` : "";
  const placeholderAttr = placeholder
    ? `placeholder="${placeholder}"`
    : `placeholder="Textarea text"`;

  return /* html */ `
    <fieldset class="fieldset ">
      <legend class="fieldset-legend opacity-30">${propsContent(legend)}</legend>
        <textarea class="textarea h-24 flex w-full ${className}" ${actionAttr} ${placeholderAttr}></textarea>
      <div class="label">${propsContent(label)}</div>
    </fieldset>
    `;
};
