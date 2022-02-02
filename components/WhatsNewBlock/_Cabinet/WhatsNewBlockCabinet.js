import WhatsNewBlockItem from '../_Item/WhatsNewBlockItem';
import TextBlock from '../../TextBlock/TextBlock';
import Mark from '../../ui/Mark/Mark';
import cabinetImg from '../../../public/images/whatsnew/cabinet.png';
import WhatsNewBlockFeature, {
  CIRCLE_COLOR,
  CONTENT_ALIGN,
} from '../_Feature/WhatsNewBlockFeature';
import BenefitsList from '../../BenefitsList/BenefitsList';

import styles from './WhatsNewBlockCabinet.module.scss';

const topContent = <>
  В меню добавили ваш профиль — <Mark>можете в любой момент посмотреть логин,
  пароль и ваш тариф.</Mark>
</>;
const bottomContent = 'А ещё теперь видна дата, до которой тариф оплачен. Можете оплатить следующий месяц заранее, чтобы не потерять доступ к платным функциям.';
const title = 'Личный кабинет';

const benefits = [
  {
    title: 'Вход по одной кнопке',
    description: 'Теперь вам не придётся каждый раз вручную вводить логин и пароль — можно заходить по одной кнопке через ваш гугл-аккаунт.',
  },
  {
    title: 'Фильтрация уроков',
    description: 'Все уроки, которые вы создадите, можно сортировать по сервисам. Раньше они шли подряд, и приходилось искать нужный сервис по всему списку созданных уроков.',
  },
  {
    title: 'Восстановление пароля',
    description: 'При восстановлении пароля теперь вы сами задаёте нужный. До этого приходилось пользоваться тем, который приходил в письме — поменять было нельзя.',
  },
];

function WhatsNewBlockCabinet() {
  return <WhatsNewBlockItem title={title}>
    <WhatsNewBlockFeature
        image={cabinetImg}
        imageShadow
        alt="Кабинет"
        contentAlign={CONTENT_ALIGN.LEFT}
        circleColor={CIRCLE_COLOR.DARK_GREEN}
    >
      <TextBlock topContent={topContent} bottomContent={bottomContent}/>
    </WhatsNewBlockFeature>
    <div className={styles.whatsNewBlockCabinetBenefits}>
      <BenefitsList benefits={benefits}/>
    </div>
  </WhatsNewBlockItem>;
}

export default WhatsNewBlockCabinet;