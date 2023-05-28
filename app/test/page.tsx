'use client'

import React from 'react'
import SwiperCard from './SwiperCard'
import CustomDialog from './CustomDialog'
import { Button } from '@mui/material'
import ClickableChips from './ClickableChips'
import TestContext from './testContext'

const Test = () => {
    const [open, setOpen] = React.useState(false)

    const handleClickOpen = () => {
        setOpen(true)
    }
    const handleClose = () => {
        setOpen(false)
    }

    return (
        <>
            {/* <SwiperCard /> */}
            {/* <Button variant='outlined' onClick={handleClickOpen}>
                Open dialog
            </Button>
            <CustomDialog open={open} handleClose={handleClose}/> */}
            {/* <ClickableChips /> */}
            <TestContext />
        </>
    )
}

export default Test
