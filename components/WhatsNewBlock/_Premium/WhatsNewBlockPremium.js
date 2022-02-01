import WhatsNewBlockItem from '../_Item/WhatsNewBlockItem';
import TextBlock from '../../TextBlock/TextBlock';
import Mark from '../../ui/Mark/Mark';

import styles from './WhatsNewBlockPremium.module.scss';
import tariffImg from '../../../public/images/whatsnew/tariff.png';
import WhatsNewBlockFeature, {
  CIRCLE_COLOR,
  CONTENT_ALIGN,
} from '../_Feature/WhatsNewBlockFeature';

const topContent = <>
  Раньше мы подключали тариф за 3–5 рабочих дней.
  Теперь <Mark>подключение и оплата премиум-доступа проходят в моменте.</Mark>
</>;
const bottomContent = 'Мы расширили функционал сервисов и сделали три тарифа. Выбирайте тот, который поможет вам проводить уроки удобнее всего. Бесплатный тариф также есть, а функций на нём стало больше';
const title = <span className={styles.whatsNewBlockPremiumTitle}>
  Премиум-доступ
</span>;

function WhatsNewBlockPremium() {
  return <WhatsNewBlockItem title={title}>
    <WhatsNewBlockFeature
        image={tariffImg}
        contentAlign={CONTENT_ALIGN.LEFT}
        circleColor={CIRCLE_COLOR.TURQUOISE}
    >
      <TextBlock topContent={topContent} bottomContent={bottomContent}/>
    </WhatsNewBlockFeature>
  </WhatsNewBlockItem>;
}

export default WhatsNewBlockPremium;