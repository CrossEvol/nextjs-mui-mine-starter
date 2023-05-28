import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { TextField, Button, InputAdornment } from '@mui/material'
import { useQuery } from 'react-query'
import { loginBySms, sendSmsCode } from '@/apis/auth'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

type FormInputs = {
    phone: string
    code: string
}

const SmsLoginForm = () => {
    const router = useRouter()
    const {
        register,
        getValues,
        handleSubmit,
        formState: { errors },
    } = useForm<FormInputs>()

    const onSubmit = async (data: FormInputs) => {
        console.log(data)
        const phone = getValues('phone')
        const code = getValues('code')
        const userKey = await loginBySms(phone, code)
        Cookies.set('user-key', userKey)
        router.back()
    }

    const handleSendCode = async () => {
        console.log(getValues('phone'))
        const phone = getValues('phone')
        await sendSmsCode(phone)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                id='phone'
                label='手机号'
                fullWidth
                sx={{ mb: 2 }}
                {...register('phone', { required: true })}
                error={!!errors.phone}
                helperText={errors.phone ? '手机号不能为空' : ''}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <Button
                                variant='outlined'
                                color='primary'
                                onClick={() => handleSendCode()}
                            >
                                获取验证码
                            </Button>
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                id='code'
                fullWidth
                sx={{ mb: 2 }}
                label='验证码'
                {...register('code', { required: true })}
                error={!!errors.code}
                helperText={errors.code ? '验证码不能为空' : ''}
            />
            <Button variant='contained' fullWidth size='large' type='submit'>
                Contained
            </Button>
        </form>
    )
}

export default SmsLoginForm
