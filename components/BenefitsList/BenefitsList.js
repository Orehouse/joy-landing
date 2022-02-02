import PropTypes from 'prop-types';
import {createRef, useEffect, useState} from 'react';

import BenefitsListItem from './_Item/BenefitsListItem';
import styles from './BenefitsList.module.scss';

function BenefitsList(props) {
  const {benefits} = props;

  const [activeItemIndex, setActiveItemIndex] = useState(-1);
  const activeItemIndexRef = createRef();
  activeItemIndexRef.current = -1;

  const viewportCenterRef = createRef();
  viewportCenterRef.current = 0;

  const refs = createRef();
  refs.current = [];

  const getDistanceToViewportCenter = (el) => {
    const {height, top} = el.getBoundingClientRect();
    const itemCenter = height / 2 + top;
    return Math.abs(viewportCenterRef.current - itemCenter);
  };

  const handleScroll = () => {
    for (let i = 0; i < refs.current.length; i++) {
      if (activeItemIndexRef.current < 0) {
        activeItemIndexRef.current = i;
        break;
      }
      const current = refs.current[i];
      const distance = getDistanceToViewportCenter(current);
      const activeDistance = getDistanceToViewportCenter(
          refs.current[activeItemIndexRef.current]);
      if (distance < activeDistance) {
        activeItemIndexRef.current = i;
      }
    }
    setActiveItemIndex(activeItemIndexRef.current);
  };

  const getViewportCenter = () => document.documentElement.clientHeight / 2;

  const handleResize = () => {
    viewportCenterRef.current = getViewportCenter();
    handleScroll();
  };

  const addToRefs = (el) => {
    if (el && !refs.current.includes(el)) {
      refs.current.push(el);
    }
  };

  useEffect(() => {
    handleResize();
    document.addEventListener('scroll', handleScroll, {passive: true});
    document.addEventListener('resize', handleResize, {passive: true});
    return () => {
      document.removeEventListener('scroll', handleScroll);
      document.removeEventListener('resize', handleResize);
    };
  }, []);

  return <div className={styles.benefitsList}>
    {benefits.map(
        (b, i) => <BenefitsListItem
            ref={addToRefs}
            key={i}
            {...b}
            active={i === activeItemIndex}
        />)}
  </div>;
}

BenefitsList.propTypes = {
  benefits: PropTypes.arrayOf(PropTypes.shape({
    title: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
  })),
};

export default BenefitsList;