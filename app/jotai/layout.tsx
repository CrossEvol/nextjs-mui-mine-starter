import React, { PropsWithChildren } from 'react'
import JotaiProvider from './jotai-provider'

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <JotaiProvider>{children}</JotaiProvider>
        </>
    )
}

export default Layout
