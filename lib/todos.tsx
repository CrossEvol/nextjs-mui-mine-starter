import { faker } from '@faker-js/faker'

interface TodoItem {
    id: number
    title: string
}

let todos: TodoItem[]

const initTodos = () => {
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
    return todos
}

export const getTodos = async () => {
    if (!todos || todos.length === 0) {
        todos = initTodos()
    }
    return todos
}
