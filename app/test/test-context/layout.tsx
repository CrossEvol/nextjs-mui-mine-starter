import { ChildrenProps } from '@/types/ChildrenProps'
import React from 'react'

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className='flex justify-center h-screen items-center'>
            {children}
        </div>
    )
}

export default Layout
