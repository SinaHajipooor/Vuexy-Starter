'use client'

// Third-party Imports
import classnames from 'classnames'

// Component Imports
import NavToggle from './NavToggle'
import ModeDropdown from '@components/layout/shared/ModeDropdown'
import UserDropdown from '@components/layout/shared/UserDropdown'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'
import ShortcutsDropdown, { type ShortcutsType } from '../shared/ShortcutsDropdown'


// Vars
const shortcuts: ShortcutsType[] = [
    {
        url: '/admin/membership/admins',
        icon: 'mdi:person-tie',
        title: 'مدیران',
        subtitle: 'فهرست مدیران'
    },
]


const NavbarContent = () => {
    return (
        <div className={classnames(verticalLayoutClasses.navbarContent, 'flex items-center justify-between gap-4 is-full')}>
            <div className='flex items-center gap-4'>
                <NavToggle />
                <ModeDropdown />
            </div>
            <div className='flex items-center'>
                <ShortcutsDropdown shortcuts={shortcuts} />
                <UserDropdown />
            </div>
        </div>
    )
}

export default NavbarContent
