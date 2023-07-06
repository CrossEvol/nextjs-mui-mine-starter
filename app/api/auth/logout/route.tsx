import { faker } from '@faker-js/faker'
import { NextResponse } from 'next/server'

export async function GET() {
    const data = {
        userKey: faker.string.alphanumeric(10),
    }

    return NextResponse.json({ data })
}
