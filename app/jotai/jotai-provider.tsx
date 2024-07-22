'use client'

import { Provider } from 'jotai'
import { PropsWithChildren } from 'react'

export default function JotaiProvider({
    children,
}: Readonly<PropsWithChildren>) {
    return <Provider>{children}</Provider>
}
