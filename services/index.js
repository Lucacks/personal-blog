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

export const getPostDetails = async (slug) => {
  const query = gql`
      query GetPostDetails($slug : String!) {
        post(where: {slug: $slug}) {
          title
          text
          featuredImage {
            url
          }
          author{
            name
            bio
            photo {
              url
            }
          }
          createdAt
          slug
          content {
            raw
          }
          categories {
            name
            slug
          }
        }
      }
    `;

  const result = await request(graphqlAPI, query, { slug });

  return result.post;
};

export const getCategories = async () => {
  const query = gql`
        query getCategories {
            categories {
                name
                slug
            }
        }
    `
  const result = await request(graphqlAPI, query)

  return result.categories;
}

export const getFeaturedPosts = async () => {
  const query = gql`
    query GetCategoryPost() {
      posts(where: {featuredPost: true}) {
        author {
          name
          photo {
            url
          }
        }
        featuredImage {
          url
        }
        title
        slug
        createdAt
      }
    }   
  `;

  const result = await request(graphqlAPI, query);

  return result.posts;
}