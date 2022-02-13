import BlockTemplate from '../BlockTemplate/BlockTemplate';

import styles from './NewServiceBlock.module.scss';
import Circle, {CIRCLE_COLOR, CIRCLE_SIZE} from '../Circle/Circle';
import classNames from 'classnames';
import {Cons, Pros} from '../ProsCons/ProsCons';

import questionsImg from '../../public/images/newservice/questions.jpg';
import settingsImg from '../../public/images/newservice/settings.jpg';
import statisticsImg from '../../public/images/newservice/statistics.jpg';
import NewServiceBlockFeature from './_Feature/NewServiceBlockFeature';

const features = [
  {
    image: questionsImg,
    alt: 'Добавляйте разные типы вопросов',
    title: 'Добавляйте разные типы вопросов',
    description: 'Открытые, с множественным и одиночным выбором, с картинкой для подсказки.',
  },
  {
    image: settingsImg,
    alt: 'Используйте дополнительные настройки',
    title: 'Используйте дополнительные настройки',
    description: 'Установите дату, до которой ученикам нужно пройти тест, поставьте таймер на прохождение теста и каждого вопроса, включите пропуск вопросов.',
  },
  {
    image: statisticsImg,
    alt: 'Смотрите результаты в личном кабинете',
    title: 'Смотрите результаты в личном кабинете',
    description: 'С автопроверкой вы сможете увидеть, как ученики прошли тест, а также показать результаты прохождения им.',
  },
];

function NewServiceBlock() {
  return <BlockTemplate>
    <div className={styles.newServiceBlock}>
      <div className={styles.newServiceBlockBG}>
        <div className={styles.newServiceBlockBGContainer}>
          <Circle color={CIRCLE_COLOR.DEFAULT_GRADIENT} size={CIRCLE_SIZE.BIG}/>
          <div className={styles.newServiceBlockBGPattern}/>
        </div>
      </div>
      <h2 className={styles.newServiceBlockTitle}>Новый сервис</h2>
      <h2 className={classNames(
          styles.newServiceBlockTitle,
          styles.newServiceBlockTitle_bottom,
      )}>
        Тестирование
      </h2>
      <div className={styles.newServiceBlockItemContainer}>
        <div className={styles.newServiceBlockItem}>
          <Cons>
            Вам больше не придётся искать, в каких сервисах можно создать тест.
            Не нужно загружать вордовский документ, распечатывать его и
            раздавать ученикам. Не тратьте время на самостоятельную проверку
            каждого ответа по каждому ученику.
          </Cons>
        </div>
        <div className={classNames(styles.newServiceBlockItem,
            styles.newServiceBlockItemContainer_bold)}>
          <Pros>
            Проводите контроль знаний по теме легко — с сервисом тестирования в
            Joyteka
          </Pros>
        </div>
      </div>
      <div className={styles.newServiceBlockBGFeatures}>
        {features.map((f, i) => (<NewServiceBlockFeature key={i} {...f}/>))}
      </div>
    </div>
  </BlockTemplate>;
}

export default NewServiceBlock;