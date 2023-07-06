import { useState } from 'react'
import { useForm } from 'react-hook-form'
import {
    TextField,
    Button,
    InputAdornment,
    IconButton,
    FormControlLabel,
    Switch,
} from '@mui/material'
import VisibilityIcon from '@mui/icons-material/Visibility'
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff'
import { getCaptcha, loginByPwd, useQueryCaptcha } from '@/lib/auth'
import { queryClient } from '@/apis/client'
import Cookies from 'js-cookie'
import { useRouter } from 'next/navigation'

type FormInputs = {
    account: string
    password: string
    captcha: string
}

function UsernameLoginForm() {
    const router = useRouter()
    const { data, isLoading } = useQueryCaptcha()
    const [showPassword, setShowPassword] = useState(false)
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<FormInputs>()

    const onSubmit = async (data: FormInputs) => {
        console.log(data)
        const account = getValues('account')
        const password = getValues('password')
        const captcha = getValues('captcha')
        const userKey = await loginByPwd(account, password, captcha)
        Cookies.set('user-key', userKey)
        router.push('/login/success')
        // router.back()
    }

    const handleClickCaptcha = () => {
        queryClient.invalidateQueries({
            queryKey: ['captcha'],
        })
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <TextField
                id='account'
                label='手机/邮箱/用户名'
                fullWidth
                sx={{ mb: 2 }}
                {...register('account', { required: true })}
                error={!!errors.account}
                helperText={errors.account ? '此项不能为空' : ''}
            />
            <TextField
                id='password'
                label='密码'
                fullWidth
                sx={{ mb: 2 }}
                type={showPassword ? 'text' : 'password'}
                {...register('password', { required: true, minLength: 4 })}
                error={!!errors.password}
                helperText={errors.password ? '密码不能少于4个字符' : ' '}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position='end'>
                            <IconButton
                                aria-label='toggle password visibility'
                                onClick={() => setShowPassword(!showPassword)}
                                onMouseDown={(e) => e.preventDefault()}
                            >
                                {showPassword ? (
                                    <VisibilityOffIcon />
                                ) : (
                                    <VisibilityIcon />
                                )}
                            </IconButton>
                        </InputAdornment>
                    ),
                }}
            />
            <TextField
                id='captcha'
                label='验证码'
                fullWidth
                sx={{ mb: 2 }}
                {...register('captcha', { required: true })}
                error={!!errors.captcha}
                helperText={errors.captcha ? '验证码不能为空' : ''}
                InputProps={{
                    endAdornment: (
                        <InputAdornment
                            position='end'
                            onClick={() => console.log('click')}
                        >
                            {!isLoading && (
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: data.svg,
                                    }}
                                    onClick={handleClickCaptcha}
                                />
                            )}
                        </InputAdornment>
                    ),
                }}
            />
            <Button
                variant='outlined'
                color='primary'
                type='submit'
                fullWidth
                size='large'
            >
                登 录
            </Button>
        </form>
    )
}

export default UsernameLoginForm
