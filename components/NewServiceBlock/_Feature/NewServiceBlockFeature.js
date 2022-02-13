import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './NewServiceBlockFeature.module.scss';

function NewServiceBlockFeature(props) {
  const {image, alt, title, description} = props;
  return <div className={styles.newServiceBlockFeature}>
    <div className={styles.newServiceBlockFeatureImage}>
      <Image src={image} alt={alt} layout={'responsive'} sizes={'100vw'}
             quality={100} lazyBoundary={'300px'}/>
    </div>
    <div className={styles.newServiceBlockFeatureTextBlock}>
      <div className={styles.newServiceBlockFeatureTitle}>
        {title}
      </div>
      <div className={styles.newServiceBlockFeatureDescription}>
        {description}
      </div>
    </div>
  </div>;
}

NewServiceBlockFeature.propTypes = {
  image: PropTypes.object.isRequired,
  alt: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default NewServiceBlockFeature;