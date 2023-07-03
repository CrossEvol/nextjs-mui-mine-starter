import { getTodos } from '@/lib/todos'
import { NextResponse } from 'next/server'

type Identifier = string | number

/* 
TODO:两个方法都产生了闭包,无法获取最新的 todos 的值
*/

export async function GET(
    request: Request,
    { params }: { params: { id: Identifier } }
) {
    const id = params.id
    const todos = await getTodos()
    const todoItem = todos.find((t) => t.id == id)
    return NextResponse.json({ todoItem })
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: Identifier } }
) {
    const id = params.id
    const todos = await getTodos()
    todos.splice(
        todos.findIndex((t) => t.id == id),
        1
    )

    return NextResponse.json({ count: todos.length })
}
