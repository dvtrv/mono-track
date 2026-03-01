import Checkbox from './Checkbox'
import Button from './Button'
import { LuTrash2 } from 'react-icons/lu'

function TaskCard({ taskObj, onDeleteTask, id, onCompleteTask }) {
  let cardCassName =
    'group flex w-full justify-between items-center bg-base-200 p-4 mt-2 rounded-lg min-h-[64px]'
  let titleClassName = 'text-sm text-indigo-200'

  taskObj.completed && (cardCassName += ' opacity-50')
  taskObj.completed && (titleClassName += ' line-through')

  return (
    <div className={cardCassName}>
      <div className="flex items-center gap-4 ">
        <div className="transition-all active:scale-80">
          <Checkbox checked={taskObj.completed} onChange={() => onCompleteTask(id)} />
        </div>
        <h3 className={titleClassName}>{taskObj.title}</h3>
      </div>
      <div className="opacity-0 group-hover:opacity-100 transition-opacity delay-100 duration-300 ease-in-out ">
        <Button
          variant="error"
          size="sm"
          onClick={() => {
            onDeleteTask(id)
          }}
        >
          <LuTrash2 size={16} />
        </Button>
      </div>
    </div>
  )
}
export default TaskCard
