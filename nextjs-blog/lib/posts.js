export async function getPostData(id) {
  // GraphQL query to get all posts from Sanity
  const graphQlQuery = `
    query {
      allPost (sort: {publishDate: DESC}) {
        _id
        title
        publishDate
        readTime
        slug {current}
        contentRaw 
      }
    }
  `;

  // asyncronous FETCH request.
  // Header deliberately set to POST
  const getPosts = await fetch(
    'https://hy1d38la.api.sanity.io/v1/graphql/production/default',
    {
      method: 'POST',
      headers: {
        'content-type': 'application/json',
      },
      body: JSON.stringify({
        query: graphQlQuery,
        variables: {},
      }),
    }
  );

  // awaiting the response
  const posts = await getPosts.json();

  // Destructure & rename response data for clarity
  const { allPost: allPosts } = posts.data;

  // if no values, return empty array
  return {
    props: {
      allPosts: allPosts || [],
    },
  };
}
