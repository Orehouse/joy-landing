import PropTypes from 'prop-types';

import styles from './ReloadBlockStage.module.scss';

function ReloadBlockStage(props) {
  const {label, children} = props;
  return <>
    <div className={styles.reloadBlockStageLabel}>{label}</div>
    <div className={styles.reloadBlockStageDescription}>{children}</div>
  </>;
}

ReloadBlockStage.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ReloadBlockStage;