import { createContext, useContext, useEffect, useState } from 'react'
/* 

    并没有发现相关组件重新渲染，只有数据发生了变化
*/

// 创建 context
const MyContext = createContext({ data: ' ', updateData: (a: any) => {} })

// 祖先组件
function Ancestor() {
    const [ancestorData, setAncestorData] = useState('initial value')

    useEffect(() => {
        console.log('祖先组件重新渲染了。。。')
        return () => {}
    }, [])

    return (
        <MyContext.Provider
            value={{ data: ancestorData, updateData: setAncestorData }}
        >
            <button onClick={() => setAncestorData('initial value')}>
                Init Data
            </button>
            <Parent />
        </MyContext.Provider>
    )
}

// 父组件
function Parent() {
    useEffect(() => {
        console.log('父组件重新渲染了。。。')

        return () => {}
    }, [])

    return <Child />
}

// 子组件
function Child() {
    const { data, updateData } = useContext(MyContext)

    useEffect(() => {
        console.log('子组件重新渲染。。')
        return () => {}
    }, [])

    return (
        <div>
            {/* 展示数据 */}
            <p>Data from ancestor: {data}</p>
            {/* 调用 updateData 方法更新数据 */}
            <button onClick={() => updateData('new data')}>Update Data</button>
        </div>
    )
}

export default Ancestor
