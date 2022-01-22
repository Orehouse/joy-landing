import propTypes from 'prop-types';

import styles from './ReloadBlockStage.module.scss';

function ReloadBlockStage(props) {
  const {label, children} = props;
  return <>
    <div className={styles.label}>{label}</div>
    <div className={styles.description}>{children}</div>
  </>;
}

ReloadBlockStage.propTypes = {
  label: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default ReloadBlockStage;