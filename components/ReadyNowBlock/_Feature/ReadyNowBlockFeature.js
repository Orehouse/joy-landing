import PropTypes from 'prop-types';
import AccidentalText from '../../ui/AccidentalText/AccidentalText';

import styles from './ReadyNowBlockFeature.module.scss';
import TextBlock from '../../TextBlock/TextBlock';
import FeatureItem from '../../FeatureItem/FeatureItem';

function ReadyNowBlockFeature(props) {
  const {featureItemProps, textBlockProps, index, title} = props;
  return <div className={styles.readyNowBlockFeature}>
    <div className={styles.readyNowBlockFeatureTitle}>
      <div className={styles.readyNowBlockFeatureTitleIndex}>
        <AccidentalText text={index}/>
      </div>
      <h3 className={styles.readyNowBlockFeatureTitleText}>{title}</h3>
    </div>
    <FeatureItem {...featureItemProps} circleCentered>
      <TextBlock {...textBlockProps}/>
    </FeatureItem>
  </div>;
}

ReadyNowBlockFeature.propTypes = {
  index: PropTypes.oneOf(PropTypes.string, PropTypes.number),
  title: PropTypes.string,
  featureItemProps: PropTypes.object.isRequired,
  textBlockProps: PropTypes.object.isRequired,
};

ReadyNowBlockFeature.defaultProps = {
  index: '',
};

export default ReadyNowBlockFeature;