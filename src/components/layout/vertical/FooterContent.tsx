'use client'

// Next Imports
import Link from 'next/link'


import {Box, Typography} from '@mui/material'
import {getCurrentJalaliYear} from '@/helpers/date/DateHelper'

const FooterContent = () => {

    //vars
    const footerText = 'تمامی حقوق برای ';
    const linkText = 'شرکت دانش بنیان فاواگستر سپهر  ';
    const currentYear = getCurrentJalaliYear()

    return (
        <Box sx={{display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'center'}}>
            <Typography variant='body2' sx={{mr: 2}} textAlign='center'>
                {footerText}
                <Link style={{textDecorationLine: 'none', color: '#765feb'}} target='_blank' href='http://sepehr-ict.ir/'>
                    {linkText}
                </Link>
                محفوظ است © {currentYear}
            </Typography>
        </Box>
    )
}

export default FooterContent
