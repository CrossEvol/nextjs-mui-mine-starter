import { getTodos } from '@/lib/todos'
import { faker } from '@faker-js/faker'
import { NextResponse } from 'next/server'

export async function GET() {
    const todos = await getTodos()
    return NextResponse.json(todos)
}

export async function POST(request: Request) {
    const res = await request.json()
    const todos = await getTodos()
    todos.push(res)
    return NextResponse.json({ res })
}
