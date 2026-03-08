import { useState } from 'react';
import CreateForm from './components/CreateForm';
import Navbar from './components/ui/Navbar';
import Button from './components/ui/Button';
import TaskList from './components/TaskList';
import { v4 as uuid } from 'uuid';
import { generateId } from '@/lib/utils';
import {
  type CreateAction,
  type TaskObject,
  type TaskAction,
  type TaskListAction,
} from '@/types';

function App() {
  const [taskList, setTaskList] = useState<Array<TaskObject>>([]);
  console.log(taskList);
  const createTaskHandler: CreateAction = (newTaskTitle) => {
    if (!newTaskTitle || newTaskTitle.trim() === '') return { status: 'empty' };
    const hasSameTask = taskList.some((task) => {
      return task.title === newTaskTitle;
    });
    if (hasSameTask) return { status: 'duplicate' };

    const newTaskId = uuid();
    const newTask = { id: newTaskId, title: newTaskTitle, completed: false };
    setTaskList([...taskList, newTask]);
    return { status: 'success' };
  };

  const deleteTaskHandler: TaskAction = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id);
    setTaskList(newTaskList);
  };

  const completeTaskHandler: TaskAction = (id) => {
    const newTaskList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task,
    );
    setTaskList(newTaskList);
  };

  const сlearHandler: TaskListAction = () => {
    const newTaskList = taskList.filter((task) => task.completed === false);
    setTaskList(newTaskList);
  };

  return (
    <div className="app font-display h-screen flex flex-col items-center">
      <Navbar className="justify-center">
        <Button variant="ghost">
          <p className="font-bold text-lg">MonoTrack</p>
        </Button>
      </Navbar>

      <div className="flex flex-col w-full max-w-96 pt-4 px-4">
        <CreateForm onCreateTask={createTaskHandler} />
        <TaskList
          taskList={taskList}
          onDeleteTask={deleteTaskHandler}
          onCompleteTask={completeTaskHandler}
          onClear={сlearHandler}
        />
      </div>
    </div>
  );
}

export default App;
