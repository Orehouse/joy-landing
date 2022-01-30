import styles from './MainContainer.module.scss';

function MainContainer({children}) {
  return <div className={styles.MainContainer}>{children}</div>;
}

export default MainContainer;