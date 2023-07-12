'use client'

import { sendPosition } from '@/lib/geo'
import { Button, Stack, Typography } from '@mui/material'
import React, { useState } from 'react'

const Page = () => {
    const [latitude, setLatitude] = useState(0.0)
    const [longitude, setLongitude] = useState(0.0)

    const handleClick = () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const { latitude, longitude } = position.coords
                console.log(latitude)
                setLatitude(latitude)
                console.log(longitude)
                setLongitude(longitude)
                sendPosition(latitude, longitude)
            },
            (error) => {
                console.log(error)
            }
        )
    }

    return (
        <Stack spacing={0} direction={'column'}>
            <Button variant='outlined' onClick={handleClick}>
                获取地理位置信息
            </Button>
            <Typography variant='button' gutterBottom>
                经度为: {latitude}, 纬度为:{longitude}
            </Typography>
        </Stack>
    )
}

export default Page
