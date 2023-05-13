'use client'

import Image from 'next/image'
import styles from './page.module.css'
import { Stack, Button, Typography } from '@mui/material'
import Link from 'next/link'

export default function Home() {
    return (
        <Stack spacing={2} direction='column'>
            <Stack spacing={2} direction='column'>
                <Button LinkComponent={Link} href='/about' variant='contained'>
                    ABOUT
                </Button>
                <Typography variant='button' display='block' gutterBottom>
                    Link to the About Page
                </Typography>
            </Stack>
            <Stack spacing={2} direction='column'>
                <Button LinkComponent={Link} href='/detail' variant='contained'>
                    Detail
                </Button>
                <Typography variant='button' display='block' gutterBottom>
                    Link to the Detail Page
                </Typography>
            </Stack>
        </Stack>
    )
}
