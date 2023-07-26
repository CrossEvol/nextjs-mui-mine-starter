'use client'

import { useAppDispatch, useAppSelector } from '@/store/hook'
import { store } from '@/store/store'
import { ChildrenProps } from '@/types/ChildrenProps'
import { useEffect } from 'react'
import { Provider } from 'react-redux'

const Layout = ({ children }: ChildrenProps) => {
    return (
        <>
            <Provider store={store}>{children}</Provider>
        </>
    )
}

export default Layout
