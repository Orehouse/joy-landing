import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './BlockTemplate.module.scss';

function BlockTemplate(props) {
  const {children, customClassName} = props;
  return <div className={classnames(styles.blockTemplate, customClassName)}>
    <div className={styles.blockTemplateContent}>
      {children}
    </div>
  </div>;
}

BlockTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  customClassName: PropTypes.string,
};

BlockTemplate.defaultProps = {
  customClassName: null,
};

export default BlockTemplate;