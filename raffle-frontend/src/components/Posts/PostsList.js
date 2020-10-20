import React from 'react'
import Post from './Post'

export default function PostsList({ posts }) {
    const renderPosts = () => {
        return posts.map((post) => <Post key={post.id} post={post} />);
      };
    return (
    <div className="flex-wrap">
      {renderPosts()}
      
    </div>
    )
}
