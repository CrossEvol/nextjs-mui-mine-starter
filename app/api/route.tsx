import { NextResponse } from 'next/server'

export async function GET() {
    const data = 'hello, next api'

    return NextResponse.json({ data })
}
