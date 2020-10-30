import React from 'react'
import { Link } from 'react-router-dom'
import AdminPostCard from './AdminPostCard'

// Bootstrap
import Button from 'react-bootstrap/esm/Button'

// Mapping through posts collection and renders create post button
export default function AdminPostContainer({posts}) {
    return (
        <div className="center-text">
            <Link to="/admin/posts/new"><Button>New Post</Button></Link>
            {posts.map( post => <AdminPostCard key={post.id} post={post}/>)}
        </div>
    )
}
