'use client'

import React, { useContext, useEffect } from 'react'
import LoginForm from './LoginForm'
import { TestLoginContext } from './layout'
import { Avatar, Button, Typography } from '@mui/material'

const Page = () => {
    const { data, updateData } = useContext(TestLoginContext)

    useEffect(() => {
        console.log(data)
        return () => {}
    }, [data])

    if (data)
        return (
            <>
                <Typography variant='h3' gutterBottom>
                    登录成功
                </Typography>
                <Avatar alt='Remy Sharp' src={data?.avatar} />
                <Button variant='contained' onClick={() => updateData(null)}>
                    登 出
                </Button>
            </>
        )

    return (
        <>
            <LoginForm />
        </>
    )
}

export default Page
