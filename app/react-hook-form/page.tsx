import { readDir } from '@/web/file'
import Link from 'next/link'
import React from 'react'

const Page =async () => {
  const dirItems = await readDir('./app/react-hook-form', /app\\react\-hook\-form\\/)
  console.log(dirItems)

  return (
      <div className='flex min-h-screen flex-col items-start  p-24 justify-start h'>
          {dirItems.map((d) => (
              <button
                  key={d.id}
                  className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-1 w-96'
              >
                  <Link href={d.path}>{d.title}</Link>
              </button>
          ))}
      </div>
  )
}

export default Page