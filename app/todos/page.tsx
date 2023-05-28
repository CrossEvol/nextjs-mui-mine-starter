'use client'

import React from 'react'
import Todos from './Todos'
import { QueryClientProvider } from '@tanstack/react-query'
import { queryClient } from '@/apis/client'

const Page = () => {
    return (
        <>
            <QueryClientProvider client={queryClient}>
                <Todos />
            </QueryClientProvider>
        </>
    )
}

export default Page
