import Head from 'next/head';
import Layout, { siteTitle } from '../../components/layout';
import { useGetBlogPostsQuery } from '../../generated/graphql.tsx';
import Link from 'next/link';
import Date from '../../components/date';
import { StyledBioSection } from '../../components/StyledComponents/StyledBioSection';
import { StyledPostSection } from '../../components/StyledComponents/StyledPostSection';
import { StyledH2 } from '../../components/StyledComponents/StyledText';
import { StyledUl } from '../../components/StyledComponents/StyledLists';

export default function Home(/* { allPosts  } */) {
  const { loading, error, data } = useGetBlogPostsQuery();

  if (loading) return <p>loading...</p>;

  if (error) {
    console.log('🚀 ~ file: index.jsx ~ line 58 ~ Home ~ error', error);
    return <p>error loading posts...</p>;
  }

  if (data) {
    const { allPost: allPosts } = data;

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
            As part of my foray into Next.js, I&apos;ve added this blog to my
            portfolio site, so it&apos;s only right that I use it to share my
            thoughts! Have a read -I hope you enjoy!
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
