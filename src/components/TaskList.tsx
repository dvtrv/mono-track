import TaskCard from './TaskCard';
import Divider from './ui/Divider';
import Button from './ui/Button';
import { type TaskObject, type TaskAction, type TaskListAction } from '@/types';

interface TaskListProps {
  taskList: Array<TaskObject>;
  onDeleteTask: TaskAction;
  onCompleteTask: TaskAction;
  onClear: TaskListAction;
}

function TaskList({
  taskList,
  onDeleteTask,
  onCompleteTask,
  onClear,
}: TaskListProps) {
  const hasComplited = taskList.some((task) => task.completed);
  const counter = taskList.filter((task) => {
    return task.completed === true;
  }).length;

  return (
    <div className="py-4">
      {!!taskList &&
        taskList
          .slice()
          .reverse()
          .map((task) => {
            if (!task.completed)
              return (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  taskObject={task}
                  onDeleteTask={onDeleteTask}
                  onCompleteTask={onCompleteTask}
                />
              );
          })}
      {hasComplited ? (
        <div className="flex items-center justify-between gap-3 mt-4">
          <Divider
            className="w-full opacity-30 text-sm btn-sm"
            position={'start'}
          >
            Solved {counter} issue
          </Divider>
          <Button
            onClick={onClear}
            className={
              'opacity-30 hover:opacity-100 transition-opacity delay-150 duration-300'
            }
            variant="ghost"
          >
            Clear
          </Button>
        </div>
      ) : (
        ''
      )}
      {!!taskList &&
        taskList
          .slice()
          .reverse()
          .map((task) => {
            if (task.completed)
              return (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  taskObject={task}
                  onDeleteTask={onDeleteTask}
                  onCompleteTask={onCompleteTask}
                />
              );
          })}
    </div>
  );
}
export default TaskList;
