import { faker } from '@faker-js/faker'
import { NextResponse } from 'next/server'
import { todos } from './todos'

export async function GET() {
    console.log(todos)
    return NextResponse.json({todos})
}

export async function POST(request: Request) {
    const res = await request.json()
    todos.push(res)
    return NextResponse.json({ res })
}
