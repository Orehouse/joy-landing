import Image from 'next/image';

import BlockTemplate from '../BlockTemplate/BlockTemplate';

import styles from './WhatsNewBlock.module.scss';
import WhatsNewBlockFeature from './_Feature/WhatsNewBlockFeature';

import tanya from '../../public/images/whatsnew/Tanya.png';
import Mark from '../ui/Mark/Mark';
import Circle, {CIRCLE_COLOR} from '../ui/Circle/Circle';

function WhatsNewBlock() {
  return <BlockTemplate>
    <div className={styles.whatsNewBlock}>
      <div className={styles.whatsNewBlockBulb}/>
      <h5 className={styles.whatsNewBlockLetsStart}>Начнем по порядку</h5>
      <h2 className={styles.whatsNewBlockTitle}>Что изменилось</h2>
      <WhatsNewBlockFeature title={'Сайт'}>
        <div className={styles.whatsNewBlockCircle}>
          <Circle color={CIRCLE_COLOR.DEFAULT_GRADIENT}/></div>
        <div className={styles.whatsNewBlockSite}>
          <div>
            <div className={styles.whatsNewBlockTanyaImg}>
              <Image src={tanya} alt="Таня"/>
            </div>
            <div className={styles.whatsNewBlockTanyaSign}>Дизайн полностью
              переработала
              Таня, UX-дизайнер и соосновательница платформы.
            </div>
          </div>
          <div className={styles.whatsNewBlockQuote}>«Сайт и личный кабинет
            теперь
            сделаны <Mark>интуитивно понятными:</Mark> мы их разграничили,
            убрали лишнее и добавили нужное. Теперь на сайте вы можете прочитать
            информацию о сервисах, тарифах, команде. А в личном кабинете —
            создавать уроки».
            <hr align="right"/>
          </div>
        </div>
      </WhatsNewBlockFeature>
    </div>
  </BlockTemplate>;
}

export default WhatsNewBlock;