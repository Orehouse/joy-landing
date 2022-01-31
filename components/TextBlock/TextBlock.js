import PropTypes from 'prop-types';

import styles from './TextBlock.module.scss';

function TextBlock(props) {
  const {topContent, bottomContent} = props;
  return <div className={styles.textBlock}>
    <div className={styles.textBlockTopContent}>{topContent}</div>
    <div className={styles.textBlockBottomContent}>{bottomContent}</div>
  </div>;
}

TextBlock.propTypes = {
  topContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
  bottomContent: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.node,
  ]).isRequired,
};

export default TextBlock;