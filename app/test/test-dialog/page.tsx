'use client'

import { Button } from '@mui/material'
import React from 'react'
import CustomDialog from './CustomDialog'

const Page = () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }
    return (
        <div>
            <Button variant='outlined' onClick={handleClickOpen}>
                Open dialog
            </Button>
            <CustomDialog open={open} handleClose={handleClose} />
        </div>
    )
}

export default Page
