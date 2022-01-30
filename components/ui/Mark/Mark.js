import styles from './Mark.module.scss';

function Mark(props) {
  return <span className={styles.mark}>{props.children}</span>;
}

export default Mark;