import classNames from 'classnames';
import PropTypes from 'prop-types';

import styles from './ProsCons.module.scss';

function ProsCons(className) {
  // eslint-disable-next-line react/display-name
  return (props) => {
    const {children} = props;
    return <div className={classNames(styles.prosCons, className)}>
      {children}
    </div>;
  };
}

const Pros = ProsCons(styles.prosConsPros);
const Cons = ProsCons(styles.prosConsCons);

Pros.propTypes = {
  children: PropTypes.node.isRequired,
};
Cons.propTypes = {
  children: PropTypes.node.isRequired,
};

export {Pros, Cons};