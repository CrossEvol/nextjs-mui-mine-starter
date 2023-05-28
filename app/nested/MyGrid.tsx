'use client'

import * as React from 'react'
import { styled } from '@mui/material/styles'
import Box from '@mui/material/Box'
import Paper from '@mui/material/Paper'
import Grid from '@mui/material/Grid'
import LeftMenus from './LeftMenus'
import RightTabs from './RightContainer'
import { ChildrenProps } from '../../types/ChildrenProps'
import RightContainer from './RightContainer'

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}))

export default function MyGrid({ children }: ChildrenProps) {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                <Grid item xs={2}>
                    <Item>
                        <LeftMenus />
                    </Item>
                </Grid>
                <Grid item xs={10}>
                    <Item>
                        <RightContainer>{children}</RightContainer>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    )
}
