import { faker } from '@faker-js/faker'

export type TodoItem = {
    id: number
    title: string
}

export const getTodos = async () => {
    return TodoStore.getInstance().list
}

export const addTodoItem = async (todos: TodoItem) => {
    TodoStore.getInstance().list.push(todos)
}

export const delTodoItem = async (id: number) => {
    TodoStore.getInstance().list = TodoStore.getInstance().list.filter(
        (t) => t.id !== id
    )
}


export class TodoStore {
    list: any[]

    private static singleton?: TodoStore

    private constructor() {
        this.list = []
    }

    public static resetInstance(): void {
        this.singleton = undefined
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
