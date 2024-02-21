import React from 'react'
import moment from 'moment';
import Link from 'next/link';

const postCard = ({ post }) => {
    return (
        <div className='post-container'>
            <div className="post-content">
                <img
                    src={post.featuredImage.url}
                    alt={post.title}
                    className='post-image'
                />

                <h1 className="post-title">
                    <Link href={`/post/${post.slug}`}>
                        {post.title}
                    </Link>
                </h1>

                <div className="author-publish-container">
                    <div className="post-author-container">
                        <div className="author-photo-container">
                            <img
                                className='author-photo'
                                src={post.author.photo.url}
                                alt={post.author.name}
                            />
                        </div>
                        <div className="author-name">
                            {post.author.name}
                        </div>
                    </div>

                    <div className="publish-date-container">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 inline mr-2 text-pink-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>

                        <span>
                            {moment(post.createdAt).format('DD/MM/YYYY')}
                        </span>
                    </div>
                </div>

                <p className="short-text">{post.text}</p>

                <Link
                    href={`/post/${post.slug}`}
                    className='btn-continue'
                >
                    Continue lendo
                </Link>
            </div>
        </div>
    )
}

export default postCard
