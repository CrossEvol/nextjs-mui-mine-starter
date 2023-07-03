'use client'

import { DirItemWithChildren } from '@/lib/file'
import Link from 'next/link'
import React, { useEffect } from 'react'

interface Props {
    dirItems: DirItemWithChildren[]
}

interface SubMenuProps {
    dirItem: DirItemWithChildren
}

export const SubMenu = ({ dirItem }: SubMenuProps) => {
    const { level, title, isLeaf, id } = dirItem

    useEffect(() => {
        console.log(dirItem.isLeaf)

        return () => {}
    }, [])

    if (isLeaf === false) {
        return (
            <>
                <div
                    key={id}
                    style={{
                        fontSize: `${20 * (4 - level)}px`,
                        fontWeight: 400 * (4 - level),
                    }}
                >
                    {title}
                    {dirItem.children && dirItem.children.length > 0
                        ? dirItem.children.map((i) => (
                              <SubMenu key={i.id} dirItem={i} />
                          ))
                        : null}
                </div>
            </>
        )
    }

    if (isLeaf === true) {
        return (
            <div style={{ fontSize: '24px', fontWeight: 400 }} key={id}>
                <Link href={id.replaceAll('\\', '/')}>{title}</Link>
            </div>
        )
    }

    return null
}

const NestedDir = ({ dirItems }: Props) => {
    return (
        <>
            <h1 style={{ fontSize: 50, textAlign: 'center' }}>
                React Hook Form
            </h1>
            {dirItems.map((dirItem) => {
                return <SubMenu key={dirItem.id} dirItem={dirItem} />
            })}
        </>
    )
}

export default NestedDir
