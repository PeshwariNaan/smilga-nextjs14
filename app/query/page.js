import React from 'react'
import Link from 'next/link'

const QueryPage = () => {
  return (
    <div>
      <h1 className="text-2xl">Query page</h1>
      <Link href="/" className="text-2xl">
        home page
      </Link>
    </div>
  )
}

export default QueryPage
