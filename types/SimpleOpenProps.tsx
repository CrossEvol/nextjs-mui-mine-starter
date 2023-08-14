import React from 'react'

export interface SimpleOpenProps {
    open: boolean
    setOpen: React.Dispatch<React.SetStateAction<boolean>>
}