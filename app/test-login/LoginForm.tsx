import { Button, TextField, Typography } from '@mui/material'
import axios from 'axios'
import { useContext } from 'react'
import { useForm } from 'react-hook-form'
import { TestLoginContext } from './layout'

interface FormInputs {
    username: string
    password: string
}

function LoginForm() {
    const { updateData } = useContext(TestLoginContext)
    const {
        register,
        handleSubmit,
        getValues,
        formState: { errors },
    } = useForm<FormInputs>()
    const onSubmit = async (data: FormInputs) => {
        const username = getValues('username')
        const password = getValues('password')
        console.log('getValues => ', JSON.stringify({ username, password }))
        const res = await axios.post('http://localhost:3000/api/auth/login', {
            username,
            password,
        })
        console.log(res.data)
        updateData(res.data.data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <Typography variant='h6'>Login</Typography>
            <TextField
                sx={{ m: 3 }}
                {...register('username')}
                label='Username'
                error={!!errors.username}
                helperText={errors.username?.message}
            />
            <br />
            <TextField
                sx={{ m: 3 }}
                {...register('password')}
                label='Password'
                type='password'
                error={!!errors.password}
                helperText={errors.password?.message}
            />
            <br />
            <Button type='submit' color='primary' variant='outlined'>
                Submit
            </Button>
        </form>
    )
}

export default LoginForm
