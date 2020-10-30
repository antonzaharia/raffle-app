import React from 'react'
import FeaturedPosts from './FeaturedPosts'

// Rendering the homepage slider if any of the posts have the raffle day in the current day.
export default function DateCheck({ posts }) {
    const today = new Date()
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
