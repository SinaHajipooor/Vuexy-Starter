// Type Imports
import type { HorizontalMenuDataType } from '@/types/menuTypes'

const horizontalMenuData = (): HorizontalMenuDataType[] => [
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

export default horizontalMenuData
