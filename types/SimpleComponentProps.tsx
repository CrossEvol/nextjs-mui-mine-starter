import React from 'react'

export interface ChildrenProps {
    children: React.ReactNode
}

export interface SimpleDialogProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}