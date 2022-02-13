import classnames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Circle, {CIRCLE_COLOR} from '../Circle/Circle';

import styles from './FeatureItem.module.scss';

export const CONTENT_ALIGN = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
};

export {CIRCLE_COLOR};

function FeatureItem(props) {
  const {
    children,
    image,
    alt,
    contentAlign,
    circleColor,
    imageShadow,
    circleCentered,
  } = props;
  return <div className={classnames(
      styles.featureItem,
      contentAlign === CONTENT_ALIGN.RIGHT &&
      styles.featureItem_reverse,
  )}>
    <div className={classnames(
        styles.featureItemCircle,
        contentAlign === CONTENT_ALIGN.RIGHT
            ? styles.featureItemCircle_left
            : styles.featureItemCircle_right,
        circleCentered && (contentAlign === CONTENT_ALIGN.RIGHT
            ? styles.featureItemCircle_left_centered
            : styles.featureItemCircle_right_centered)
    )}>
      <Circle color={circleColor}/>
    </div>
    <div className={styles.featureItemContent}>
      {children}
    </div>
    <div className={styles.featureItemImage}>
      <div className={imageShadow && styles.featureItemImage_shadow}>
        <Image alt={alt} src={image}
               layout={'responsive'} sizes={'100vw'}
               quality={100} lazyBoundary={'300px'}
        />
      </div>
    </div>
  </div>;
}

export const FeatureItemPropTypes = {
  children: PropTypes.node.isRequired,
  image: PropTypes.object.isRequired,
  imageShadow: PropTypes.bool,
  alt: PropTypes.string.isRequired,
  circleColor: PropTypes.oneOf(Object.values(CIRCLE_COLOR)),
  contentAlign: PropTypes.oneOf(Object.values(CONTENT_ALIGN)),
  circleCentered: PropTypes.bool,
};

FeatureItem.propTypes = FeatureItemPropTypes;

FeatureItem.defaultProps = {
  circleColor: CIRCLE_COLOR.TURQUOISE,
  contentAlign: CONTENT_ALIGN.LEFT,
  imageShadow: false,
  circleCentered: false,
};

export default FeatureItem;