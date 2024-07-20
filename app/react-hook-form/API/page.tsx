import { readDir } from '@/web/file'
import Link from 'next/link'
import React from 'react'

const Page = async () => {
  const dirItems = await readDir(
    './app/react-hook-form/API',
    /app\\react\-hook\-form\\API\\/,
  )
  console.log(dirItems)

  return (
    <div className='h flex min-h-screen flex-col items-start justify-start p-24'>
      {dirItems.map((d) => (
        <button
          key={d.id}
          className='mt-1 w-96 rounded bg-blue-500 px-4 py-2 text-left font-bold text-white hover:bg-blue-700'>
          <Link href={d.path}>{d.title}</Link>
        </button>
      ))}
    </div>
  )
}

export default Page
