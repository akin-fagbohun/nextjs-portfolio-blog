import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';

export async function getStaticProps() {
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
  const response = await getPosts.json();

  // Destructure & rename response data for clarity
  const { allPost: allPosts } = response.data;

  // if no values, return empty array
  if (!allPosts.length) {
    return {
      props: {
        allPosts: [],
      },
    };
  } else {
    return {
      props: {
        allPosts,
      },
    };
  }
}

export default function Home({ allPosts }) {
  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      <section className={utilStyles.centered}>
        <p>
          Hello, I&apos;m Akin. I&apos;m a full-stack developer exploring new
          technologies and documenting my journey through software development.
        </p>
        <p>
          As part of my foray into Next.js, I added this blog to my portfolio
          site, so it&apos;s only right that I use it to share my thoughts! Have
          a read -I hope you enjoy!
        </p>
      </section>
      <section className={`${utilStyles.left} ${utilStyles.padding1px}`}>
        <h2 className={utilStyles.headingLg}>Latest posts</h2>
        <ul className={utilStyles.list}>
          {allPosts.map(({ _id, slug, publishDate, title, readTime }) => (
            <li className={utilStyles.listItem} key={_id}>
              <Link href={`/blog/post/${slug.current}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={publishDate} />
              </small>{' '}
              |{' '}
              <small className={utilStyles.lightText}>
                {readTime} minute read
              </small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
