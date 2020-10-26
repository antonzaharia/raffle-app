import React from 'react'
import FeaturedPosts from './FeaturedPosts'

export default function DateCheck({ posts }) {
    const today = new Date
    const todayDate = `${today.getFullYear()}-${today.getMonth()+1}-${today.getDate()}`
    let featuredPosts = ""
    if (posts) {
        featuredPosts = posts.filter( post => post.date === todayDate)
    }
    return (
        <div>
            { featuredPosts ? <FeaturedPosts posts={featuredPosts} /> : ""}
        </div>
    )
}
