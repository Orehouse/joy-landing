import classnames from 'classnames';
import PropTypes from 'prop-types';

import styles from './BlockTemplate.module.scss';

function BlockTemplate(props) {
  const {children, backgroundClassName} = props;
  return <div className={classnames(styles.blockTemplate, backgroundClassName)}>
    <div className={styles.blockTemplateContent}>
      {children}
    </div>
  </div>;
}

BlockTemplate.propTypes = {
  children: PropTypes.node.isRequired,
  backgroundClassName: PropTypes.string,
};

BlockTemplate.defaultProps = {
  backgroundClassName: null,
};

export default BlockTemplate;