import styles from './WhatsNewBlockSite.module.scss';
import Circle, {CIRCLE_COLOR} from '../../Circle/Circle';
import Image from 'next/image';
import tanya from '../../../public/images/whatsnew/Tanya.png';
import Mark from '../../ui/Mark/Mark';
import WhatsNewBlockFeature from '../_Feature/WhatsNewBlockFeature';

function WhatsNewBlockSite() {
  return <WhatsNewBlockFeature title={'Сайт'}>
    <div className={styles.whatsNewBlockSiteCircle}>
      <Circle color={CIRCLE_COLOR.DEFAULT_GRADIENT}/>
    </div>
    <div className={styles.whatsNewBlockSite}>
      <div>
        <div className={styles.whatsNewBlockSiteTanyaImg}>
          <Image src={tanya} alt="Таня"/>
        </div>
        <div className={styles.whatsNewBlockSiteTanyaSign}>Дизайн полностью
          переработала
          Таня, UX-дизайнер и соосновательница платформы.
        </div>
      </div>
      <div className={styles.whatsNewBlockSiteQuote}>«Сайт и личный кабинет
        теперь
        сделаны <Mark>интуитивно понятными:</Mark> мы их разграничили,
        убрали лишнее и добавили нужное. Теперь на сайте вы можете прочитать
        информацию о сервисах, тарифах, команде. А в личном кабинете —
        создавать уроки».
        <hr align="right"/>
      </div>
    </div>
  </WhatsNewBlockFeature>;
}

export default WhatsNewBlockSite;