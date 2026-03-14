import { useState } from 'react';
import Button from '@/components/ui/Button';
import Input from '@/components/ui/Input';

interface CreateFormProps extends React.ComponentPropsWithoutRef<'form'> {
  onCreateTask: (newTaskTitle: string) => void;
}

type FormLabel = string;

function CreateForm({ onCreateTask }: CreateFormProps) {
  const [newTaskTitle, setNewTaskTitle] = useState('');
  const [showLabel, setShowLabel] = useState<FormLabel | undefined>(undefined);

  const onSubmitHandler = (e: React.SubmitEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      onCreateTask(newTaskTitle);
      setNewTaskTitle('');
      setShowLabel(undefined);
    } catch (error) {
      if (error instanceof Error) {
        const messages = {
          empty: 'Task title cannot be empty',
          duplicate: 'Task with this title already exists',
        };
        const key = error.message as keyof typeof messages;
        if (messages[key]) {
          setShowLabel(messages[key]);
          setNewTaskTitle('');
        }
      }
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
