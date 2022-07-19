/**
 * Query fetches all blog posts from Sanity
 */

export const GetBlogPosts = /* GraphQL */ `
  query GetBlogPosts {
    # Query gets all blog posts from Sanity
    allPost(sort: { publishDate: DESC }) {
      _id
      title
      publishDate
      readTime
      slug {
        current
      }
      contentRaw
    }
  }
`;

/**
 * Query fetches data to be used on collections
 * pages.
 */

export const GetSingleBlogPost = /* GraphQL */ `
  query GetSingleBlogPost($slug: String!) {
    # Query get one post by slug from Sanity
    allPost(where: { slug: { current: { eq: $slug } } }) {
      _id
      title
      publishDate
      readTime
      slug {
        current
      }
      contentRaw
    }
  }
`;
