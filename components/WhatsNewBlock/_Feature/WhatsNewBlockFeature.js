import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './WhatsNewBlockFeature.module.scss';

function WhatsNewBlockFeature(props) {
  const {title, children, noMargin} = props;
  return <div className={
    classnames(
        styles.whatsNewBlockFeature,
        !noMargin && styles.whatsNewBlockFeatureMargin,
    )
  }>
    <h3 className={styles.whatsNewBlockFeatureTitle}>{title}</h3>
    {children}
  </div>;
}

WhatsNewBlockFeature.propTypes = {
  title: PropTypes.node.isRequired,
  children: PropTypes.node.isRequired,
  noMargin: PropTypes.bool,
};

WhatsNewBlockFeature.defaultProps = {
  noMargin: false,
};

export default WhatsNewBlockFeature;