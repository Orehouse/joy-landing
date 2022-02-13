import PropTypes from 'prop-types';

import styles from './AccidentalText.module.scss';

function AccidentalText(props) {
  const {text} = props;
  return <span className={styles.accidentalText}>{text}</span>;
}

AccidentalText.propTypes = {
  text: PropTypes.string.isRequired,
};

export default AccidentalText;