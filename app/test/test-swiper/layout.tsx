import { ChildrenProps } from '@/types/ChildrenProps'
import React from 'react'

const Layout = ({ children }: ChildrenProps) => {
    return (
        <div className=''>
            {children}
        </div>
    )
}

export default Layout
