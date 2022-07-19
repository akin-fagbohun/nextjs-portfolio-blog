import Head from 'next/head';
import Layout from '../../../components/layout';
import Date from '../../../components/date';
import { PortableText } from '@portabletext/react';
import { CopyBlock, atomOneDark } from 'react-code-blocks';
import styled from 'styled-components';
import { useGetSingleBlogPostQuery } from '../../../generated/graphql.tsx';

const StyledH1 = styled.h1`
  font-size: 2rem;
  line-height: 1.3;
  font-weight: 800;
  letter-spacing: -0.05rem;
  margin: 1rem 0;
`;

const StyledPost = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Post({ slug }) {
  const { loading, error, data } = useGetSingleBlogPostQuery({
    variables: { slug: slug },
  });

  const components = {
    types: {
      code: (props) => (
        <CopyBlock
          text={props.value.code}
          language={props.value.language}
          theme={atomOneDark}
          showLineNumbers={false}
          wrapLines
          // codeBlock={true}
        />
      ),
    },
  };

  if (loading) return <p>Loading...</p>;
  if (error) {
    return <p>Error loading post...</p>;
  }

  if (data) {
    return (
      <Layout>
        <Head>
          <title>{data.allPost[0].title}</title>
        </Head>
        <article>
          <StyledH1>{data.allPost[0].title}</StyledH1>
          <div>
            <div>
              <Date dateString={data.allPost[0].publishDate} />
            </div>
            <small>{data.allPost[0].readTime} minute read</small>
          </div>
          <StyledPost>
            <PortableText
              value={data.allPost[0].contentRaw}
              components={components}
            />
          </StyledPost>
        </article>
      </Layout>
    );
  }
}

export async function getServerSideProps({ params }) {
  const { slug } = params;

  // Pass the URL slug as a param to page component.
  return {
    props: {
      slug,
    },
  };
}
