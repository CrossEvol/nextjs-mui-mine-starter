import axios from 'axios'
import Cookies from 'js-cookie'
import { useQuery } from '@tanstack/react-query'

export const getUserInfo = async () => {
    const userKey = Cookies.get('user-key')
    console.log(userKey)
    return fetch('http://localhost:3000/api/auth/profile', {
        credentials: 'include',
        headers: {
            Cookie: 'user-key=' + userKey,
        },
    }).then((res) => res.json())
}

export const useQueryUserInfo = () => {
    return useQuery(['userinfo'], getUserInfo)
}
