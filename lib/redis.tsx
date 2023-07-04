import { redisUrl } from '@/config/redis.config'
import { createClient } from 'redis'

/* 
    TODO: the callback funtion here which I dont know how to define
*/
export const getRedisValue = async (key: string, callback: Function) => {
    const client = createClient({ url: redisUrl })
    client.on('error', (err) => console.log('Redis Client Error', err))
    await client.connect()
    const todosStr = await client.get(key)
    if (todosStr === null || todosStr === '' || todosStr.length === 0) {
        callback()
    }
    await client.disconnect()
    return JSON.parse(todosStr as string)
}

export const setRedisValue = async (key: string, value: any) => {
    const client = createClient({ url: redisUrl })
    client.on('error', (err) => console.log('Redis Client Error', err))
    await client.connect()
    await client.set(key, JSON.stringify(value))
    await client.disconnect()
}
