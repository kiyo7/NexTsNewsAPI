import { GetStaticProps } from 'next';
import Head from 'next/head';
import { getAllNews } from '../../lib/fetch';
import styles from '../styles/Home.module.scss';

import MainLayout from '../layouts';
import Article from '../components/Article';
import Nav from '../components/Nav';

export default function Home(props) {
  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main}>
          <Article title="headline" articles={props.topArticles} />
        </div>
      </div>
    </MainLayout>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const topJson = await getAllNews();
  const topArticles = topJson?.articles;
  return {
    props: {
      topArticles,
    },
    revalidate: 60 * 10,
  };
};
