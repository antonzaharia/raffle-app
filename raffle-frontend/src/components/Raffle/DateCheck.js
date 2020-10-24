import React from 'react'
import FeaturedPosts from './FeaturedPosts'

export default function DateCheck({ posts }) {
    const today = new Date
    let featuredPosts = ""
    if (posts) {
        featuredPosts = posts.filter( post => post.date === "2020-10-25")
    }
    return (
        <div>
            { featuredPosts ? <FeaturedPosts posts={featuredPosts} /> : ""}
        </div>
    )
}
