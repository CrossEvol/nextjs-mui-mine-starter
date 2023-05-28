import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'
import { ChildrenProps } from '@/types/ChildrenProps'

export default function LoginContainer({ children }: ChildrenProps) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container maxWidth='lg'>
                <Box sx={{ bgcolor: '#cfe8fc', height: '80vh' }}>
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    )
}
