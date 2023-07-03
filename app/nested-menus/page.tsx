import { MenuItem, NavItem, getMenuItems } from '@/lib/navItems'
import React from 'react'
import NestedMenus from './NestedMenus'

const Home = async () => {
    const menuItems = await getMenuItems()

    menuItems.forEach((i) => console.log(i))

    return (
        <div>
            <NestedMenus menuItems={menuItems} />
        </div>
    )
}

export default Home
