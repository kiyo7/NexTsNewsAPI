import styles from './index.module.scss';
const Loading: React.FC = () => {
  return (
    <div className={styles.loding}>
      <div className={styles.spinner}></div>
    </div>
  );
};
export default Loading;
