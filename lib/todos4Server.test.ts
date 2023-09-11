import { isEqual } from 'lodash'
import { TodoStore } from './todos4Server'

describe('TodosTests', () => {
    beforeEach(() => {
        TodoStore.resetInstance()
    })

    it('Singleton add new TodoItem', () => {
        const instance1 = TodoStore.getInstance()
        const instance2 = TodoStore.getInstance()
        instance1.list.push('a')
        instance2.list.push('b')
        expect(instance1.list.length).toBe(14)
        expect(instance2.list.length).toBe(14)
        expect(isEqual(instance1.list, instance2.list)).toBeTruthy()
    })

    it('Singleton remove todoItem', () => {
        const instance1 = TodoStore.getInstance()
        const instance2 = TodoStore.getInstance()
        instance1.list = instance1.list.filter((t) => t.id !== 1)
        expect(instance1.list.length).toBe(11)
        expect(instance2.list.length).toBe(11)
        expect(isEqual(instance1.list, instance2.list)).toBeTruthy()
        instance2.list = instance2.list.filter((t) => t.id !== 2)
        expect(instance1.list.length).toBe(10)
        expect(instance2.list.length).toBe(10)
        expect(isEqual(instance1.list, instance2.list)).toBeTruthy()
    })
})
