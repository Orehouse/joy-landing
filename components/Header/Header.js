import Image from 'next/image';

import BlockTemplate from '../PageTemplate/BlockTemplate';
import Button from '../ui/Button/Button';

import styles from './Header.module.scss';

function Header() {
  return <BlockTemplate backgroundClassName={styles.background}>
    <div className={styles.header}>
      <div className={styles.logos}>
        <Image src={'images/header/logo-joyteka.svg'} alt="Joyteka"/>
        <Image src={'images/header/logo-learnis.svg'} alt="Learnis"/>
      </div>
      <div className={styles.buttons}>
        <Button>Зарегистрироваться</Button>
      </div>
    </div>
    <div className={styles.line}/>
    <h1 className={styles.title}>Joyteka — для тех, кто хочет большего</h1>
  </BlockTemplate>;
}

export default Header;