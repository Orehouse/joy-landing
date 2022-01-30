import PropTypes from 'prop-types';

import styles from './WhatsNewBlockFeature.module.scss';

function WhatsNewBlockFeature(props) {
  const {title, children} = props;
  return <div className={styles.whatsNewBlockFeature}>
    <h3 className={styles.whatsNewBlockFeatureTitle}>{title}</h3>
    {children}
  </div>;
}

WhatsNewBlockFeature.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default WhatsNewBlockFeature;