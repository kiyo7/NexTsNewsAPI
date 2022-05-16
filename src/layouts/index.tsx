import Header from '../components/Header';
import Footer from '../components/Footer';
import styles from './index.module.scss';

interface Props {
  children: React.ReactNode;
}

const MainLayout: React.FC<Props> = ({ children }) => {
  return (
    <>
      <Header />
      <main className={styles.main}>{children}</main>
      <Footer />
    </>
  );
};

export default MainLayout;
