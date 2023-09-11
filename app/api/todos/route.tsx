import {
    TodoItem,
    addTodoItem,
    delTodoItem,
    getTodos,
} from '@/lib/todos4Server'
import { faker } from '@faker-js/faker'
import { NextRequest, NextResponse } from 'next/server'

// Todo.TodoStore.getInstance()

export async function GET() {
    const todos = await getTodos()
    return NextResponse.json(todos)
}

export async function POST(request: Request) {
    const res = await request.json()
    await addTodoItem(res)
    return NextResponse.json({ res })
}

export async function DELETE(request: NextRequest) {
    const id = request.nextUrl.searchParams.get('id')
    console.log(id)
    await delTodoItem(Number(id))
    const todos = await getTodos()
    return NextResponse.json({ count: todos.length })
}
