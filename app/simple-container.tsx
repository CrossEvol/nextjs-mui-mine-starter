'use client'

import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export default function SimpleContainer({ children }: React.PropsWithChildren) {
    return (
        <React.Fragment>
            <CssBaseline />
            <Container
                maxWidth='xl'
                sx={{ position: 'relative', overflow: 'hidden' }}
            >
                <Box
                    sx={{
                        height: '100%',
                        position: 'relative',
                    }}
                >
                    {children}
                </Box>
            </Container>
        </React.Fragment>
    )
}
