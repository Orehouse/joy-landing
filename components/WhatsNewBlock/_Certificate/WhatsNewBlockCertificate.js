import Image from 'next/image';

import WhatsNewBlockItem from '../_Item/WhatsNewBlockItem';
import WhatsNewBlockFeature, {
  CIRCLE_COLOR,
  CONTENT_ALIGN,
} from '../_Feature/WhatsNewBlockFeature';
import TextBlock, {TEXT_BLOCK_SIZE} from '../../TextBlock/TextBlock';

import certificate from '../../../public/images/whatsnew/certificate.png';
import Mark, {MARK_COLOR} from '../../ui/Mark/Mark';

import styles from './WhatsNewBlockCertificate.module.scss';
import mailIcon from '../../../public/images/whatsnew/mailIcon.svg';
import eyesIcon from '../../../public/images/whatsnew/eyesIcon.svg';

const title = 'Сертификаты';
const topContent = <>
  На Learnis можно было создать сертификаты только на квесты и видео. Сейчас вы
  можете заказывать <Mark color={MARK_COLOR.TURQUOISE_BRIGHT}>сертификаты на все
  5 сервисов.</Mark>
</>;
const bottomContent = <>
  <div className={styles.whatsNewBlockCertificateItem}>
    <div className={styles.whatsNewBlockCertificateItemIcon}>
      <Image src={mailIcon} alt="Вышлем сертификат"/>
    </div>
    <div>Больше никаких трёх дней на получение сертификата.
      Оставьте заявку, и мы сразу вышлем его на вашу почту.
    </div>
  </div>
  <div className={styles.whatsNewBlockCertificateItem}>
    <div className={styles.whatsNewBlockCertificateItemIcon}>
      <Image src={eyesIcon} alt="Добавили предпросмотр"/>
    </div>
    <div>Сделали предпросмотр: при заказе сертификата вы в моменте будете
      видеть, как он выглядит. ФИО, номер созданного урока, описание — всё, что
      вы вводите, будет отражаться на экране рядом.
    </div>
  </div>
</>;

function WhatsNewBlockCertificate() {
  return <WhatsNewBlockItem title={title}>
    <WhatsNewBlockFeature
        image={certificate}
        contentAlign={CONTENT_ALIGN.RIGHT}
        circleColor={CIRCLE_COLOR.YELLOW_GRADIENT}
    >
      <TextBlock
          topContent={topContent}
          bottomContent={bottomContent}
          size={TEXT_BLOCK_SIZE.LARGE}
      />
    </WhatsNewBlockFeature>
  </WhatsNewBlockItem>;
}

export default WhatsNewBlockCertificate;