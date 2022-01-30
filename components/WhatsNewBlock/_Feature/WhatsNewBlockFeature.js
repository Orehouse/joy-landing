import propTypes from 'prop-types';

import styles from './WhatsNewBlockFeature.module.scss';

function WhatsNewBlockFeature(props) {
  const {title, children} = props;
  return <div className={styles.feature}>
    <h3 className={styles.title}>{title}</h3>
    {children}
  </div>;
}

WhatsNewBlockFeature.propTypes = {
  title: propTypes.string.isRequired,
  children: propTypes.node.isRequired,
};

export default WhatsNewBlockFeature;