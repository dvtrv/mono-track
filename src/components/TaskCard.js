import { Badge } from "./Badge";

export const TaskCard = ({
  id = "",
  title = "",
  action = "",
  className = "",
}) => {
  // const idAttr = data?.id ? `data-id="${data.id}"` : "";
  // const actionAttr = action ? `data-action="${action}"` : "";
  // const classAttr = className ? `class="modal ${className}"` : `class="modal"`;

  return /* html */ `
        <div data-action="open-task-card" data-id="${id}" class="card card-sm bg-base-200 border border-base-300 hover:border-primary/50 cursor-pointer transition-all active:scale-[0.99] ${className}">
            <div class="card-body p-4 gap-2">
                <div class="flex justify-between items-center">
                    <p class="text-sm font-medium leading-tight text-base-content">${title}</p>
                    ${Badge({ text: "To Do" })}
                </div>
                <div class="flex justify-between items-center">
                    <span class="text-xs font-mono opacity-20">#${id}</span>
                </div>
            </div>
        </div>
  `;
};
