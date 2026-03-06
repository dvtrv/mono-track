import { useState } from 'react'
import Button from './Button'
import Input from './Input'

function CreateForm({ onCreateTask }) {
  const [newTaskTitle, setNewTaskTitle] = useState('')
  const [showLabel, setShowLabel] = useState(null)

  const onSubmitHandler = (e) => {
    e.preventDefault()
    const result = onCreateTask(newTaskTitle)
    setNewTaskTitle('')

    if (result.status === 'empty') {
      setShowLabel({ type: 'warning', text: 'Task title cannot be empty' })
      return
    }
    if (result.status === 'duplicate') {
      setShowLabel({
        type: 'warning',
        text: 'Task with this title already exists',
      })
      return
    }
  }

  return (
    <form onSubmit={onSubmitHandler} className="flex w-full gap-2">
      <Input
        size={'lg'}
        value={newTaskTitle}
        placeholder="Enter title for new task"
        onChange={(e) => {
          setNewTaskTitle(e.target.value)
          if (showLabel) setShowLabel(null)
        }}
        label={showLabel}
      />
      <Button variant="secondary">
        <p className="font-medium text-base">Create</p>
      </Button>
    </form>
  )
}
export default CreateForm
