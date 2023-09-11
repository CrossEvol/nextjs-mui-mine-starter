import { redisUrl } from '@/config/redis.config'
import { faker } from '@faker-js/faker'
import { createClient } from 'redis'

export type TodoItem = {
    id: number
    title: string
}

const initTodos = async () => {
    const todos: any[] = []
    // Create 1000 todos
    for (let i = 1; i <= 12; i++) {
        todos.push({
            id: i,
            title: faker.lorem.sentence({ min: 3, max: 5 }),
            score: faker.number.int({ min: 50, max: 500 }),
            status: faker.helpers.arrayElement(['todo', 'doing', 'done']),
            createdAt: faker.date.past(),
            updatedAt: faker.date.recent(),
            deadline: faker.date.future(),
            priority: faker.helpers.arrayElement(['high', 'medium', 'low']),
            tags: faker.lorem.words({ min: 3, max: 7 }),
            content: faker.lorem.paragraph({ min: 10, max: 20 }),
            creator: faker.helpers.arrayElement(['king', 'queue', 'jack']),
            assignee: faker.helpers.arrayElement(['king', 'queue', 'jack']),
        })
    }

    await setTodos(todos)
}

export const getTodos = async () => {
    return TodoStore.getInstance().list
    // const client = createClient({ url: redisUrl })
    // client.on('error', (err) => console.log('Redis Client Error', err))
    // await client.connect()
    // const todosStr = await client.get('todos')
    // if (todosStr === null || todosStr === '' || todosStr.length === 0) {
    //     await initTodos()
    // }
    // await client.disconnect()
    // return JSON.parse(todosStr as string)
}

export const addTodoItem = async (todos: TodoItem) => {
    TodoStore.getInstance().list.push(todos)
}

export const delTodoItem = async (todo_id: number) => {
    const instance = TodoStore.getInstance()
    instance.list = instance.list.filter((t) => t.id !== todo_id)
}

export const setTodos = async (todos: TodoItem[]) => {
    // const client = createClient({ url: redisUrl })
    // client.on('error', (err) => console.log('Redis Client Error', err))
    // await client.connect()
    // await client.set('todos', JSON.stringify(todos))
    // await client.disconnect()
}

export class TodoStore {
    list: any[]

    private static singleton: TodoStore

    private constructor() {
        this.list = []
    }

    public static getInstance(): TodoStore {
        if (!TodoStore.singleton) {
            TodoStore.singleton = new TodoStore()
            for (let i = 1; i <= 12; i++) {
                TodoStore.singleton.list.push({
                    id: i,
                    title: faker.lorem.sentence({ min: 3, max: 5 }),
                    score: faker.number.int({ min: 50, max: 500 }),
                    status: faker.helpers.arrayElement([
                        'todo',
                        'doing',
                        'done',
                    ]),
                    createdAt: faker.date.past(),
                    updatedAt: faker.date.recent(),
                    deadline: faker.date.future(),
                    priority: faker.helpers.arrayElement([
                        'high',
                        'medium',
                        'low',
                    ]),
                    tags: faker.lorem.words({ min: 3, max: 7 }),
                    content: faker.lorem.paragraph({ min: 10, max: 20 }),
                    creator: faker.helpers.arrayElement([
                        'king',
                        'queue',
                        'jack',
                    ]),
                    assignee: faker.helpers.arrayElement([
                        'king',
                        'queue',
                        'jack',
                    ]),
                })
            }
        }
        return TodoStore.singleton
    }
}
