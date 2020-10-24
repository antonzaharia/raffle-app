import React from 'react'

export default function AdminPostCard({post}) {
    return (
        <Card.Body>
            {post.title}
        </Card.Body>
    )
}
