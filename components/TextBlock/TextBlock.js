import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './TextBlock.module.scss';

export const TEXT_BLOCK_SIZE = {
  MEDIUM: '_medium',
  LARGE: '_large',
};

function TextBlock(props) {
  const {topContent, bottomContent, size} = props;
  return <div className={classnames(
      styles.textBlock,
      size && styles[`textBlock${size}`],
  )}>
    <div className={classnames(
        styles.textBlockTopContent,
        size && styles[`textBlockTopContent${size}`],
    )}>
      {topContent}
    </div>
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
  size: PropTypes.oneOf(Object.values(TEXT_BLOCK_SIZE)),
};

TextBlock.defaultProps = {
  size: TEXT_BLOCK_SIZE.MEDIUM,
};

export default TextBlock;