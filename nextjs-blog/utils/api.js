const sanityApi =
  'https://hy1d38la.api.sanity.io/v1/graphql/production/default';

export const getAllPosts = async () => {
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

  // Header deliberately set to POST
  const sanityOptions = {
    method: 'POST',
    headers: {
      'content-type': 'application/json',
    },
    body: JSON.stringify({
      query: graphQlQuery,
      variables: {},
    }),
  };

  // asyncronous FETCH request.
  const getPosts = await fetch(sanityApi, sanityOptions);

  const posts = await getPosts.json();

  return posts;
};
