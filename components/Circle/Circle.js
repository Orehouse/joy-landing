import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './Circle.module.scss';

export const CIRCLE_COLOR = {
  DEFAULT_GRADIENT: styles.circleDefaultGradient,
  TURQUOISE: styles.circleTurquoise,
  YELLOW_GRADIENT: styles.circleYellowGradient,
  DARK_GREEN: styles.circleDarkGreen,
  ORANGE: styles.circleOrange,
};

export const CIRCLE_SIZE = {
  NORMAL: styles.circleNormalSize,
  BIG: styles.circleBigSize,
};

function Circle(props) {
  const {color, size} = props;
  return <div className={classnames(styles.circle, color, size)}/>;
}

Circle.propTypes = {
  color: PropTypes.oneOf(Object.values(CIRCLE_COLOR)).isRequired,
  size: PropTypes.oneOf(Object.values(CIRCLE_SIZE)),
};

Circle.defaultProps = {
  size: CIRCLE_SIZE.NORMAL,
};

export default Circle;

