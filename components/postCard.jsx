import React from 'react'

const postCard = ({ post }) => {
    return (
        <div>
            {post.title}
            {post.text}
        </div>
    )
}

export default postCard
