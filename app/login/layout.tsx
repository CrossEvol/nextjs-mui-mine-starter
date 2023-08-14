'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import LoginTopBar from './LoginTopBar'
import LoginContainer from './LoginContainer'
import { ChildrenProps } from '@/types/ChildrenProps'

export default function Layout({ children }: ChildrenProps) {
    return <LoginContainer>{children}</LoginContainer>
}
