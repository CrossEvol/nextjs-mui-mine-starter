'use client'

import { ThemeProvider, createTheme } from '@mui/material/styles'
import * as React from 'react'

export const ColorModeContext = React.createContext({
    toggleColorMode: () => {},
})

interface IProps {
    children: React.ReactNode
}

export function ThemeWrapper({ children }: IProps) {
    const [mode, setMode] = React.useState<'light' | 'dark'>('light')
    const colorMode = React.useMemo(
        () => ({
            toggleColorMode: () => {
                setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'))
            },
        }),
        []
    )

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                },
            }),
        [mode]
    )

    return (
        <ColorModeContext.Provider value={colorMode}>
            <ThemeProvider theme={theme}>{children}</ThemeProvider>
        </ColorModeContext.Provider>
    )
}
