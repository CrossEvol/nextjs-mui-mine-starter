import {
    TodoItem,
    TodoStore,
    delTodoItem,
    getTodos,
    setTodos,
} from '@/lib/todos4Server'
import { NextResponse } from 'next/server'
import { parse } from 'node:path/win32'
import { string } from 'yup'

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
    const todoItem = todos.find((t: TodoItem) => t.id == id)
    return NextResponse.json({ todoItem })
}

export async function DELETE(
    request: Request,
    { params }: { params: { id: string } }
) {
    const id = params.id
    // const todos = await getTodos()
    // todos.splice(
    //     todos.findIndex((t: TodoItem) => t.id == id),
    //     1
    // )
    // await setTodos(todos)
    console.log(id)
    console.log(typeof id)
    const todo_id = Number(id)
    await delTodoItem(todo_id)
    const todos = await getTodos()
    return NextResponse.json({ count: todos.length })
}
