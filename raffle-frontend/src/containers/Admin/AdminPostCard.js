import React from 'react'
import Card from 'react-bootstrap/esm/Card'

export default function AdminPostCard({post}) {
    return (
        <Card.Body>
            {post.title}
        </Card.Body>
    )
}
