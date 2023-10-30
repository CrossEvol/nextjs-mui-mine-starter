import { Todo } from '@/types/todos'
import { QueryClient, useMutation, useQuery } from '@tanstack/react-query'
import { queryClient } from './client'
import { mockApiUrl } from '@/config/url.config'

const fetchTodos = () => {
    return fetch(`${mockApiUrl}/todos`).then((res) => res.json())
}

export const useQueryTodos = () => {
    return useQuery<Todo[]>(['todos'], fetchTodos)
}

const delTodo = (id: number) => {
    return fetch(`${mockApiUrl}/todos/${id}`, {
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
