import * as React from 'react';
import { cva } from 'class-variance-authority';
import { LuTrash2 } from 'react-icons/lu';

import { type Task, type TaskAction } from '@/types';
import Checkbox from '@/components/ui/Checkbox';
import Button from '@/components/ui/Button';
import { Card, CardContent } from '@/components/ui/Card';

interface TaskCardProps extends React.ComponentProps<'div'> {
  taskObject: Task;
  id: string;
  onCompleteTask: TaskAction;
  onDeleteTask: TaskAction;
}

const taskCardVariants = cva('group flex-row justify-between items-center', {
  variants: {
    completed: {
      true: 'opacity-50',
      false: '',
    },
  },
  defaultVariants: {
    completed: false,
  },
});

const titleVariants = cva('text-sm text-indigo-200  line-clamp-2', {
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
    <>
      <Card
        size="xs"
        className={taskCardVariants({ completed: taskObject.completed })}
      >
        <CardContent className="min-w-0 flex-row items-center gap-4">
          <Checkbox
            className="active:scale-90"
            checked={taskObject.completed}
            onChange={() => onCompleteTask(id)}
          />
          <h3 className={titleVariants({ completed: taskObject.completed })}>
            {taskObject.title}
          </h3>
          <Button
            onClick={() => onDeleteTask(id)}
            className="opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 ease-in-out"
            variant="error"
            size="sm"
          >
            <LuTrash2 size={16} />
          </Button>
        </CardContent>
      </Card>
    </>
  );
};

export default TaskCard;
