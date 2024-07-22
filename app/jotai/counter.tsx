import AddIcon from '@mui/icons-material/Add'
import RemoveIcon from '@mui/icons-material/Remove'
import { Button } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import Stack from '@mui/material/Stack'
import { counterAtom } from './page'
import { useAtom } from 'jotai'

const Counter = () => {
    const [count, setCount] = useAtom(counterAtom)

    return (
        <div>
            <Stack direction='row' spacing={2}>
                <IconButton
                    aria-label='add'
                    color='primary'
                    size='large'
                    onClick={() => setCount(count + 1)}
                >
                    <AddIcon />
                </IconButton>
                <Button variant='contained' size='large'>
                    {count}
                </Button>
                <IconButton
                    aria-label='remove'
                    color='primary'
                    size='large'
                    onClick={() => setCount(count - 1)}
                >
                    <RemoveIcon />
                </IconButton>
            </Stack>
        </div>
    )
}

export default Counter
