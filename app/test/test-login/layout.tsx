'use client'

import React, { createContext, PropsWithChildren, useState } from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import Box from '@mui/material/Box'
import Container from '@mui/material/Container'

export type TestUser = {
  username: string
  email: string
  avatar: string
}

export type ContextProps = {
  data: TestUser | null
  updateData: (user: TestUser | null) => void
}

export const TestLoginContext = createContext<ContextProps>({
  data: null,
  updateData: (user: TestUser | null) => {},
})

const Layout = ({ children }: PropsWithChildren) => {
  const [user, setUser] = useState<TestUser | null>(null)

  return (
    <React.Fragment>
      <CssBaseline />
      <TestLoginContext.Provider
        value={{
          data: user as null,
          updateData: (user: TestUser | null) => {
            setUser(user)
          },
        }}>
        <Container maxWidth='lg'>
          <Box sx={{ bgcolor: 'white', height: '100vh' }}>{children}</Box>
        </Container>
      </TestLoginContext.Provider>
    </React.Fragment>
  )
}

export default Layout
