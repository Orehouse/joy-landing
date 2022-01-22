import BlockTemplate from '../BlockTemplate/BlockTemplate';
import HeadBlockHeader from './_Header/HeadBlockHeader';

import styles from './HeadBlock.module.scss';
import HeadBlockCards from './_Cards/HeadBlockCards';
import Button from '../ui/Button/Button';
import ScrollButton from '../ui/ScrollButton/ScrollButton';

const cardsData = [
  {
    title: 'Новая платформа',
    description: 'Обновлённый дизайн, продуманный до мелочей',
  },
  {
    title: 'Новые сервисы',
    description: 'Появился пятый сервис — тестирование',
  },
  {
    title: 'Новые возможности',
    description: 'Добавили функции, которых так не хватало на Learnis',
  },
  {
    title: 'Новые комнаты',
    description: 'Вышло уже 4 новых тематических комнаты на Joyteka',
  },
  {
    title: 'Новое для учителей',
    description: 'Материалы для уроков — бесплатные и за символическую цену',
  },
];

function HeadBlock() {
  return <BlockTemplate backgroundClassName={styles.background}>
    <HeadBlockHeader/>
    <h1 className={styles.title}>Joyteka — для тех, кто хочет большего</h1>
    <div className={styles.mobileReverse}>
      <HeadBlockCards cards={cardsData}/>
      <div className={styles.register}><Button>Зарегистрироваться</Button></div>
    </div>
    <div className={styles.scrollSection}><ScrollButton/></div>
  </BlockTemplate>;
}

export default HeadBlock;