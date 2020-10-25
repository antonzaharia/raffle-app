import React from 'react'
import Button from 'react-bootstrap/esm/Button'
import { Link } from 'react-router-dom'
import AdminPostCard from './AdminPostCard'

export default function AdminPostContainer({posts}) {
    return (
        <div className="center-text">
            <Link to="/posts/new"><Button>New Post</Button></Link>
            {posts.map( post => <AdminPostCard key={post.id} post={post}/>)}
        </div>
    )
}
