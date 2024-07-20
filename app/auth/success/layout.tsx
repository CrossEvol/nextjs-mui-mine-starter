import { ChildrenProps } from '@/types/ChildrenProps'

const Layout = ({ children }: ChildrenProps) => {
    return (
        <>
            <div className='flex h-96 w-96 items-center justify-center'>
                {children}
            </div>{' '}
        </>
    )
}

export default Layout
