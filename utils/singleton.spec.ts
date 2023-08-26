import {singleton} from './singleton'

describe('SingletonTests', () => {
  it('should declare singleton', () => {
    const single = singleton()

    const instance1 = single.getInstance()
    const instance2 = single.getInstance()

    const name = '欧阳锋'

    instance1.name = name

    expect(instance1).toEqual(instance2)
    expect(instance1.name).toBe(name)
    expect(instance2.name).toBe(name)
  })
})
