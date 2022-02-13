import PropTypes from 'prop-types';

import styles from './ReloadBlockStage.module.scss';
import AccidentalText from '../../ui/AccidentalText/AccidentalText';

function ReloadBlockStage(props) {
  const {label, children} = props;
  return <>
    <AccidentalText text={label}/>
    <div className={styles.reloadBlockStageDescription}>{children}</div>
  </>;
}

ReloadBlockStage.propTypes = {
  label: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ReloadBlockStage;