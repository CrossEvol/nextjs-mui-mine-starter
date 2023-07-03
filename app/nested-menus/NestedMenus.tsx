'use client'

import { MenuItem, OpenItem } from '@/lib/navItems'
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import {
    ListItemButton,
    ListItemIcon,
    ListItemText,
    Collapse,
    List,
    ListSubheader,
} from '@mui/material'
import React, { useEffect, useState } from 'react'
import OpenInNewIcon from '@mui/icons-material/OpenInNew'
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism'
import DashboardIcon from '@mui/icons-material/Dashboard'
import WifiTetheringIcon from '@mui/icons-material/WifiTethering'
import BackupTableIcon from '@mui/icons-material/BackupTable'
import LineStyleIcon from '@mui/icons-material/LineStyle'
import TableChartIcon from '@mui/icons-material/TableChart'
import AccountTreeIcon from '@mui/icons-material/AccountTree'

interface Props {
    menuItems: MenuItem[]
}

const mapIconStr2IconComponent = (iconStr: string) => {
    switch (iconStr) {
        case 'dashboard': {
            return <DashboardIcon />
        }
        case 'example': {
            return <WifiTetheringIcon />
        }
        case 'form': {
            return <BackupTableIcon />
        }
        case 'nest': {
            return <LineStyleIcon />
        }
        case 'link': {
            return <OpenInNewIcon />
        }
        case 'donate': {
            return <VolunteerActivismIcon />
        }
        case 'table': {
            return <TableChartIcon />
        }
        case 'tree': {
            return <AccountTreeIcon />
        }
        default: {
            return <React.Fragment></React.Fragment>
        }
    }
}

const NestedMenus = ({ menuItems }: Props) => {
    let flag = true
    const [openList, setOpenList] = React.useState<OpenItem[]>([])

    const createMenuList = (menuItems: MenuItem[]) => {
        return menuItems.map((item) =>
            item.type === 1 ? (
                <React.Fragment key={item.id}>
                    <ListItemButton
                        sx={{ pl: 2 * item.level }}
                        onClick={() => {
                            console.log('Click the type one component')
                            setOpenList(
                                openList.map((o) =>
                                    o.id === item.id
                                        ? { ...o, open: !o.open }
                                        : { ...o }
                                )
                            )
                        }}
                    >
                        <ListItemIcon>
                            {item.icon && mapIconStr2IconComponent(item.icon)}
                        </ListItemIcon>
                        <ListItemText primary={item.title} />
                        {openList.find((i) => i.id === item.id)?.open ? (
                            <ExpandLess />
                        ) : (
                            <ExpandMore />
                        )}
                    </ListItemButton>
                    <Collapse
                        in={openList.find((i) => i.id === item.id)?.open}
                        timeout='auto'
                        unmountOnExit
                    >
                        <List component='div' disablePadding>
                            {item.children && createMenuList(item.children)}
                        </List>
                    </Collapse>
                </React.Fragment>
            ) : item.type === 2 ? (
                <ListItemButton
                    sx={{ pl: item.level * 2 }}
                    key={item.id}
                    onClick={() => {
                        console.log('Click the type two component')
                        window.open(item.url)
                    }}
                >
                    <ListItemIcon>
                        {item.icon && mapIconStr2IconComponent(item.icon)}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            ) : (
                <ListItemButton
                    sx={{ pl: item.level * 2 }}
                    key={item.id}
                    onClick={() => {
                        console.log('Click the type three component')
                    }}
                >
                    <ListItemIcon>
                        {item.icon && mapIconStr2IconComponent(item.icon)}
                    </ListItemIcon>
                    <ListItemText primary={item.title} />
                </ListItemButton>
            )
        )
    }

    useEffect(() => {
        if (flag) {
            console.log(menuItems)
            const newOpenList = openList
            const bulidOpenList = (subMenuItems: MenuItem[]) => {
                subMenuItems.forEach((item) => {
                    if (item.children) {
                        newOpenList.push({ id: item.id, open: false })
                        bulidOpenList(item.children)
                    }
                })
            }
            bulidOpenList(menuItems)
            setOpenList(newOpenList)
        }

        return () => {
            flag = false
        }
    }, [])

    return (
        <>
            <List
                sx={{
                    width: '100%',
                    maxWidth: 360,
                    // bgcolor: 'background.paper'
                }}
                component='nav'
                aria-labelledby='nested-list-subheader'
                subheader={
                    <ListSubheader component='div' id='nested-list-subheader'>
                        Menu List Items
                    </ListSubheader>
                }
            >
                {menuItems.length > 0 && createMenuList(menuItems)}
            </List>
        </>
    )
}

export default NestedMenus
