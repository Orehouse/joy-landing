import Image from 'next/image';
import PropTypes from 'prop-types';

import styles from './ScrollButton.module.scss';

import downImg from '../../../public/images/ui/down.svg';

function ScrollButton(props) {
  const {onClick} = props;
  return <button className={styles.scrollButton}>
    <Image src={downImg} onClick={onClick} alt=""/>
  </button>;
}

ScrollButton.propTypes = {
  onClick: PropTypes.func,
};

ScrollButton.defaultProps = {
  onClick: () => {},
};

export default ScrollButton;