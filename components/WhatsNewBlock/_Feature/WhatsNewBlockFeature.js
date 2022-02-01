import classnames from 'classnames';
import PropTypes from 'prop-types';
import Image from 'next/image';

import Circle, {CIRCLE_COLOR} from '../../Circle/Circle';

import styles from './WhatsNewBlockFeature.module.scss';

export const CONTENT_ALIGN = {
  RIGHT: 'RIGHT',
  LEFT: 'LEFT',
};

function WhatsNewBlockFeature(props) {
  const {children, image, contentAlign, circleColor} = props;
  return <div className={classnames(
      styles.whatsNewBlockFeature,
      contentAlign === CONTENT_ALIGN.RIGHT &&
      styles.whatsNewBlockFeature_reverse,
  )}>
    <div className={classnames(
        styles.whatsNewBlockFeatureCircle,
        contentAlign === CONTENT_ALIGN.RIGHT
            ? styles.whatsNewBlockFeatureCircle_left
            : styles.whatsNewBlockFeatureCircle_right,
    )}>
      <Circle color={circleColor}/>
    </div>
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
  circleColor: PropTypes.oneOf(Object.values(CIRCLE_COLOR)),
  contentAlign: PropTypes.oneOf(Object.values(CONTENT_ALIGN)),
};

WhatsNewBlockFeature.defaultProps = {
  circleColor: CIRCLE_COLOR.TURQUOISE,
  contentAlign: CONTENT_ALIGN.LEFT,
};

export default WhatsNewBlockFeature;