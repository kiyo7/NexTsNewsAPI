import { GetStaticProps } from 'next';
import MainLayout from '../layouts';
import Head from 'next/head';
import { getAllNews } from '../../lib/fetch';
import Article from '../components/Article';
import styles from '../styles/Home.module.scss';

export default function Home(props) {
  console.log(props.topArticles);
  return (
    <MainLayout>
      <Head>
        <title>Simple News</title>
      </Head>
      <div className={styles.main}>
        <Article title="headlines" articles={props.topArticles} />
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
