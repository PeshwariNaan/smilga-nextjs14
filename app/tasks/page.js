// import TaskForm from '@/components/TaskForm'
import TaskFormCustom from '@/components/TaskFormCustom'
import TaskList from '@/components/TaskList'
export const dynamic = 'force-dynamic' //This is the solution for pages that are not updating as they should. It can cause errors with deleting things in DB and refreshing and trying to delete again becasue the item still appears on the page but has been deleted from the DB.
const TasksPage = () => {
  return (
    <div className="max-w-lg">
      <h1 className="text-2xl">Tasks page</h1>
      <TaskFormCustom />
      <TaskList />
    </div>
  )
}

export default TasksPage
