// 'use client'

import { readDir } from '@/web/file'
import Link from 'next/link'

export default async function Home() {
  const dirItems = await readDir('./app', /app\\/)
  console.log(dirItems)

  return (
    <div className='flex min-h-screen flex-col items-start justify-start p-24'>
      {dirItems
        .filter((i) => i.title !== 'api')
        .map((d) => (
          <button
            key={d.id}
            className='mt-1 w-96 rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-700'>
            <Link href={d.path}>{d.title}</Link>
          </button>
        ))}
    </div>
  )
}
