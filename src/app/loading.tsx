"use client"

import NextTopLoader from "nextjs-toploader";

export default  function Loading(){
    return <NextTopLoader
        color="#7367F0"
        initialPosition={0.08}
        crawlSpeed={200}
        height={4}
        crawl={true}
        showSpinner={true}
        easing="ease"
        speed={200}
        shadow="0 0 10px #7468ff,0 0 5px #7367f0"
    />
}