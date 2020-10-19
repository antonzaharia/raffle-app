import React from 'react'
import Post from '../components/Posts/Post'
import { Link } from 'react-router-dom';

export default function PostsList({ posts }) {
    const renderPosts = () => {
        return posts.map((post) => <Post key={post.id} post={post} />);
      };
    return (
    <div>
      {renderPosts()}
      
    </div>
    )
}
