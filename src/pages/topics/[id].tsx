import { GetStaticPaths, GetStaticProps } from 'next';
import Head from 'next/head';
import { useRouter } from 'next/router';
import styles from '../../styles/Home.module.scss';
import { getTopicNews } from '../../../lib/fetch';

import Article from '../../components/Article';
import Loading from '../../components/Loading';
import Nav from '../../components/Nav';
import MainLayout from '../../layouts/index';

const Topic = (props) => {
  const router = useRouter();
  if (router.isFallback) {
    return <Loading />;
  }

  return (
    <MainLayout>
      <Head>
        <title>Simple News - {props.title}</title>
      </Head>
      <div className={styles.contents}>
        <div className={styles.nav}>
          <nav>
            <Nav />
          </nav>
        </div>
        <div className={styles.blank} />
        <div className={styles.main} style={{ marginRight: '10%' }}>
          <Article title={props.title} articles={props.topicArticles} />
        </div>
      </div>
    </MainLayout>
  );
};

export const getStaticPaths: GetStaticPaths = async () => {
  return {
    paths: [],
    fallback: true,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const topicJson = await getTopicNews(params);
  const topicArticles = await topicJson.articles;

  const title = params.id;
  return {
    props: { topicArticles, title },
    revalidate: 60 * 10,
  };
};

export default Topic;
