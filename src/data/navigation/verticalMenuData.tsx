// Type Imports
import type { VerticalMenuDataType } from '@/types/menuTypes'

const verticalMenuData = (): VerticalMenuDataType[] => [
    {
        label: 'داشبورد',
        href: '/home',
        icon: 'tabler-smart-home'
    },
    {
        label: 'اطلاعات پایه',
        href: '/about',
        icon: 'tabler-info-circle'
    }
]

export default verticalMenuData
