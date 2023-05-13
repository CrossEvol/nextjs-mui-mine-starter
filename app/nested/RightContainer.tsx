'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { ChildrenProps } from '../types/ChildrenProps'

export default function RightContainer({ children }: ChildrenProps) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='xl'>
                <Box sx={{ bgcolor: 'lightblue', height: '50vh' }}>
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    )
}
