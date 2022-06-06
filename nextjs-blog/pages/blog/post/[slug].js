import Head from 'next/head';
import Layout from '../../../components/layout';
import Date from '../../../components/date';
import utilStyles from '../../../styles/utils.module.css';
import { PortableText } from '@portabletext/react';
import SyntaxHighlighter from 'react-syntax-highlighter';
import { nightOwl } from 'react-syntax-highlighter/dist/cjs/styles/hljs';

export default function Post({ currPost }) {
  const components = {
    types: {
      code: (props) => (
        <SyntaxHighlighter
          language={props.value.language}
          style={nightOwl}
          wrapLongLines="true"
          showLineNumbers="true"
        >
          {props.value.code}
        </SyntaxHighlighter>
      ),
    },
  };

  return (
    <Layout>
      <Head>
        <title>{currPost[0].title}</title>
      </Head>
      <article>
        <h1 className={utilStyles.headingXl}>{currPost[0].title}</h1>
        <div className={utilStyles.postDetails}>
          <div className={utilStyles.lightText}>
            <Date dateString={currPost[0].publishDate} />
          </div>
          <small>{currPost[0].readTime} minute read</small>
        </div>
        <div className={utilStyles.postData}>
          <PortableText
            value={currPost[0].contentRaw}
            components={components}
          />
        </div>
      </article>
    </Layout>
  );
}

export async function getStaticPaths() {
  // GraphQL query to get all posts from Sanity
  const graphQlQuery = `
    query {
      allPost (sort: {publishDate: DESC}) {
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
  const response = await getPosts.json();

  // Destructure & rename response data to avoid name collision.
  const { allPost: allPosts } = response.data;

  // map over json response to get URL slugs.
  const paths = allPosts.map((post) => {
    const { slug } = post;
    const { current } = slug;

    return {
      params: {
        slug: current,
      },
    };
  });

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  // renamed slug to avoid collision.
  const { slug: urlString } = params;

  // GraphQL query to get all posts from Sanity
  const graphQlQuery = `
    query {
      allPost (sort: {publishDate: DESC}) {
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
  const response = await getPosts.json();

  // Destructure & rename response data to avoid name collision.
  const { allPost: allPosts } = response.data;

  // if no values, return empty array
  if (!allPosts.length) {
    return {
      props: {
        allPosts: [],
      },
    };
  }

  // filter page data based on the slug from params
  const currPost = allPosts.filter((post) => {
    const { slug } = post;
    const { current } = slug;

    if (current === urlString) {
      return post;
    }
  });

  // currPost is passed to page component as props
  return {
    props: {
      currPost,
    },
  };
}
