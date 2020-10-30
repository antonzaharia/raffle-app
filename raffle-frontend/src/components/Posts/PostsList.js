import React from 'react'
import PostCard from './PostCard'

// Mapping through posts collection
export default function PostsList({ posts }) {
    const renderPosts = () => {
        return posts.map((post) => <PostCard key={post.id} post={post} />);
      };
    return (
    <div className="flex-wrap">
      {renderPosts()}
    </div>
    )
}
