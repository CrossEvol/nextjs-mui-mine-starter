'use client'

import React, { useEffect } from 'react'
import Cookies from 'js-cookie'
import { Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { logout } from '@/lib/auth'

interface Props {}

const LoginSuccess = ({}: Props) => {
    const router = useRouter()
    const userKey = Cookies.get('user-key')

    if (userKey) {
        return (
            <div>
                <Stack spacing={2} direction='column'>
                    <Typography variant='button' display='block' gutterBottom>
                        {userKey}
                    </Typography>
                    <Button
                        variant='outlined'
                        onClick={() => {
                            logout()
                            router.refresh()
                        }}
                    >
                        登 出
                    </Button>
                </Stack>
            </div>
        )
    }

    return (
        <div>
            <Stack spacing={2} direction='column'>
                <Typography variant='button' display='block' gutterBottom>
                    userKey 为空, 用户未登录
                </Typography>
                <Button
                    variant='outlined'
                    onClick={() => router.push('/login')}
                >
                    去登录
                </Button>
            </Stack>
        </div>
    )
}

export default LoginSuccess
