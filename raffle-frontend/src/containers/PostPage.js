import React from 'react'


export default function PostPage({movies, match}) {
    return (
        <div>
            <p>{movies[match.params.postId]}</p>
        </div>
    )
}
