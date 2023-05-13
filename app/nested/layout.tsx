'use client'

import React from 'react'
import { ChildrenProps } from '../types/ChildrenProps'
import { CssBaseline, Container, Box } from '@mui/material'
import MyGrid from './MyGrid'

export const metadata = {
    title: 'Nested Router',
    description: 'test the sub layout for the nested page',
}

const Layout = ({ children }: ChildrenProps) => {
    return <MyGrid>{children}</MyGrid>
}

export default Layout
