import { Todo } from '@/types/todos'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { queryClient } from './client'



const fetchTodos = () => {
    return fetch('http://localhost:3000/api/todos').then((res) => res.json())
}

export const useQueryTodos = () => {
    return useQuery<Todo[]>(['todos'], fetchTodos)
}

const delTodo = (id: number) => {
    return fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'DELETE',
    })
}

export const useDelTodo = () => {
    return useMutation({
        mutationFn: delTodo,
        onSuccess: () => {
            console.log('removed success...')
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
        onError: () => {
            console.log('error occured...')
        },
    })
}
