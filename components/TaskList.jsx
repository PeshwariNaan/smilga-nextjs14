import Link from 'next/link'
import DeleteForm from './DeleteForm'
import { getaAllTasks } from '@/utils/actions'

const TaskList = async () => {
  const tasks = await getaAllTasks()
  if (tasks.length === 0) {
    return <h2 className="mt-8 font-medium text-lg">No tasks to show...</h2>
  }
  return (
    <ul className="mt-8">
      {tasks.map((task) => {
        return (
          <li
            key={task.id}
            className="flex justify-between items-center px-6 py-4 mb-4 border border-base-300 rounded-lg shadow-lg"
          >
            <h2 className={`text-lg capitalize ${task.completed ? 'line-through' : null}`}>{task.content}</h2>
            <div className="flex gap-6 items-center"></div>
            <Link href={`/tasks/${task.id}`} className="btn btn-accent btn-xs capitalize">
              edit
            </Link>
            <DeleteForm id={task.id} />
          </li>
        )
      })}
    </ul>
  )
}

export default TaskList
