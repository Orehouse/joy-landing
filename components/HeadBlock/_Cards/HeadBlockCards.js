import styles from './HeadBlockCards.module.scss';

function HeadBlockCards(props) {
  const {cards} = props;
  return <div className={styles.container}>
    {cards.map(
        (card, index) => (
            <div key={index} className={styles.card}>
              <div className={styles.title}>{card.title}</div>
              <div className={styles.description}>{card.description}</div>
            </div>
        ))}
  </div>;
}

export default HeadBlockCards;