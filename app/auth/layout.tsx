'use client'

import { ChildrenProps } from '@/types/ChildrenProps'
import React, { createContext, useState } from 'react'

export const UserContext = createContext({
    user: {} as User | undefined,
    setUser: (() => {}) as React.Dispatch<
        React.SetStateAction<User | undefined>
    >,
})

type User = {
    id: number
    username: string
    avatar: string
}

const Layout = ({ children }: ChildrenProps) => {
    const [user, setUser] = useState<User>()

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default Layout
