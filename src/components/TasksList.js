import { TaskCard } from "./TaskCard";

export const TasksList = ({}) => {
  return /* html */ `
    <div class="task-list flex flex-col">
        <div class="task-list__cards-container flex flex-col gap-3 pb-4">
            ${TaskCard({ id: `100` })}
            ${TaskCard({ id: `200` })}
            ${TaskCard({ id: `300` })}
        </div>
    </div>
  `;
};
