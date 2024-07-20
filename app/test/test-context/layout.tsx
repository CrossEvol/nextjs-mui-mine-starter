import { ChildrenProps } from '@/types/ChildrenProps'
import React from 'react'

const Layout = ({ children }: ChildrenProps) => {
  return (
    <div className='flex h-screen items-center justify-center'>{children}</div>
  )
}

export default Layout
