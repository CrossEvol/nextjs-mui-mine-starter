import { useQuery } from '@tanstack/react-query'
import axios from 'axios'
import Cookies from 'js-cookie'
import { queryClient } from './client'
import { mockApiUrl } from '@/config/url.config'

export const logout = async () => {
    return (await fetch(`${mockApiUrl}/auth/logout`, {})).json()
}
