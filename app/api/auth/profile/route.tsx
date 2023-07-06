import { faker } from '@faker-js/faker'
import { NextResponse } from 'next/server'

export async function GET() {
    const data = {
        id: 1,
        username: faker.internet.userName(),
        avatar: faker.internet.avatar(),
    }

    return NextResponse.json({ data })
}
