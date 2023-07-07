import { useDelTodo, useQueryTodos } from '@/lib/todos4Client'
import { Todo } from '@/types/todos'
import { Box } from '@mui/material'

interface TodosQueryProps {
    data: Todo[]
    isLoading: boolean
}

const TodosQuery = ({ data, isLoading }: TodosQueryProps) => {
    // const { data, isLoading } = useQueryTodos()
    const mutation = useDelTodo()

    if (isLoading) return <span>Loading...</span>

    return (
        <Box
            sx={{
                width: '100%',
                height: '100%',
            }}
        >
            {data.map((todo) => (
                <div style={{ display: 'flex' }} key={todo.id}>
                    <div>
                        {todo.id} : : {todo.title}
                    </div>
                    <button
                        style={{ marginLeft: 100 }}
                        onClick={() => mutation.mutate(todo.id)}
                    >
                        Del Todo
                    </button>
                </div>
            ))}
            {mutation.isLoading && 'Removing todo...'}
            {mutation.isError && (
                <div>An error occurred: {mutation.error.message}</div>
            )}
            {mutation.isSuccess && <div>Todo Removed!</div>}
        </Box>
    )
}

export default TodosQuery
