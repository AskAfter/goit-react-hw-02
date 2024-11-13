import styles from './Profile.module.css';
export default function Profile({ name, tag, location, image, stats }) {
  return (
    <div className={styles.thumb}>
      <div>
        <img className={styles.image} src={image} alt="User avatar" />
        <p className={styles.name}>{name}</p>
        <p className={styles.tag}>@{tag}</p>
        <p className={styles.tag}>{location}</p>
      </div>

      <ul className={styles.list}>
        <li className={styles.listLi}>
          <span className={styles.spanHeader}>Followers</span>
          <span className={styles.spanNumbers}>{stats.followers}</span>
        </li>
        <li className={styles.listLi}>
          <span className={styles.spanHeader}>Views</span>
          <span className={styles.spanNumbers}>{stats.views}</span>
        </li>
        <li className={`${styles.listLi} ${styles.listLiRight}`}>
          <span className={styles.spanHeader}>Likes</span>
          <span className={styles.spanNumbers}>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}
