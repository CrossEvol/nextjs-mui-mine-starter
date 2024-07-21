import { PropsWithChildren } from "react"

const Layout = ({ children }: PropsWithChildren) => {
    return (
        <>
            <div className='flex h-96 w-96 items-center justify-center'>
                {children}
            </div>{' '}
        </>
    )
}

export default Layout
