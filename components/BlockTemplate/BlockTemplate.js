import classnames from 'classnames';

import styles from './BlockTemplate.module.scss';

function BlockTemplate(props) {
  const {children, backgroundClassName} = props;
  return <div className={classnames(styles.blockTemplate, backgroundClassName)}>
    <div className={styles.content}>
      {children}
    </div>
  </div>;
}

export default BlockTemplate;