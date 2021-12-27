import BlockTemplate from '../PageTemplate/BlockTemplate';
import HeadBlockHeader from './_Header/HeadBlockHeader';

import styles from './HeadBlock.module.scss';
import HeadBlockCards from './_Cards/HeadBlockCards';

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
    <HeadBlockCards cards={cardsData}/>
  </BlockTemplate>;
}

export default HeadBlock;