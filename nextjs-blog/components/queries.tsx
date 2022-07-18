/**
 * Query fetches data to be used on collections
 * pages.
 */

export const AllBlogPosts = /* GraphQL */ `
  query GetAllBlogPosts {
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
