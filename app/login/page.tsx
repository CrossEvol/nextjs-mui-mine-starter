'use client'

import {
    Card,
    CardHeader,
    Typography,
    CardContent,
    CardActions,
    Button,
} from '@mui/material'
import React from 'react'
import LoginTabs from './LoginTabs'
import { QueryClientProvider } from '@tanstack/react-query'
import LoginContainer from './LoginContainer'
import { queryClient } from '@/lib/client'

const Login = () => {
    return (
        <QueryClientProvider client={queryClient}>
            <Card sx={{ maxWidth: '100%', maxHeight: '100%' }}>
                <CardHeader
                    title={
                        <Typography variant='h3' gutterBottom>
                            Register && Sign
                        </Typography>
                    }
                    sx={{
                        textAlign: 'center',
                    }}
                />
                <CardContent>
                    <LoginTabs />
                </CardContent>
                <CardActions
                    sx={{ flexDirection: 'column', alignItems: 'center' }}
                >
                    {/* 这行需要根据tabs选中的值显示与隐藏 */}
                    <Typography variant='body2' sx={{ ml: 2, mr: 2 }}>
                        温馨提示：未注册硅谷外卖帐号的手机号，登录时将自动注册，且代表已同意
                        <Button color='success'>《用户服务协议》</Button>
                    </Typography>
                    <Button variant='text' fullWidth color='info'>
                        关于我们
                    </Button>
                </CardActions>
            </Card>
        </QueryClientProvider>
    )
}

export default Login
