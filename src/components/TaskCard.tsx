import * as React from 'react';
import { cva } from 'class-variance-authority';
import { LuTrash2 } from 'react-icons/lu';

import { type Task, type TaskAction } from '@/types';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';

interface TaskCardProps extends React.ComponentProps<'div'> {
  taskObject: Task;
  id: string;
  onCompleteTask: TaskAction;
  onDeleteTask: TaskAction;
}

const taskCardVariants = cva(
  'group flex w-full justify-between items-center bg-base-200 p-4 mt-2 rounded-lg min-h-[64px]',
  {
    variants: {
      completed: {
        true: 'opacity-50',
        false: '',
      },
    },
    defaultVariants: {
      completed: false,
    },
  },
);

const titleVariants = cva('text-sm text-indigo-200', {
  variants: {
    completed: {
      true: 'line-through',
      false: '',
    },
  },
  defaultVariants: {
    completed: false,
  },
});
const TaskCard = ({
  taskObject,
  id,
  onCompleteTask,
  onDeleteTask,
  ...props
}: TaskCardProps) => {
  return (
    <div className={taskCardVariants({ completed: taskObject.completed })}>
      <div className="flex items-center gap-4 ">
        <Checkbox
          className="active:scale-90"
          checked={taskObject.completed}
          onChange={() => onCompleteTask(id)}
        />
        <h3 className={titleVariants({ completed: taskObject.completed })}>
          {taskObject.title}
        </h3>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 ease-in-out ">
        <Button
          variant="error"
          size="sm"
          onClick={() => {
            onDeleteTask(id);
          }}
        >
          <LuTrash2 size={16} />
        </Button>
      </div>
    </div>
  );
};

export default TaskCard;
