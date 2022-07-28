import Head from 'next/head';
import Layout from '../../../components/layout';
import Date from '../../../components/date';
import { PortableText } from '@portabletext/react';
import { useGetSingleBlogPostQuery } from '../../../generated/graphql.tsx';
import { StyledH1 } from '../../../components/StyledComponents/StyledText';
import { StyledPostContainer } from '../../../components/StyledComponents/StyledDivs';

export default function Post({ slug }) {
  const { loading, error, data } = useGetSingleBlogPostQuery({
    variables: { slug: slug },
  });

  const components = {
    types: {
      code: (props) => (
        // <CopyBlock
        //   text={props.value.code}
        //   language={props.value.language}
        //   theme={atomOneDark}
        //   showLineNumbers={false}
        //   wrapLines
        //   // codeBlock={true}
        // />
        <pre>{props.value.code}</pre>
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
          <StyledPostContainer>
            <PortableText
              value={data.allPost[0].contentRaw}
              components={components}
            />
          </StyledPostContainer>
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
