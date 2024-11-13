import FriendListItem from './FriendListItem';
import styles from './FriendList.module.css';

export default function FriendList({ friends }) {
  const markup = friends.map(friend => (
    <li key={friend.id}>
      <FriendListItem
        avatar={friend.avatar}
        name={friend.name}
        isOnline={friend.isOnline}
      />
    </li>
  ));
  return <ul className={styles.list}>{markup}</ul>;
}
