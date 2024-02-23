import React from 'react'

import { PostDetail, Categories, Author, Loader } from '../../components';
import { getPosts, getPostDetails } from '../../services';
// import { adjacentPosts } from '../../sections';

const postDetails = ({ post }) => {
    return (
        <div className='main'>
            <div>
                <div>
                    <PostDetail post={post} />
                    <Author post={post.author} />
                </div>
            </div>
            <div className='components'>
                <Categories />
            </div>
        </div>
    )
}

export default postDetails

export async function getStaticProps({ params }) {
    const data = await getPostDetails(params.slug)

    return {
        props: { post: data }
    }
}

export async function getStaticPaths() {
    const posts = await getPosts()

    return {
        paths: posts.map(({ node: { slug } }) => ({ params: { slug } })),
        fallback: false
    }
}