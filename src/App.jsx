import { useState } from 'react'
import CreateForm from './components/CreateForm'
import Navbar from './components/Navbar'
import TaskList from './components/TaskList'
import { generateId } from '../utils/utils'

function App() {
  const [taskList, setTaskList] = useState([
    { id: '1', title: 'First task 1', completed: false },
    { id: '2', title: 'First task 2', completed: false },
    { id: '3', title: 'First task 3', completed: false },
  ])

  const createTaskHandler = (newTaskTitle) => {
    if (!newTaskTitle || newTaskTitle.trim() === '') return { status: 'empty' }
    const hasSameTask = taskList.some((task) => {
      return task.title === newTaskTitle
    })
    if (hasSameTask) return { status: 'duplicate' }

    const newTaskId = generateId()
    const newTask = { id: newTaskId, title: newTaskTitle, completed: false }
    setTaskList([...taskList, newTask])
    return { status: 'succees' }
  }

  const deleteTaskHandler = (id) => {
    const newTaskList = taskList.filter((task) => task.id !== id)
    setTaskList(newTaskList)
  }

  const completeTaskHandler = (id) => {
    const newTaskList = taskList.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : { ...task },
    )
    setTaskList(newTaskList)
  }

  const onClearHandler = () => {
    const newTaskList = taskList.filter((task) => task.completed === false)
    setTaskList(newTaskList)
  }

  return (
    <div className="app font-display h-screen flex flex-col items-center">
      <Navbar />
      <div className="flex flex-col w-full max-w-96 pt-4 px-4">
        <CreateForm onCreateTask={createTaskHandler} />
        <TaskList
          taskList={taskList}
          onDeleteTask={deleteTaskHandler}
          onCompleteTask={completeTaskHandler}
          onClear={onClearHandler}
        />
      </div>
    </div>
  )
}

export default App
