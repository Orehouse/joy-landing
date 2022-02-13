import Image from 'next/image';

import BlockTemplate from '../BlockTemplate/BlockTemplate';

import styles from './ReadyNowBlock.module.scss';
import ReadyNowBlockFeature from './_Feature/ReadyNowBlockFeature';
import {CIRCLE_COLOR} from '../Circle/Circle';
import Mark from '../ui/Mark/Mark';

import smileImg from '../../public/images/readynow/smile.svg';
import roomImg from '../../public/images/readynow/room.png';
import couponsImg from '../../public/images/readynow/coupons.png';
import instructionsImg from '../../public/images/readynow/instructions.png';

const features = [
  {
    title: 'Квест-комнаты',
    featureItem: {
      alt: 'Квест-комнаты',
      image: roomImg,
      imageShadow: true,
      circleColor: CIRCLE_COLOR.ORANGE,
    },
    textBlock: {
      topContent: <><Mark>Создавайте уроки в новых комнатах:</Mark> Хэллоуин,
        Кабинет физики, Комната бабушки, Читальный зал.</>,
      bottomContent: <div className={styles.readyNowBlockSmileContainer}>
        Скоро будут еще <span><Image src={smileImg} alt={':)'}/></span>
      </div>,
    },
  },
  {
    title: 'Материалы для уроков',
    featureItem: {
      alt: 'Материалы для уроков',
      image: couponsImg,
      circleColor: CIRCLE_COLOR.TURQUOISE,
    },
    textBlock: {
      topContent: <><Mark>Скачивайте необычные материалы,</Mark> которые сделают
        ваши уроки запоминающимися. </>,
      bottomContent: 'Что-то можно скачать бесплатно — например, счастливые купоны для учеников, шаблон презентации для ярких уроков, буклет про Джойтеку. А ещё мы готовим для вас сюрпризы к Новому году.',
    },
  },
  {
    title: 'Видео-инструкции',
    featureItem: {
      alt: 'Видео-инструкции',
      image: instructionsImg,
      circleColor: CIRCLE_COLOR.YELLOW_GRADIENT,
    },
    textBlock: {
      topContent: <><Mark>По каждому сервису мы записали
        видео-инструкции:</Mark> как создать занятие, какие функции можно
        включить, где смотреть результаты. </>,
      bottomContent: 'Всё для того, чтобы вам было проще пользоваться новой платформой.',
    },
  },
];

function ReadyNowBlock() {
  return <BlockTemplate>
    <div className={styles.readyNowBlock}>
      <h2 className={styles.readyNowBlockTitle}>Что нового уже сейчас</h2>
      <div className={styles.readyNowBlockFeatures}>
        {features.map(
            (f, i) =>
                <ReadyNowBlockFeature
                    key={i}
                    title={f.title}
                    index={i + 1}
                    featureItemProps={f.featureItem}
                    textBlockProps={f.textBlock}
                />)}
      </div>
    </div>
  </BlockTemplate>;
}

export default ReadyNowBlock;