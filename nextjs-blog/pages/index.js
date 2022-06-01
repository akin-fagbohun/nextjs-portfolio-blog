import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';
import { getSortedPostsData } from '../lib/posts';
import Link from 'next/link';
import Date from '../components/date';

export async function getStaticProps() {
  const allPostsData = getSortedPostsData();
  return {
    props: {
      allPostsData,
    },
  };
}

export default function Home({ allPostsData }) {
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
          {allPostsData.map(({ id, date, title, read }) => (
            <li className={utilStyles.listItem} key={id}>
              <Link href={`/post/${id}`}>
                <a>{title}</a>
              </Link>
              <br />
              <small className={utilStyles.lightText}>
                <Date dateString={date} />
              </small>{' '}
              | <small className={utilStyles.lightText}>{read}</small>
            </li>
          ))}
        </ul>
      </section>
    </Layout>
  );
}
