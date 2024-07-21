'use client'

import React, { createContext, PropsWithChildren, useState } from 'react'

type UserContextProps = {
    user: DummyUser | null | undefined
    setUser: React.Dispatch<React.SetStateAction<DummyUser | undefined>>
}

export const UserContext = createContext<UserContextProps>({
    user: null,
    setUser: () => {},
})

type User = {
    id: number
    username: string
    avatar: string
}

const Layout = ({ children }: PropsWithChildren) => {
    const [user, setUser] = useState<DummyUser>()

    return (
        <>
            <UserContext.Provider value={{ user, setUser }}>
                {children}
            </UserContext.Provider>
        </>
    )
}

export default Layout
