'use client'

import { atom } from 'jotai'
import React from 'react'
import Counter from './counter'

export const counterAtom = atom(0)

const Page = () => {
    return (
        <div className='h-screen w-screen flex justify-center items-center'>
            <Counter />
        </div>
    )
}

export default Page
