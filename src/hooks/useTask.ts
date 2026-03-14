import { useState, useEffect } from 'react'
import { v4 as uuid } from 'uuid'
import {
  type Task,
  type CreateAction,
  type TaskAction,
  type TaskListAction,
} from '@/types'

interface UseTasksReturn {
  tasks: Task[]
  createTask: CreateAction
  toggleTask: TaskAction
  deleteTask: TaskAction
  clearCompleted: TaskListAction
}

export const useTasks = (): UseTasksReturn => {
  const [tasks, setTasks] = useState<Task[]>(() => {
    const saved = localStorage.getItem('mono-track-tasks')
    return saved ? JSON.parse(saved) : []
  })
  useEffect(() => {
    localStorage.setItem('mono-track-tasks', JSON.stringify(tasks))
  }, [tasks])

  const createTask: CreateAction = (taskTitle) => {
    if (!taskTitle || taskTitle.trim() === '') throw new Error('empty')

    const hasSameTask = tasks.some(
      (task) =>
        task.title.trim().toLowerCase() === taskTitle.trim().toLowerCase(),
    )
    if (hasSameTask) throw new Error('duplicate')

    const newTask: Task = {
      id: uuid(),
      title: taskTitle,
      completed: false,
    }

    setTasks((prev) => [...prev, newTask])
    return
  }

  const deleteTask: TaskAction = (id) => {
    setTasks((prev) => prev.filter((task) => task.id !== id))
  }

  const toggleTask: TaskAction = (id) => {
    setTasks((prev) =>
      prev.map((task) =>
        id === task.id ? { ...task, completed: !task.completed } : task,
      ),
    )
  }

  const clearCompleted: TaskListAction = () => {
    setTasks((prev) => prev.filter((task) => task.completed === false))
  }

  return { tasks, createTask, toggleTask, deleteTask, clearCompleted }
}
