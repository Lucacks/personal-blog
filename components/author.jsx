import React from 'react'
import Image from 'next/image'

const author = ({ post }) => {
    console.log(post.name)
    return (
        <div>
            <img
                src={post.photo.url}
                alt={post.name}
                className='author-photo'
            />

            <h3 className='author-name'>{post.name}</h3>
            <p className="author-bio">{post.bio}</p>
        </div>

    )
}

export default author
