import React from 'react'
import AdminPostCard from './AdminPostCard'

export default function AdminPostContainer({posts}) {
    return (
        <div>
            {posts.map( post => <AdminPostCard key={post.id} post={post}/>)}
        </div>
    )
}
