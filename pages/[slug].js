import React from 'react'
import { useRouter } from 'next/router'

function ArticlePage() {
    const router = useRouter()
    console.log(router)
    return (
        <>
            <h1>Page Article</h1>
            <p>{router.query.slug}</p>
        </>
    )
}

export default ArticlePage
