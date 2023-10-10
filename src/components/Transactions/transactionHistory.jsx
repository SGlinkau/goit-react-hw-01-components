import PropTypes from 'prop-types';

export const TransactionsHistory = ({ items }) => {
    return (
        <section>
        <table class="transaction-history">
            <thead>
              <tr>
                <th>Type</th>
                <th>Amount</th>
                <th>Currency</th>
              </tr>
            </thead>

            <tbody>
                {items.map(({ id, type, amount, currency }) => {
                    return (
                        <tr key={id}>
                            <td>{type}</td>
                            <td>{amount}</td>
                            <td>{currency}</td>
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