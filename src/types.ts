export type TaskAction = (id: string) => void
export type TaskListAction = () => void
export type CreateTaskStatus = 'empty' | 'duplicate' | 'success'
export type CreateAction = (taskTitle: string) => CreateTaskResult

export interface TaskObject {
  id: string
  title: string
  completed: boolean
}

export interface CreateTaskResult {
  status: CreateTaskStatus
}
