import Image from 'next/image';

import Button from '../../ui/Button/Button';

import logoJoyteka from '../../../public/images/header/logo-joyteka.svg';
import logoLearnis from '../../../public/images/header/logo-learnis.svg';

import styles from './HeadBlockHeader.module.scss';

function HeadBlockHeader() {
  return <>
    <div className={styles.header}>
      <div className={styles.logos}>
        <span className={styles.logo}>
          <Image src={logoJoyteka} alt="Joyteka"/>
        </span>
        <span className={styles.logo}>
          <Image src={logoLearnis} alt="Learnis"/>
        </span>
      </div>
      <div className={styles.buttons}>
        <Button>Зарегистрироваться</Button>
      </div>
    </div>
    <div className={styles.line}/>
  </>;
}

export default HeadBlockHeader;