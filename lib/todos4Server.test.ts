import { TodoStore } from './todos4Server'

describe('TodosTests', () => {
    it('should singleton', () => {
        const instance1 = TodoStore.getInstance()
        const instance2 = TodoStore.getInstance()
        instance1.list.push('a')
        instance2.list.push('b')
        expect(instance1.list.length).toBe(14)
        expect(instance2.list.length).toBe(14)
    })

    it('should remove', () => {
        const instance1 = TodoStore.getInstance()
        const instance2 = TodoStore.getInstance()
        instance1.list = instance1.list.filter((t) => t.id !== 1)
        expect(instance1.list.length).toBe(11)
        expect(instance2.list.length).toBe(11)
    })
})
