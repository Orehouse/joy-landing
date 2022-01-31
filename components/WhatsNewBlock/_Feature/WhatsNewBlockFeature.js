import PropTypes from 'prop-types';
import Image from 'next/image';

import styles from './WhatsNewBlockFeature.module.scss';

function WhatsNewBlockFeature(props) {
  const {children, image} = props;
  return <div className={styles.whatsNewBlockFeature}>
    <div className={styles.whatsNewBlockFeatureContent}>
      {children}
    </div>
    <div className={styles.whatsNewBlockFeatureImage}>
      <Image alt="Тарифы" src={image}/>
    </div>
  </div>;
}

WhatsNewBlockFeature.propTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
};

export default WhatsNewBlockFeature;