import styles from './Transactions.module.css';
export default function TransactionHistory({ items }) {
  const markup = items.map(item => (
    <tr key={item.id}>
      <td>{item.type}</td>
      <td>{item.amount}</td>
      <td>{item.currency}</td>
    </tr>
  ));
  return (
    <table className={styles.myTable}>
      <thead>
        <tr className={styles.headerRow}>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>

      <tbody>{markup}</tbody>
    </table>
  );
}
