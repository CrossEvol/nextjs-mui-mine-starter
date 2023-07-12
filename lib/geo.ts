import { mockApiUrl } from '@/config/url.config'
import axios from 'axios'

export const sendPosition = async (latitude: number, longitude: number) => {
    const res = await axios.get(
        `${mockApiUrl}/geo?lat=${latitude}&log=${longitude}`
    )
    return res.data
}
