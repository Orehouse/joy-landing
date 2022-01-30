import styles from './HeadBlockCards.module.scss';

function HeadBlockCards(props) {
  const {cards} = props;
  return <div className={styles.headBlockCards}>
    {cards.map(
        (card, index) => (
            <div key={index} className={styles.headBlockCardsItem}>
              <div className={styles.headBlockCardsTitle}>{card.title}</div>
              <div>{card.description}</div>
            </div>
        ))}
  </div>;
}

export default HeadBlockCards;