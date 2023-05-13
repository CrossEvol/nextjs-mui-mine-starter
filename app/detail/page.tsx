'use client'

import { Button, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'

export default function Detail() {
    const router = useRouter()

    return (
        <>
            <Typography variant='h3' gutterBottom>
                Detail Page
            </Typography>
            <Button variant='contained' onClick={() => router.push('/')}>
                Bach to the HomePage
            </Button>
        </>
    )
}
