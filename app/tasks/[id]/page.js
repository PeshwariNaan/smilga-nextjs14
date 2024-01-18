import EditForm from '@/components/EditForm'
import { getTask } from '@/utils/actions'
import Link from 'next/link'
import React from 'react'

const SingleTaskPage = async ({ params }) => {
  const task = await getTask(params.id)
  console.log('task', task)
  return (
    <>
      <div className="mb-16">
        <Link href="/tasks" className="btn btn-accent btn-xs ">
          Back to tasks
        </Link>
      </div>
      <EditForm task={task} />
    </>
  )
}

export default SingleTaskPage
