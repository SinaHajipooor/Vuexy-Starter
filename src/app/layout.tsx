// Third-party Imports
import 'react-perfect-scrollbar/dist/css/styles.css'

// Type Imports
import type { ChildrenType } from '@core/types'

// Style Imports
import '@/app/globals.css'

import NextAuthProvider from '@/context/NextAuthProvider'

// Generated Icon CSS Imports
import '@assets/iconify-icons/generated-icons.css'
import Loading from "@/app/loading";


export const metadata = {
    title: 'Vuexy - MUI Next.js Admin Dashboard Template',
    description:
        'Vuexy - MUI Next.js Admin Dashboard Template - is the most developer friendly & highly customizable Admin Dashboard Template based on MUI v5.'
}

const RootLayout = ({ children }: ChildrenType) => {
    // Vars
    const direction = 'rtl';

    return (
        <NextAuthProvider>
            <html id='__next' lang='en' dir={direction}>
                <Loading />
                <body className='flex is-full min-bs-full flex-auto flex-col'>{children}</body>
            </html>
        </NextAuthProvider>
    )
}

export default RootLayout
