import request from './request'

type Album = {
    userId: number
    id: number
    title: string
}

describe('RequestTest', () => {
    it('defined', () => {
        expect(request).toBeDefined()
    })

    it('get', async () => {
        const result = await request.get<Album>(
            'https://jsonplaceholder.typicode.com/albums/1'
        )
        expect(result.status).toEqual(200)
        expect(result.data.id).toEqual(1)
        expect(result.data.userId).toEqual(1)
        expect(result.data.title.length).toBeGreaterThan(10)
    }, 60000)

    it('post', async () => {
        const title = 'hello'
        const result = await request.post<Album>(
            'https://jsonplaceholder.typicode.com/albums',
            { title },
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }
        )
        expect(result.status).toEqual(201)
        expect(result.data.id).toEqual(101)
        expect(result.data.title).toEqual(title)
    }, 60000)

    it('put', async () => {
        const targetId = 99
        const title = 'hello'
        const result = await request.put<Album>(
            `https://jsonplaceholder.typicode.com/albums/${targetId}`,
            { title },
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }
        )
        expect(result.status).toEqual(200)
        expect(result.data.id).toEqual(targetId)
        expect(result.data.title).toEqual(title)
    }, 60000)

    it('put', async () => {
        const targetId = 99
        const title = 'hello'
        const result = await request.put<Album>(
            `https://jsonplaceholder.typicode.com/albums/${targetId}`,
            { title },
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }
        )
        expect(result.status).toEqual(200)
        expect(result.data.id).toEqual(targetId)
        expect(result.data.title).toEqual(title)
    }, 60000)

    it('delete', async () => {
        const targetId = 90
        const result = await request.delete<Album>(
            `https://jsonplaceholder.typicode.com/albums/${targetId}`,
            {
                headers: {
                    'Content-Type': 'application/json; charset=UTF-8',
                },
            }
        )
        expect(result.status).toEqual(200)
        expect(result.data).toEqual({})
    }, 60000)
})
