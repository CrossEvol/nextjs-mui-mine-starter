'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { ChildrenProps } from '../../types/SimpleComponentProps'
import TodosTopBar from './TodosTopBar'

export default function SimpleContainer({ children }: ChildrenProps) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Box
                sx={{
                    bgcolor: 'white',
                    height: '100%',
                    width: '100%',
                    position: 'relative',
                    overflow: 'scroll',
                }}
            >
                <TodosTopBar />
                {children}
            </Box>
        </React.Fragment>
    )
}
