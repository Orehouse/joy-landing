import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './WhatsNewBlockItem.module.scss';

function WhatsNewBlockItem(props) {
  const {title, children, noMargin} = props;
  return <div className={
    classnames(
        styles.whatsNewBlockItem,
        !noMargin && styles.whatsNewBlockItemMargin,
    )
  }>
    <h3 className={styles.whatsNewBlockItemTitle}>{title}</h3>
    {children}
  </div>;
}

WhatsNewBlockItem.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  noMargin: PropTypes.bool,
};

WhatsNewBlockItem.defaultProps = {
  noMargin: false,
};

export default WhatsNewBlockItem;