import styles from './FriendListItem.module.css';
export default function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div className={styles.thumb}>
      <img className={styles.image} src={avatar} alt="Avatar" width="64" />
      <p className={styles.name}>{name}</p>
      {isOnline ? (
        <p className={styles.online}>{'online'}</p>
      ) : (
        <p className={styles.offline}>{'offline'}</p>
      )}
    </div>
  );
}
