'use client'

// Next Imports
import Link from 'next/link'

// Third-party Imports
import classnames from 'classnames'

// Hook Imports
import useVerticalNav from '@menu/hooks/useVerticalNav'
import useHorizontalNav from '@menu/hooks/useHorizontalNav'
import { useSettings } from '@core/hooks/useSettings'

// Util Imports
import { verticalLayoutClasses } from '@layouts/utils/layoutClasses'
import { Box, Typography } from '@mui/material'
import { getCurrentJalaliYear } from '@/helpers/date/DateHelper'

const FooterContent = () => {
    // Hooks
    const { settings } = useSettings()
    const { isBreakpointReached: isVerticalBreakpointReached } = useVerticalNav()
    const { isBreakpointReached: isHorizontalBreakpointReached } = useHorizontalNav()

    // Vars
    const isBreakpointReached =
        settings.layout === 'vertical' ? isVerticalBreakpointReached : isHorizontalBreakpointReached;


    const footerText = 'تمامی حقوق برای ';
    const linkText = 'شرکت دانش بنیان فاواگستر سپهر  ';
    const currentYear = getCurrentJalaliYear()


    return (
        <Box sx={{ display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center' }}>
            <Typography sx={{ mr: 2 }} textAlign='center'>
                {footerText}
                <Link style={{ textDecorationLine: 'none', color: '#765feb' }} target='_blank' href='http://sepehr-ict.ir/'>
                    {linkText}
                </Link>
                محفوظ است © {currentYear}
            </Typography>
        </Box>

        // <div
        //     className={classnames(verticalLayoutClasses.footerContent, 'flex items-center justify-between flex-wrap gap-4')}
        // >
        //     <p>
        //         <span className='text-textSecondary'>{`© ${new Date().getFullYear()}, Made with `}</span>
        //         <span>{`❤️`}</span>
        //         <span className='text-textSecondary'>{` by `}</span>
        //         <Link href='https://pixinvent.com' target='_blank' className='text-primary uppercase'>
        //             Pixinvent
        //         </Link>
        //     </p>
        //     {!isBreakpointReached && (
        //         <div className='flex items-center gap-4'>
        //             <Link href='https://themeforest.net/licenses/standard' target='_blank' className='text-primary'>
        //                 License
        //             </Link>
        //             <Link href='https://themeforest.net/user/pixinvent/portfolio' target='_blank' className='text-primary'>
        //                 More Themes
        //             </Link>
        //             <Link
        //                 href='https://demos.pixinvent.com/vuexy-nextjs-admin-template/documentation'
        //                 target='_blank'
        //                 className='text-primary'
        //             >
        //                 Documentation
        //             </Link>
        //             <Link href='https://pixinvent.ticksy.com' target='_blank' className='text-primary'>
        //                 Support
        //             </Link>
        //         </div>
        //     )}
        // </div>
    )
}

export default FooterContent
