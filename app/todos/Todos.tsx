'use client'

import React, { createContext } from 'react'
import TodosMain from './TodosMain'
import TodosQuery from './TodosQuery'
import { useQueryTodos } from '@/lib/todos4Client'
import { Todo } from '@/types/todos'

type TodosContext = {
    data: Todo[]
}

export const TodosContext = createContext<TodosContext>({ data: [] })

const Todos = () => {
    const { data, isLoading } = useQueryTodos()
    if (isLoading) return <span>Loading...</span>
    return (
        <TodosContext.Provider value={{ data: data as Todo[] }}>
            <TodosMain />
            <TodosQuery data={data as Todo[]} isLoading={isLoading} />
        </TodosContext.Provider>
    )
}

export default Todos
