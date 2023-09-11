import { addTodoItem, getTodos, setTodos } from '@/lib/todos4Server'
import { faker } from '@faker-js/faker'
import { NextResponse } from 'next/server'

export async function GET() {
    const todos = await getTodos()
    return NextResponse.json(todos)
}

export async function POST(request: Request) {
    const res = await request.json()
    await addTodoItem(res)
    return NextResponse.json({ res })

    // const res = await request.json()
    // const todos = await getTodos()
    // todos.push(res)
    // await setTodos(todos)
    // return NextResponse.json({ res })
}
