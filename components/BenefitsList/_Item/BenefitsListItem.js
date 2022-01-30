import {forwardRef} from 'react';
import classnames from 'classnames';

import PropTypes from 'prop-types';
import styles from './BenefitsListItem.module.scss';

function BenefitsListItem(props, ref) {
  const {title, description, active} = props;
  return <div ref={ref} className={
    classnames(
        styles.benefitsListItem,
        active && styles.benefitsListItem__active)
  }>
    <div className={styles.benefitsListItemTitle}>{title}</div>
    <div className={styles.benefitsListItemDescription}>{description}</div>
  </div>;
}

BenefitsListItem.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  active: PropTypes.bool,
};

BenefitsListItem.defaultPropTypes = {
  active: false,
};

export default forwardRef(BenefitsListItem);