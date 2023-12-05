'use client'

import { logout } from '@/web/auth'
import { Button, Stack, Typography } from '@mui/material'
import { useRouter } from 'next/navigation'
import { useContext } from 'react'
import { UserContext } from '../layout'

interface Props {}

const LoginSuccess = ({}: Props) => {
    const router = useRouter()
    const { user, setUser } = useContext(UserContext)
    
    if (user) {
        return (
            <div className='w-full'>
                <Stack spacing={2} direction='column'>
                    <Typography variant='button' display='block' gutterBottom>
                        {user.username}
                    </Typography>
                    <Button
                        variant='outlined'
                        onClick={() => {
                            logout()
                            setUser(undefined)
                        }}
                        fullWidth
                    >
                        登 出
                    </Button>
                </Stack>
            </div>
        )
    }

    return (
        <div className='w-full'>
            <Stack spacing={2} direction='column'>
                <Typography variant='button' display='block' gutterBottom>
                    您尚未登录
                </Typography>
                <Button
                    variant='outlined'
                    onClick={() => router.push('/auth/sign-in')}
                    fullWidth
                >
                    去登录
                </Button>
            </Stack>
        </div>
    )
}

export default LoginSuccess
