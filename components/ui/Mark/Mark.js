import classnames from 'classnames';
import PropTypes from 'prop-types';
import styles from './Mark.module.scss';

export const MARK_COLOR = {
  YELLOW: styles.markYellow,
  TURQUOISE_BRIGHT: styles.markTurquoise,
};

function Mark(props) {
  const {children, color} = props;
  return <span className={classnames(styles.mark, color)}>{children}</span>;
}

Mark.propTypes = {
  color: PropTypes.oneOf(Object.values(MARK_COLOR)),
};

Mark.defaultProps = {
  color: MARK_COLOR.YELLOW,
};

export default Mark;