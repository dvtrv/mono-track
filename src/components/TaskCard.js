import { Button } from "./Button";
import { Badge } from "./Badge";

export const TaskCard = ({
  id = "{NoTaskNumber}",
  taskTitle = "{NoTaskTitle}",
  taskDescription = "{NoTaskDescription}",
  createdTime = "{NotCreated}",
  completionTime = "{NotComplited}",
  className = "",
}) => {
  return /* html */ `

  <div class="drawer drawer-end">
    <!-- input control -->
    <input type="checkbox" class="drawer-toggle" id="my-drawer-${id}"/>
      <!-- Page content here -->
        <div class="card card-sm bg-base-200 border border-base-300 shadow-sm hover:border-primary/50 cursor-pointer transition-all active:scale-[0.99] ${className}"
        onclick="document.getElementById('my-drawer-${id}').checked = true">

            <div class="card-body p-4 gap-2">
                <div class="flex justify-between items-center">
                    <span class="text-xs font-mono opacity-40">#${id}</span>
                    ${Badge({ variant: "positive", text: "ToDo" })}
                </div>
                <p class="text-sm font-medium leading-tight text-base-content">${taskTitle}</p>
            </div>
        </div>

        <!-- Sidebar -->
    <div class="drawer-side">
      <label aria-label="close sidebar" class="drawer-overlay" for="my-drawer-${id}"></label >
      <ul class="flex justify-between flex-col bg-base-200 min-h-full w-80 p-4">
        <!-- Sidebar content here -->
        <li><span class="text-xs font-mono opacity-40">#${id}</span></li>
        <li><p class="text-sm font-medium leading-tight text-base-content">${taskTitle}</p></li>
        <li class = "flex flex-col gap-2">
            ${Button({ text: "Edit task", className: "btn-primary btn-soft" })}
            ${Button({ text: "Delete task", className: "btn-error btn-soft" })}
        </li>
      </ul>
    </div>
  </div>

  `;
};
//TODO Make task info in sidebar
// <label class="drawer-button btn btn-primary" for="my-drawer-${id}">Open drawer</label>
