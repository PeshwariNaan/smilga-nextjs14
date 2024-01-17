import Link from 'next/link'
import React from 'react'

const TasksPage = () => {
  return (
    <div>
      <h1 className="text-2xl">Tasks page</h1>
      <Link href="/" className="text-2xl">
        home page
      </Link>
    </div>
  )
}

export default TasksPage
