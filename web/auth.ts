import { mockApiUrl } from '@/config/url.config'

export const logout = async () => {
    return (await fetch(`${mockApiUrl}/auth/logout`, {})).json()
}
