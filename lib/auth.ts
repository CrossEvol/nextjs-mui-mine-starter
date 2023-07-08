import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { queryClient } from './client'
import { mockApiUrl } from '@/config/url.config'

export const sendSmsCode = (phone: string) => {
    return fetch(`http://localhost:8000/mobile-user/send-code?phone=${phone}`, {
        method: 'GET',
    }).then((res) => {
        console.log(res.json())
        return res.json()
    })
}

export const loginBySms = async (phone: string, code: string) => {
    const res = await axios.post(`${mockApiUrl}/auth/login-sms`, {
        phone,
        code,
    })
    console.log('loginBySms::', res)
    return res.data.data.userKey
}

export const loginByPwd = async (
    account: string,
    password: string,
    captcha: string
) => {
    const res = await axios.post(`${mockApiUrl}/auth/login-pwd`, {
        account,
        password,
        captcha,
    })
    console.log('loginByPwd::', res)
    return res.data.data.userKey
}

export const getCaptcha = () => {
    return fetch(`${mockApiUrl}/auth/captcha`, {
        method: 'GET',
    }).then((res) => res.json())
}

export const useQueryCaptcha = () => {
    return useQuery(['captcha'], getCaptcha)
}

// TODO:  how can i prevent refetching
export const logout = async () => {
    const userKey = Cookies.get('user-key')
    console.log(userKey)
    return fetch(`${mockApiUrl}/auth/logout`, {
        credentials: 'include',
        headers: {
            Cookie: 'user-key=' + userKey,
        },
    }).then(() => {
        Cookies.remove('user-key')
        queryClient.invalidateQueries(['userinfo'])
    })
}
