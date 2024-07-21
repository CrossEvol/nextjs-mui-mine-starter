'use client'

import { Box, CircularProgress, Container, Typography } from '@mui/material'
import {
    QueryClient,
    QueryClientProvider,
    useQuery,
} from '@tanstack/react-query'

const queryClient = new QueryClient()

function Example() {
    const { isLoading, error, data } = useQuery<any, { message: any }>({
        queryKey: ['repoData'],
        queryFn: () =>
            fetch(
                'https://api.github.com/repos/tannerlinsley/react-query'
            ).then((res) => res.json()),
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

    return (
        <Container maxWidth='sm'>
            <Typography variant='h4' align='center' mt={4} mb={2}>
                {data.name}
            </Typography>
            <Typography variant='body1' align='center' mb={4}>
                {data.description}
            </Typography>
            <Box display='flex' justifyContent='space-around' mb={4}>
                <Typography variant='subtitle1'>
                    👀 {data.subscribers_count}
                </Typography>
                <Typography variant='subtitle1'>
                    ✨ {data.stargazers_count}
                </Typography>
                <Typography variant='subtitle1'>
                    🍴 {data.forks_count}
                </Typography>
            </Box>
        </Container>
    )
}

export default function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <Example />
        </QueryClientProvider>
    )
}
