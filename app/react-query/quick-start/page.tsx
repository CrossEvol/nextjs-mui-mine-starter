'use client'

import {
    Box,
    Button,
    CircularProgress,
    IconButton,
    List,
    ListItem,
    ListItemSecondaryAction,
    ListItemText,
    Paper,
    Typography,
    styled,
} from '@mui/material'
import {
    useQuery,
    useMutation,
    useQueryClient,
    QueryClient,
    QueryClientProvider,
    QueryFunctionContext,
} from '@tanstack/react-query'
import React from 'react'
import DeleteIcon from '@mui/icons-material/Delete'
import { useEffect } from 'react'

interface TodoItem {
    id: number
    title: string
}

export const getTodos = async () => {
    const response = await fetch('http://localhost:3000/api/todos')
    return await response.json()
}

export const postTodo = async (data: TodoItem) => {
    await fetch('http://localhost:3000/api/todos', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    })
}

export const deleteTodo = async (id: number) => {
    await fetch(`http://localhost:3000/api/todos/${id}`, {
        method: 'DELETE',
    })
}

// Create a client
const queryClient = new QueryClient()

const StyledPaper = styled(Paper)({
    margin: '1rem',
    padding: '1rem',
})

export default function App() {
    return (
        // Provide the client to your App
        <QueryClientProvider client={queryClient}>
            <Todos />
        </QueryClientProvider>
    )
}

function Todos() {
    // Access the client
    const queryClient = useQueryClient()

    // Queries
    const { isLoading, error, data } = useQuery({
        queryKey: ['todos'],
        queryFn: getTodos,
    })

    // Mutations
    const deleteMutation = useMutation(deleteTodo, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })

    // Mutations
    const addMutation = useMutation(postTodo, {
        onSuccess: () => {
            // Invalidate and refetch
            queryClient.invalidateQueries({ queryKey: ['todos'] })
        },
    })

    if (isLoading) {
        return (
            <Box display='flex' justifyContent='center' mt={4}>
                <CircularProgress />
            </Box>
        )
    }

    if (error) {
        return (
            <Typography color='error' variant='h6' align='center' mt={4}>
                An error has occurred: {error.message}
            </Typography>
        )
    }

    function handleDelete(id: number): void {
        deleteMutation.mutate(id)
    }

    if (!data || data.length == 0) {
        return null
    }
    return (
        <StyledPaper>
            <List>
                {(data.length > 10 ? data.splice(0, 10) : data).map((todo) => (
                    <ListItem key={todo.id} alignItems='flex-start'>
                        <ListItemText primary={todo.title} secondary={<></>} />
                        <ListItemSecondaryAction>
                            <IconButton
                                edge='end'
                                aria-label='delete'
                                onClick={() => handleDelete(todo.id)}
                            >
                                <DeleteIcon />
                            </IconButton>
                        </ListItemSecondaryAction>
                    </ListItem>
                ))}
            </List>
            <Button
                variant='outlined'
                color='secondary'
                onClick={() => {
                    addMutation.mutate({
                        id: Date.now(),
                        title:
                            Number(Date.now()).toString(36) +
                            Number(Math.random()).toString(36),
                    })
                }}
            >
                Add Todo
            </Button>
            <Button
                variant='outlined'
                color='secondary'
                onClick={() => {
                    addMutation.mutate({
                        id: Date.now(),
                        title:
                            Number(Date.now()).toString(36) +
                            Number(Math.random()).toString(36),
                    })
                }}
            >
                Add Todo
            </Button>
        </StyledPaper>
    )
}
