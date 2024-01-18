'use client'
import { createTaskCustom } from '@/utils/actions'
import { useEffect } from 'react'
import { useFormStatus, useFormState } from 'react-dom'
import toast from 'react-hot-toast'

const SubmitButton = () => {
  const { pending } = useFormStatus()
  return (
    <button className="btn btn-primary join-item" disabled={pending}>
      {pending ? 'please wait...' : 'create task'}
    </button>
  )
}

const initialState = {
  message: null,
}

const TaskFormCustom = () => {
  const [state, formAction] = useFormState(createTaskCustom, initialState)
  useEffect(() => {
    if (state.message === 'error') {
      toast.error('There was an error')
    }
    if (state.message === 'success') {
      toast.success('Task created')
    }
  })
  return (
    <form action={formAction}>
      {state.message ? <p>{state.message}</p> : null}
      <div className="join w-full">
        <input
          type="text"
          className="input input-bordered join-item w-full"
          placeholder="Type here"
          name="content"
          required
        />
        <SubmitButton />
      </div>
    </form>
  )
}

export default TaskFormCustom
