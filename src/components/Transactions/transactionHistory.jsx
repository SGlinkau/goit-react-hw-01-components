import PropTypes from 'prop-types';
import css from './transactionsStyles.module.css'

export const TransactionsHistory = ({ items }) => {
    return (
        <section className={css.transactions}>
        <table className={css.table}>
            <thead className={css.table__header}>
              <tr>
                <th className={css.table__heading}>Type</th>
                <th className={css.table__heading}>Amount</th>
                <th className={css.table__heading}>Currency</th>
              </tr>
            </thead>

            <tbody className={css.table__body}>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id} className={css.table__row}>
                            <td className={css.table__cell}>{type}</td>
                            <td className={css.table__cell}>{amount}</td>
                            <td className={css.table__cell}>{currency}</td>
                        </tr>
                    );
                })}
            </tbody>
        </table>
        </section>
    );
};

TransactionsHistory.propTypes = {
  items: PropTypes.array,
};