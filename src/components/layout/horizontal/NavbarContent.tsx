'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import Logo from '@components/layout/shared/Logo'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'

// Hook Imports
import useHorizontalNav from '@menu/hooks/useHorizontalNav'

// Util Imports
import ShortcutsDropdown, { type ShortcutsType } from '@components/layout/shared/ShortcutsDropdown'
import { horizontalLayoutClasses } from '@layouts/utils/layoutClasses'


// Vars
const shortcuts: ShortcutsType[] = [
    {
        url: '/apps/calendar',
        icon: 'tabler-calendar',
        title: 'Calendar',
        subtitle: 'Appointments'
    },
    {
        url: '/apps/invoice/list',
        icon: 'tabler-file-dollar',
        title: 'Invoice App',
        subtitle: 'Manage Accounts'
    },
    {
        url: '/apps/user/list',
        icon: 'tabler-user',
        title: 'Users',
        subtitle: 'Manage Users'
    },
    {
        url: '/apps/roles',
        icon: 'tabler-users-group',
        title: 'Role Management',
        subtitle: 'Permissions'
    },
    {
        url: '/',
        icon: 'tabler-device-desktop-analytics',
        title: 'Dashboard',
        subtitle: 'User Dashboard'
    },
    {
        url: '/pages/account-settings',
        icon: 'tabler-settings',
        title: 'Settings',
        subtitle: 'Account Settings'
    }
]


const NavbarContent = () => {
    // Hooks
    const { isBreakpointReached } = useHorizontalNav()

    return (
        <div
            className={classnames(horizontalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}
        >
            <div className='flex items-center gap-4'>
                <NavToggle />
                {/* Hide Logo on Smaller screens */}
                {!isBreakpointReached && <Logo />}
            </div>
            <div className='flex items-center'>
                <ModeDropdown />
                <ShortcutsDropdown shortcuts={shortcuts} />
                <UserDropdown />
            </div>
        </div>
    )
}

export default NavbarContent
