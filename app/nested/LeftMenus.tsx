'use client'

import * as React from 'react'
import Divider from '@mui/material/Divider'
import Paper from '@mui/material/Paper'
import MenuList from '@mui/material/MenuList'
import MenuItem from '@mui/material/MenuItem'
import ListItemText from '@mui/material/ListItemText'
import ListItemIcon from '@mui/material/ListItemIcon'
import Typography from '@mui/material/Typography'
import ContentCut from '@mui/icons-material/ContentCut'
import ContentCopy from '@mui/icons-material/ContentCopy'
import ContentPaste from '@mui/icons-material/ContentPaste'
import Cloud from '@mui/icons-material/Cloud'
import { useRouter as useNavi } from 'next/navigation'
import { useEffect } from 'react'

export default function LeftMenus() {
    const navigate = useNavi()

    useEffect(() => {
        console.log('是否重复渲染')
        return () => {}
    }, [])

    return (
        <Paper sx={{ width: 320, maxWidth: '100%', height: 520 }}>
            <MenuList>
                <MenuItem onClick={() => navigate.push('/nested/one')}>
                    <ListItemIcon>
                        <ContentCut fontSize='small' />
                    </ListItemIcon>
                    <ListItemText>To One</ListItemText>
                    <Typography variant='body2' color='text.secondary'>
                        ⌘X
                    </Typography>
                </MenuItem>
                <MenuItem onClick={() => navigate.push('/nested/two')}>
                    <ListItemIcon>
                        <ContentCopy fontSize='small' />
                    </ListItemIcon>
                    <ListItemText>To Two</ListItemText>
                    <Typography variant='body2' color='text.secondary'>
                        ⌘C
                    </Typography>
                </MenuItem>
                <MenuItem onClick={() => navigate.push('/nested/three')}>
                    <ListItemIcon>
                        <ContentPaste fontSize='small' />
                    </ListItemIcon>
                    <ListItemText>To Three</ListItemText>
                    <Typography variant='body2' color='text.secondary'>
                        ⌘V
                    </Typography>
                </MenuItem>
                <Divider />
                <MenuItem>
                    <ListItemIcon>
                        <Cloud fontSize='small' />
                    </ListItemIcon>
                    <ListItemText>Web Clipboard</ListItemText>
                </MenuItem>
            </MenuList>
        </Paper>
    )
}
