import styles from './index.module.scss';
import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <section className={styles.container}>
      <header className={styles.header}>
        <div className={styles.header__icon}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </div>
        <h1 style={{ letterSpacing: '1px', textAlign: 'left' }}>
          <Link href="/">
            <a>
              <span style={{ fontWeight: 250 }}>Simple</span>
              <span style={{ fontWeight: 100 }}>News</span>
            </a>
          </Link>
        </h1>
      </header>
    </section>
  );
};

export default Header;
