import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';
import { type CreateTaskResult } from '@/types';

interface CreateFormProps extends React.ComponentPropsWithoutRef<'form'> {
  onCreateTask: (newTaskTitle: string) => CreateTaskResult;
}

interface FormLabel {
  type: 'warning' | 'error' | 'success';
  text: string;
}

function CreateForm({ onCreateTask }: CreateFormProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showLabel, setShowLabel] = useState<FormLabel | undefined>(undefined);

  const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = onCreateTask(newTaskTitle);
    setNewTaskTitle('');

    if (result.status === 'empty') {
      setShowLabel({ type: 'warning', text: 'Task title cannot be empty' });
      return;
    }
    if (result.status === 'duplicate') {
      setShowLabel({
        type: 'warning',
        text: 'Task with this title already exists',
      });
      return;
    }
  };

  return (
    <form onSubmit={onSubmitHandler} className="flex w-full gap-2">
      <Input
        size={'md'}
        value={newTaskTitle}
        placeholder="Enter issue name"
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
          setNewTaskTitle(e.target.value);
          if (showLabel) setShowLabel(undefined);
        }}
        {...(showLabel ? { label: showLabel } : {})}
      />
      <Button variant="secondary">Create</Button>
    </form>
  );
}
export default CreateForm;
