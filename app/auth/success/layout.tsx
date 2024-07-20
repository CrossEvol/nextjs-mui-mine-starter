import { ChildrenProps } from '@/types/ChildrenProps'

const Layout = ({ children }: ChildrenProps) => {
    return (
        <>
            <div className='flex justify-center items-center w-96 h-96'>
                {children}
            </div>{' '}
        </>
    )
}

export default Layout
