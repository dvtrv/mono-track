import TaskCard from './TaskCard'
import Divider from './Divider'

function TaskList({ taskList, onDeleteTask, onCompleteTask, onClear }) {
  const hasComplited = taskList.some((task) => task.completed)
  const counter = taskList.filter((task) => {
    return task.completed === true
  }).length

  return (
    <div className="py-4">
      {!!taskList &&
        taskList
          .slice()
          .reverse()
          .map((task) => {
            if (!task.completed)
              return (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  taskObj={task}
                  onDeleteTask={onDeleteTask}
                  onCompleteTask={onCompleteTask}
                />
              )
          })}
      {hasComplited ? <Divider label={`You completed ${counter} tasks`} onClear={onClear} /> : ''}
      {!!taskList &&
        taskList
          .slice()
          .reverse()
          .map((task) => {
            if (task.completed)
              return (
                <TaskCard
                  key={task.id}
                  id={task.id}
                  taskObj={task}
                  onDeleteTask={onDeleteTask}
                  onCompleteTask={onCompleteTask}
                />
              )
          })}
    </div>
  )
}
export default TaskList
