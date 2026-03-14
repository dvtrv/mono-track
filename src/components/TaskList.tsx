import TaskCard from './TaskCard';
import Divider from './ui/Divider';
import Button from './ui/Button';
import { type Task, type TaskAction, type TaskListAction } from '@/types';
import { useMemo } from 'react';

interface TaskListProps {
  taskList: Array<Task>;
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
  const { activeTasks, completedTasks, hasCompleted, solvedCount } =
    useMemo(() => {
      const reversed = [...taskList].reverse();
      const completed = reversed.filter((t) => t.completed);
      const active = reversed.filter((t) => !t.completed);
      const count = completed.length;
      return {
        activeTasks: active,
        completedTasks: completed,
        hasCompleted: count > 0,
        solvedCount: count,
      };
    }, [taskList]);

  return (
    <div className="flex flex-col py-4 gap-2">
      {activeTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          taskObject={task}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
        />
      ))}

      {hasCompleted && (
        <div className="flex items-center justify-between gap-3 mt-4">
          <Divider className="w-full opacity-30 text-sm" position={'start'}>
            Solved {solvedCount} issue
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
      )}

      {completedTasks.map((task) => (
        <TaskCard
          key={task.id}
          id={task.id}
          taskObject={task}
          onDeleteTask={onDeleteTask}
          onCompleteTask={onCompleteTask}
        />
      ))}
    </div>
  );
}
export default TaskList;
