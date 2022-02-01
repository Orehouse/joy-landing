import BlockTemplate from '../BlockTemplate/BlockTemplate';

import styles from './WhatsNewBlock.module.scss';
import WhatsNewBlockSite from './_Site/WhatsNewBlockSite';
import WhatsNewBlockPremium from './_Premium/WhatsNewBlockPremium';

function WhatsNewBlock() {
  return <BlockTemplate>
    <div className={styles.whatsNewBlock}>
      <div className={styles.whatsNewBlockBulb}/>
      <h5 className={styles.whatsNewBlockLetsStart}>Начнем по порядку</h5>
      <h2 className={styles.whatsNewBlockTitle}>Что изменилось</h2>

      <WhatsNewBlockSite/>
      <WhatsNewBlockPremium/>
    </div>
  </BlockTemplate>;
}

export default WhatsNewBlock;