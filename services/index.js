import { request, gql } from "graphql-request";

const graphqlAPI = process.env.NEXT_PUBLIC_GRAPHICMS_ENDPOINT;

export const getPosts = async () => {
    const query = gql`
    query Assets {
        postsConnection {
            edges {
                node {
                    author {
                        bio
                        name
                        id
                        photo {
                        url
                        }
                    }
                    createdAt
                    slug
                    title
                    text
                    featuredImage {
                        url
                    }
                    categories {
                        name
                        slug
                    }
                }
            }
        }
    }
    `

    const result = await request(graphqlAPI, query)

    return result.postsConnection.edges;
}