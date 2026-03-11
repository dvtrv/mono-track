import CreateForm from './components/CreateForm';
import Navbar from './components/ui/Navbar';
import Button from './components/ui/Button';
import TaskList from './components/TaskList';
import { useTasks } from '@/hooks/useTask';

function App() {
  const { tasks, createTask, toggleTask, deleteTask, clearCompleted } =
    useTasks();

  return (
    <div className="app font-display h-screen flex flex-col items-center">
      <Navbar className="justify-center">
        <Button variant="ghost">
          <p className="font-bold text-lg">MonoTrack</p>
        </Button>
      </Navbar>

      <div className="flex flex-col w-full max-w-96 pt-4 px-4">
        <CreateForm onCreateTask={createTask} />
        <TaskList
          taskList={tasks}
          onDeleteTask={deleteTask}
          onCompleteTask={toggleTask}
          onClear={clearCompleted}
        />
      </div>
    </div>
  );
}

export default App;
