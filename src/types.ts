export type TaskAction = (id: string) => void
export type TaskListAction = () => void
export type CreateTaskStatus = 'empty' | 'duplicate' | 'success'
export type CreateAction = (taskTitle: string) => void

export interface Task {
  id: string
  title: string
  completed: boolean
}
