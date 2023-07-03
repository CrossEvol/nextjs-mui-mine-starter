import React from 'react'
import NestedDir from './NestedDir'
import { readDirRecursively } from '@/lib/file'

const page = async () => {
    const dirItems = await readDirRecursively()

    return (
        <div>
            <NestedDir dirItems={dirItems} />
        </div>
    )
}

export default page
