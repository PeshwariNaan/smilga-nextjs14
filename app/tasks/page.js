import TaskForm from '@/components/TaskForm'
import TaskFormCustom from '@/components/TaskFormCustom'
import TaskList from '@/components/TaskList'
import React from 'react'

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
