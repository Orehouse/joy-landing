import classnames from 'classnames';
import Image from 'next/image';

import BlockTemplate from '../BlockTemplate/BlockTemplate';

import ReloadBlockStage from './_Stage/ReloadBlockStage';

import styles from './ReloadBlock.module.scss';

import stickersImg from '../../public/images/stickers.png';

function ReloadBlock() {
  return <BlockTemplate>
    <div className={styles.reloadBlock}>
      <div className={styles.reloadBlockColumn__left}>
        <h2 className={styles.reloadBlockTitle}>
          Перезагрузка:
        </h2>
      </div>
      <div className={styles.reloadBlockColumn__right}>
        <h2 className={styles.reloadBlockTitle}>
          качество, удобство, возможности
        </h2>
        <div className={styles.reloadBlockStage}>
          <ReloadBlockStage label={'2018'}>
            Learnis — это наш первый опыт по созданию платформы. С 2018 года мы
            собирали обратную связь от вас, тестировали функции, изучали, что
            внедрить в сервисы, чтобы вы смогли проводить в них самые
            запоминающиеся уроки.
          </ReloadBlockStage>
        </div>
        <div className={
          classnames(styles.reloadBlockStage, styles.reloadBlockStage__image)}
        >
          <Image src={stickersImg} alt="Stickers"/>
        </div>
        <div className={styles.reloadBlockStage}>
          <ReloadBlockStage label={'2021'}>
            За эти годы мы набрались опыта и накопили много идей, какую
            платформу хотим для вас сделать. Выход был один — начать с нуля. Так
            появилась Joyteka.
          </ReloadBlockStage>
        </div>
      </div>
    </div>
  </BlockTemplate>;
}

export default ReloadBlock;