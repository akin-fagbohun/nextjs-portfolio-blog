import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { useGetBlogPostsQuery } from '../../generated/graphql.tsx';
import styled from 'styled-components';

// import utilStyles from '../../styles/utils.module.css';
import Link from 'next/link';
import Date from '../../components/date';

const StyledBioSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  font-size: 1.2rem;
  line-height: 1.5;
  padding-left: 50px;
  padding-right: 50px;
  padding-top: 30px;
`;

const StyledPostSection = styled.section`
  display: flex;
  flex-direction: column;
  font-size: 1.2rem;
  line-height: 1.5;
  padding-left: 120px;
  padding-right: 50px;
  padding-top: 30px;
  max-width: 50rem;
  margin-top: 30px;
  align-self: flex-start;
`;

const StyledH2 = styled.h2`
  font-size: 1.5rem;
  line-height: 1.4;
  margin: 1rem 0;
`;

const StyledUl = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;

  li {
    margin: 0 0 1.25rem;
  }

  small {
    color: #666;
  }
`;

export default function Home(/* { allPosts  } */) {
  const { loading, error, data } = useGetBlogPostsQuery();

  if (loading) return <p>loading...</p>;

  if (error) return <p>error loading posts...</p>;

  if (data) {
    const { allPost: allPosts } = data;
    console.log('🚀 ~ file: index.jsx ~ line 18 ~ Home ~ allPosts', allPosts);

    return (
      <Layout home>
        <Head>
          <title>{siteTitle}</title>
        </Head>
        <StyledBioSection>
          <p>
            Hello, I&apos;m Akin. I&apos;m a full-stack developer exploring new
            technologies and documenting my journey through software
            development.
          </p>
          <p>
            As part of my foray into Next.js, I added this blog to my portfolio
            site, so it&apos;s only right that I use it to share my thoughts!
            Have a read -I hope you enjoy!
          </p>
        </StyledBioSection>
        <StyledPostSection>
          <StyledH2>Latest posts</StyledH2>
          <StyledUl>
            {allPosts.map(({ _id, slug, publishDate, title, readTime }) => (
              <li key={_id}>
                <Link href={`/blog/post/${slug.current}`}>
                  <a>{title}</a>
                </Link>
                <br />
                <small>
                  <Date dateString={publishDate} />
                </small>{' '}
                | <small>{readTime} minute read</small>
              </li>
            ))}
          </StyledUl>
        </StyledPostSection>
      </Layout>
    );
  }
}

// export async function getStaticProps() {
//   const posts = await getAllPosts();

//   // Destructure & rename response data for clarity
//   const { allPost: allPosts } = posts.data;

//   // if no values, return empty array
//   return {
//     props: {
//       allPosts: allPosts || [],
//     },
//   };
// }
